'use strict';

const fs = require('fs');
const path = require('path')
const cheerio = require('cheerio');
const request = require('request-promise');
const str = require('string');
const flatCache = require('flat-cache');

const svgURL = 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute';
const dataPath = './data/attributes.json';
const htmlPath = './data/attributes.html';

const DefinitelyTypedReact = 'https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts'

// From https://reactjs.org/docs/dom-elements.html#differences-in-attributes
//
const supportedAttributes = ['accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic',
  'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse', 'azimuth',
  'baseFrequency', 'baseProfile', 'baselineShift', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'capHeight',
  'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation',
  'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType',
  'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant', 'direction',
  'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode', 'elevation', 'enableBackground',
  'end', 'exponent', 'externalResourcesRequired', 'fill', 'fillOpacity', 'fillRule', 'filter',
  'filterRes', 'filterUnits', 'floodColor', 'floodOpacity', 'focusable', 'fontFamily', 'fontSize',
  'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy',
  'g1', 'g2', 'glyphName', 'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef',
  'gradientTransform', 'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'ideographic',
  'imageRendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength',
  'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing', 'lightingColor',
  'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid', 'markerStart',
  'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'mode',
  'numOctaves', 'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow',
  'overlinePosition', 'overlineThickness', 'paintOrder', 'panose1', 'pathLength',
  'patternContentUnits', 'patternTransform', 'patternUnits', 'pointerEvents', 'points',
  'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits',
  'r', 'radius', 'refX', 'refY', 'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions',
  'requiredFeatures', 'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shapeRendering', 'slope',
  'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset',
  'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity',
  'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray',
  'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity',
  'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY', 'textAnchor',
  'textDecoration', 'textLength', 'textRendering', 'to', 'transform', 'u1', 'u2', 'underlinePosition',
  'underlineThickness', 'unicode', 'unicodeBidi', 'unicodeRange', 'unitsPerEm', 'vAlphabetic',
  'vHanging', 'vIdeographic', 'vMathematical', 'values', 'vectorEffect', 'version', 'vertAdvY',
  'vertOriginX', 'vertOriginY', 'viewBox', 'viewTarget', 'visibility', 'widths', 'wordSpacing',
  'writingMode', 'x', 'x1', 'x2', 'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole',
  'xlinkHref', 'xlinkRole', 'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlns', 'xmlnsXlink', 'xmlBase',
  'xmlLang', 'xmlSpace', 'y', 'y1', 'y2', 'yChannelSelector', 'z', 'zoomAndPan'];


// https://github.com/royriojas/flat-cache#readme

var pageCache = flatCache.load('pages', path.resolve('cache'));

const CACHE_TIMEOUT = 1000 * 7 * 24 * 60 * 60

const cacheSave = function(key, page) {
  const timeStamp = Date.now() + CACHE_TIMEOUT;
  const value = {timeStamp, page}
  pageCache.setKey(key, value)
  pageCache.save(true)
}

const cacheFetch = function(key) {
  const value = pageCache.getKey(key)
  if (value) {
    if (value.timeStamp > Date.now()) {
      return value.page
    }
    pageCache.removeKey(key);
    pageCache.save()
  }
  return undefined;
}


const fetchPage = async function(pageURL) {
  let page = cacheFetch(pageURL)
  if (! page) {
    console.log('Fetching %s', pageURL)
    try {
      page = await request(pageURL)
    } catch (error) {
      console.log("Error loading %s", pageURL)
      page = "?????"
    }
    cacheSave(pageURL, page)
  }
  return page
}
/**
 * Extract the type information for the given attribute from
 * React DefinitelyTyped react/index.d.ts
 *
 * @param {string} attr, eg alignment-baseline
 * @returns
 */

const getAttributeType = async function(attr) {

  const normaliseType = (str) => {
    return str.replace(/\s+/g, '')
              .split('|')
              .sort()
              .join('|')
              .replace('|undefined', '');
  }


  try {
    const reactDt = await fetchPage(DefinitelyTypedReact)
    const allTypes = reactDt.match(/SVGAttributes<T> extends[\s\S]*?}/gm)[0]

    const re = new RegExp(`${attr}(.?):(.*?);`)
    const definition = allTypes.match(re)
    if (definition.length === 3) {
      return {isRequired: false, type: normaliseType(definition[2])}
    }
    return {isRequired: true, type: normaliseType(definition[1])}

  } catch (error) {
    console.log('WARN: Attribute "%s": type missing from DefinitelyTyped react/index.d.ts', attr)
    return {optional: true, type: "number|string"}
  }
}

/**
 * Return list of SVG elements supported by react.js
 *
 * @returns
 */

