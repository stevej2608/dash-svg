'use strict';

/**
 * Generates React components from a newline-separated list of HTML elements.
 */

const fs = require('fs');
const path = require('path');

const srcPath = '../src/components';
const attributesPath = './data/attributes.json';


const PROP_TYPES = {
  _default: 'string',
  style: 'object',
};
function bail(message) {
  console.error('Error: ' + message);
  process.exit(1);
}

function upperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function nameComponent(elementName) {
  const reservedWords = {
    'object': 'ObjectEl',
    'map': 'MapEl'
  };

  return reservedWords[elementName] || upperCase(elementName);
}

/**
 * Make the React propTypes for the given element
 *
 * @param {*} attributes the attributes to be processed
 * @param {*} attributeDatabase descriptions and types for all SVG elements
 * @returns
 */

 function makePropTypes(attributes, attributeDatabase) {
   const attr  = {}
   for (const attribute of attributes) {
     const {description, type } = attributeDatabase[attribute]
     console.log(`type "${type}"`)

     const protoType = `XXXX ${type}`


     attr[attribute] = {description, protoType }

   }

   return attr
 }


/**
 * Generate the prototypes for the SVG element
 *
 * @param {*} element the element name
 * @param {*} attributes attributes, descriptions and types for all SVG elements
 * @returns
 */

function generatePropTypes(element, attributes) {
  const elements = attributes.elements;


  const PROP_TYPES = makePropTypes(elements[element], attributes.attributes)


  // Always add the list of global attributes.
  const supportedAttributes = elements[element] ?
    elements[element].concat(elements.Globalattribute) :
    elements.Globalattribute;

  return `
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,` +

    supportedAttributes.reduce((propTypes, attributeName) => {
      const attribute = attributes.attributes[attributeName];
      const propType = PROP_TYPES[attributeName] || PROP_TYPES._default;
      if (attributeName === 'id') {
        return propTypes;
      }
      return propTypes + `

    /**
     *${attribute.description ? ' ' + attribute.description : ''}
     */
    '${attributeName}': PropTypes.${propType},`;
    }, '') + `

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    'loading_state': PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Dash-assigned callback that gets fired when the element is clicked.
     */
    'setProps': PropTypes.func`
}

const obsoleteDoc = element => `
 * OBSOLETE: <${element}> is included for completeness, but should be avoided
 * as it is not supported by any modern browsers.`;

const customDocs = {
  basefont: `
 * OBSOLETE: <basefont> is included for completeness, but should be avoided
 * as it is only supported by Internet Explorer.`,
  blink: obsoleteDoc('blink'),
  command: obsoleteDoc('command'),
  element: obsoleteDoc('element'),
  isindex: obsoleteDoc('isindex'),
  keygen: `
 * DEPRECATED: <keygen> is included for completeness, but should be avoided
 * as it is not supported by all browsers and may be removed at any time from
 * those that do support it.`,
  listing: obsoleteDoc('listing') + ' Use <pre> or <code> instead.',
  marquee: `
 * DEPRECATED: <marquee> is included for completeness, but should be avoided
 * as browsers may remove it at any time.`,
  meta: `
 * CAUTION: <meta> is included for completeness, but generally will not behave
 * as expected since <meta> tags should be static HTML content in the <head> of
 * the document. Dash components are dynamic <body> content.`,
  multicol: obsoleteDoc('multicol'),
  nextid: obsoleteDoc('nextid'),
  output: `
 * CAUTION: <output> is included for completeness, but its typical usage
 * requires the oninput attribute of the enclosing <form> element, which
 * is not accessible to Dash.`,
  script: `
 * CAUTION: <script> is included for completeness, but you cannot execute
 * JavaScript code by providing it to a <script> element. Use a clientside
 * callback for this purpose instead.`,
  plaintext: `
 * OBSOLETE: <plaintext> is included for completeness, but should be avoided
 * as browsers may remove it at any time, and its behavior when added
 * dynamically by Dash is not what it would be statically on page load.
 * Use <pre> or <code> instead.`,
  shadow: `
 * DEPRECATED: <shadow> is included for completeness, but should be avoided
 * as it is not supported by all browsers and may be removed at any time from
 * those that do support it.`,
  spacer: obsoleteDoc('spacer'),
  title: `
 * CAUTION: <title> is included for completeness, but is not expected to
 * do anything outside of <head>. Dash components are always created in the
 * <body>.`
};

/**
 * Generate fully formed React component source code that wraps the given SVG element
 *
 * @param {*} Component the component name, upper case
 * @param {*} element the element name
 * @param {*} attributes attributes, descriptions and types for all SVG elements
 * @returns
 */

function generateComponent(Component, element, attributes) {
  const propTypes = generatePropTypes(element, attributes);

  const customDoc = customDocs[element] ? ('\n *' + customDocs[element] + '\n *') : '';

  return `
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * ${Component} is a wrapper for the <${element}> HTML5 element.${customDoc}
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
 */
const ${Component} = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <${element}
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </${element}>
    );
};

${Component}.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

${Component}.propTypes = {${propTypes}
};

export default ${Component};
`;
}

/**
 * Generate an object with Component names as keys, component definitions as
 * values
 *
 * @param {*} componentList Names on components to be generated
 * @param {*} attributes attributes, descriptions, types of all components
 * @returns
 */
function generateComponents(componentList, attributes) {
  return componentList.reduce((componentMap, element) => {
    const componentName = nameComponent(element);
    const Component = generateComponent(componentName, element, attributes);

    componentMap[componentName] = Component;

    return componentMap;
  }, {});
}

/**
 * Writes component definitions to disk.
 */

function writeComponents(components, destination) {
  console.log(`Writing ${Object.keys(components).length} component files to ${srcPath}.`);
  let componentPath;
  for (const Component in components) {
    componentPath = path.join(destination, `${Component}.react.js`);
    fs.mkdirSync(path.join(destination), { recursive: true });
    fs.writeFileSync(componentPath, components[Component]);
  }
}


// Get first command-line argument
const componentListPath = process.argv[2];

if (!componentListPath) {
  bail('Must specify an element list.');
}

// Read the list of elements (skip comments and blank lines)

const componentList = fs
  .readFileSync(componentListPath, 'utf8')
  .split('\n')
  .filter(item => !(item.startsWith('#') || item === ''));

// Get the mapping of attributes to elements

const attributes = JSON.parse(fs.readFileSync(attributesPath, 'utf-8'));

const components = generateComponents(componentList, attributes);

writeComponents(components, srcPath);

console.log('Done.');
