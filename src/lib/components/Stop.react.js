
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Stop is a wrapper for the <stop> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop
 */
const Stop = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <stop
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </stop>
    );
};

Stop.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Stop.propTypes = {
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
     *  The stop-color attribute indicates what color to use at a gradient
     *  stop.Note: With respect to gradients, SVG treats the transparent
     *  keyword differently than CSS. SVG does not calculate gradients
     *  in pre-multiplied space, so transparent really means transparent
     *  black. So, specifying a stop-color with the value transparent
     *  is equivalent to specifying a stop-color with the value
     *  black and a stop-opacity with the value 0.Note: As a presentation
     *  attribute, stop-color can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:This
     *  keyword denotes the current fill color and can be specified
     *  in the same manner as within a <paint> specification for
     *  the fill and stroke attributes.This value indicates a
     *  color value.This value refers to an ICC color profile.BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    stopColor: PropTypes.string,

    /**
     *  The stop-opacity attribute defines the opacity of a given color
     *  gradient stop.The opacity value used for the gradient
     *  calculation is the product of the value of stop-opacity
     *  and the opacity of the value of the stop-color attribute.
     *  For stop-color values that don't include explicit opacity
     *  information, the opacity is treated as 1.Note: As a presentation
     *  attribute, stop-opacity can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:This
     *  value is either a <number> between 0 and 1 or a <percentage>
     *  value specifying the opacity of the color gradient stop.BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    stopOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Often used with CSS to style elements with common properties.
     * 
     */
    className: PropTypes.string,


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

export default Stop;