const getReactElements = async function() {
  const reactDt = await fetchPage(DefinitelyTypedReact)
  const allElements = reactDt.match(/interface ReactSVG {([\s\S]*?)}/gm)[0];

  // const elements = allElements.match(/(\w+): SVGFactory;/g)
  const elements = allElements.match(/(\w+):/g)
  return Array.from(elements, m => m.slice(0, -1))
}

/**
 * Read the https://developer.mozilla.org{href} page and extract the
 * attribute description and the SVG elements that use the attribute
 *
 * @param {string} attr the the attribute name
 * @param {string} href the page reference
 *
 * @returns dict{description, deprecated, elements[]}
 */

const getAttributeDetails = async function(attr, href) {
  const pageURL = 'https://developer.mozilla.org' + href;

  // console.log(pageURL)

  let  description = '?????'
  let  deprecated = false
  let type = "????"
  const elements = []

  try {
    const html = await fetchPage(pageURL)
    if (html !== "?????") {
      const $ = cheerio.load(html);

      deprecated = $('div.notecard.deprecated').length === 1? true: false
      description = $('p', 'article').text().split('.')[0]

      type = await getAttributeType(attr)
      const usedByElements = $('p:contains("You can use this attribute")').next().find('code')

      const reactElements = await getReactElements()

      usedByElements.each((idx, el) => {
        const text = $(el).text().replace(/[<>]/g, '');

        // Skip element if it's not supported be react

        if (reactElements.includes(text)) {
          elements.push(text)
        }
      });
    }

  } catch (error) {
    console.log("Error loading %s", pageURL)
  }

  return {description, ...type, deprecated, pageURL, elements}
}

/**
 * From the MDN attributes reference, extract a map of attributes with
 * descriptions and supported elements.
 *
 * @param {*} $
 * @returns
 */

const extractAttributes = async function($) {

  // Get a list of attributes defined by the page

  const attributeList = [];

  "abcdefghijklmnopqrstuvwxyz".split('').forEach(letter => {
    const attributes = $(`h3[id=${letter}]`).next().find('a')
    attributes.each((i, attr) => {
      // console.log(cheerio(attr).text())

      const svgAttribute = str(cheerio(attr).text())
      .trim()
      // Convert e.g. `accept-charset` to `acceptCharset`
      .camelize()
      .toString();

      if (attr.attribs && attr.attribs.class === 'page-not-created') {
        console.log('WARN: Missing details "%s"', svgAttribute)
        return;
      }

      // Ensure attribute is supported by React
      if (!supportedAttributes.includes(svgAttribute)) {
        return;
      }

      const pageUrl = attr.attribs.href
      attributeList.push({svgAttribute, pageUrl})

    });
  });

  // Iterate over each attribute and scrape the
  // attribute details page and a list of elements that
  // use the attribute.

  const attributes = {}

  for (const i in attributeList) {
    const attr = attributeList[i]
    const details = await getAttributeDetails(attr.svgAttribute, attr.pageUrl)
    attributes[attr.svgAttribute] = details
  }

  return attributes;
}


/**
 * Create a map of elements to attributes e.g. {div: ['id', 'name']}
 */
function extractElements(attributes) {
    return Object.keys(attributes)
        .reduce((elementMap, attributeName) => {
            const attribute = attributes[attributeName];
            const elements = attribute.elements;

            elements.forEach((element) => {
                elementMap[element] = elementMap[element] || [];
                elementMap[element].push(attributeName);
            });

            return elementMap;
        }, {});
}

// A local copy of the MDN attributes web page has been saved for reference:
// fs.readFile('./data/attributes.html', 'utf-8', (error, html) => {

const extractAllAttributes = async function() {

  try {
    const html = await fetchPage(svgURL)
    const html2 = html.split(/\n\r|\r\n|\r|\n/).map(l => l.trimRight()).join('\n');

    // write back to the saved copy of MDN attributes so we can see the diff

    fs.writeFileSync(htmlPath, html2);

    const $ = cheerio.load(html);
    const attributes = await extractAttributes($);

    const elements = extractElements(attributes);

    // Add SVG <desc> and <metadata> elements. These elements have no attributes and so will not have
    // been discovered by scraping the attributes on developer.mozilla.org

    elements.desc = []
    elements.metadata = []

    const out = {
      attributes,
      elements
    };

    // Print out JSON with 4-space indentation formatting.
    // http://stackoverflow.com/a/11276104

    const tabWidth = 4;
    fs.writeFileSync(dataPath, JSON.stringify(out, null, tabWidth));
    console.log('Done')
  } catch (e) {
    console.log(e)
  }

}

extractAllAttributes()
