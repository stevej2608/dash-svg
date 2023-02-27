'use strict';

/**
 * Generates React components from a newline-separated list of HTML elements.
 */

const fs = require('fs');
const path = require('path');

const srcPath = '../src/lib/components';
const attributesPath = './data/attributes.json';

const GLOBAL_ATTRIBUTES = {
  	"className": {
        "description": "Often used with CSS to style elements with common properties.",
    	"isRequired": false,
    	"type": "string",
    },
	"transform": {
		"description": "Transformation to apply to the element ",
		"isRequired": false,
		"type": "string",
	},
	"style": {
		"description": "CSS style to apply to the element ",
		"isRequired": false,
		"type": "css",
	},
	"x": {
		"description": "x position",
		"isRequired": false,
		"type": "number|string",
	},
	"y": {
		"description": "y position",
		"isRequired": false,
		"type": "number|string",
	},
    "fill": {
        "description": "fill color",
        "isRequired": false,
        "type": "string",
    },
}
const RECT_ADDITIONAL_ATTRIBUTES = {
	"width": {
		"description": "width",
		"isRequired": false,
		"type": "number|string",
	},
	"height": {
		"description": "width",
		"isRequired": false,
		"type": "number|string",
	},
	"rx": {
		"description": "x border radius",
		"isRequired": false,
		"type": "number|string",
	},
	"ry": {
		"description": "y border radius",
		"isRequired": false,
		"type": "number|string",
	},
	"fill": {
		"description": "fill color",
		"isRequired": false,
		"type": "string",
	},
	"stroke": {
		"description": "stroke color",
		"isRequired": false,
		"type": "string",
	},
}

const SVG_ADDITIONAL_ATTRIBUTES = {
  "alt": {
    "description": "Alternative text in case an image can't be displayed.",
    "isRequired": false,
    "type": "string",
    },
  "xmlns": {
    "description": "SVG xml namespace.",
    "isRequired": false,
    "type": "string",
    },
  "width": {
    "description": "SVG width",
    "isRequired": false,
    "type": "number|string",
    },
  "height": {
    "description": "SVG height",
    "isRequired": false,
    "type": "number|string",
    },
}

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
 * Make the React propTypes for the given attributes
 *
 * @param {*} attributes the attributes to be processed
 * @param {*} attributeDatabase descriptions and types for all SVG elements
 * @returns
 */

 function makePropTypes(elementAttributes, attributeDatabase) {

  const foldDescription = (desc) => {
    const words = desc.replace(/\s/, ' ').split(' ')

    const lines = words.reduce((lines, word) => {
      const lineWidth = 60
      let line = lines.pop()
      line += ` ${word}`
      lines.push(line)
      if (line.length > lineWidth) {
        lines.push('     * ')
      }
      return lines
    }, ['']);

    return lines.join('\n')
  }

  const propTypes = []
  for (const attribute of elementAttributes) {
    const { description, type } = attributeDatabase[attribute]
    // console.log(`type "${type}"`)

    let PROP_TYPE = `

    /**
     *${description ? ' ' + foldDescription(description) : ''}
     */
    ${attribute}: PropTypes.`

    if (type === 'string') {
      PROP_TYPE += 'string';
    }
    else if (type === 'number|string') {
      PROP_TYPE += 'oneOfType([PropTypes.string, PropTypes.number])'
    }
    else if (type === 'css'){
      PROP_TYPE += `PropTypes.objectOf(PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]))`
    }
    else {
        const _type = type.replace(/Booleanish/, "'true', 'false'")
        PROP_TYPE += `oneOf([${_type.replace(/\|/g, ', ')}])`
    }


    if (attribute.isRequired) {
      PROP_TYPE += '.isRequired'
    }

    propTypes.push(PROP_TYPE)

   }

   return `${propTypes.join(',')},\n`
 }


/**
 * Generate the prototypes for the given SVG element
 *
 * @param {*} element the element name
 * @param {*} attributes attributes, descriptions and types for all SVG elements
 * @returns
 */

function generatePropTypes(element, attributes) {

  element = element.trim()

  const allAttributes = {...attributes.attributes, ...GLOBAL_ATTRIBUTES, ...SVG_ADDITIONAL_ATTRIBUTES, ...RECT_ADDITIONAL_ATTRIBUTES}

  // Create a list of attributes for this element. It's the
  // aggregate of the attributes scraped from developer.mozilla.org
  // and hand picked GLOBAL_ATTRIBUTES

  const elements = attributes.elements[element];
  const elementAttributes = [...(elements ?? []), ...Object.keys(GLOBAL_ATTRIBUTES)];

  // Add a few more hand picked attributes for the <svg/> element

  if (element === 'svg') {
    elementAttributes.push(...Object.keys(SVG_ADDITIONAL_ATTRIBUTES))
  }
  if (element === 'rect') {
    elementAttributes.push(...Object.keys(RECT_ADDITIONAL_ATTRIBUTES))
	  console.log(elementAttributes)
  }

  const PROP_TYPES = makePropTypes(elementAttributes, allAttributes)

  console.log('TODO: Always add the list of global attributes')

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

    PROP_TYPES

    + `

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
  Component = Component.trim()

  return `
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * ${Component} is a wrapper for the <${element}> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/${element}
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
    const componentName = nameComponent(element).trim();
    const Component = generateComponent(componentName, element.trim(), attributes);

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
    componentPath = path.join(destination, `${Component.trim()}.react.js`);
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

// The attribute/element pages on developer.mozilla.org are
// incomplete. Add a few omissions

attributes.elements.svg.push('stroke')
attributes.elements.svg.push('viewBox')

attributes.elements.path.push('clipRule')

const components = generateComponents(componentList, attributes);

writeComponents(components, srcPath);

console.log('Done.');
