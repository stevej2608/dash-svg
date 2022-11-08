
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Filter is a wrapper for the <filter> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
 */
const Filter = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <filter
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </filter>
    );
};

Filter.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Filter.propTypes = {
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
    'aria-*': PropTypes.string,

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The filterRes attribute
     *  indicates the width and height of the intermediate images
     *  in pixels of a filter primitive.Take care when assigning
     *  a non-default value to this attribute. Too small of a
     *  value may result in unwanted pixelation in the result.
     *  Too large of a value may result in slow processing and
     *  large memory usage.Note that negative values or zero values
     *  disable the rendering of the element which referenced
     *  the filter.You can use this attribute with the following
     *  SVG elements:This value takes one or two values, the first
     *  one outlining the resolution in horizontal direction,
     *  the second one in vertical direction. If only one value
     *  is specified, it is used for both directions.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    filterRes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The filterUnits attribute defines the coordinate system for the
     *  attributes x, y, width and height.You can use this attribute
     *  with the following SVG elements:x, y, width and height
     *  represent values in the current coordinate system that
     *  results from taking the current user coordinate system
     *  in place at the time when the <filter> element is referenced
     *  (i.e., the user coordinate system for the element referencing
     *  the <filter> element via a filter attribute).In that case,
     *  x, y, width and height represent fractions or percentages
     *  of the bounding box on the referencing element.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    filterUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  width
     */
    height: PropTypes.string,

    /**
     *  The primitiveUnits attribute specifies the coordinate system
     *  for the various length values within the filter primitives
     *  and for the attributes that define the filter primitive
     *  subregion.You can use this attribute with the following
     *  SVG elements:This value indicates that any length values
     *  within the filter definitions represent values in the
     *  current user coordinate system in place at the time when
     *  the <filter> element is referenced (i.e., the user coordinate
     *  system for the element referencing the <filter> element
     *  via a filter attribute).This value indicates that any
     *  length values within the filter definitions represent
     *  fractions or percentages of the bounding box on the referencing
     *  element.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    primitiveUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  width
     */
    width: PropTypes.string,

    /**
     *  x position
     */
    x: PropTypes.string,

    /**
     *  y position
     */
    y: PropTypes.string,

    /**
     *  Often used with CSS to style elements with common properties.
     * 
     */
    className: PropTypes.string,

    /**
     *  Transformation to apply to the element 
     */
    transform: PropTypes.string,

    /**
     *  CSS style to apply to the element 
     */
    style: PropTypes.oneOfType([
        PropTypes.oneOf(['React.CSSProperties']),
        PropTypes.bool
     ]),

    /**
     *  x position
     */
    x: PropTypes.string,

    /**
     *  y position
     */
    y: PropTypes.string,


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
    'setProps': PropTypes.func
};

export default Filter;
