
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeFuncA is a wrapper for the <feFuncA> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA
 */
const FeFuncA = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feFuncA
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feFuncA>
    );
};

FeFuncA.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeFuncA.propTypes = {
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
     *  The amplitude attribute controls the amplitude of the gamma function
     *  of a component transfer element when its type attribute
     *  is gamma.You can use this attribute with the following
     *  SVG elements:Last modified: May 13, 2022, by MDN contributors
     * 
     */
    amplitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The exponent attribute defines the exponent of the gamma function.You
     *  can use this attribute with the following SVG elements:If
     *  the type attribute of the component element is set to
     *  gamma, this value specifies the exponent of the gamma
     *  functionLast modified: May 13, 2022, by MDN contributors
     * 
     */
    exponent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The intercept attribute defines the intercept of the linear function
     *  of color component transfers when the type attribute is
     *  set to linear.You can use this attribute with the following
     *  SVG elements:Last modified: May 13, 2022, by MDN contributors
     * 
     */
    intercept: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The tableValues attribute defines a list of numbers defining
     *  a lookup table of values for a color component transfer
     *  function.You can use this attribute with the following
     *  SVG elements:This value holds a comma- and/or space-separated
     *  list of <number>s, which define a lookup table for the
     *  color component transfer function. Each number can be
     *  between 0 and 1.An empty list results in an identity transfer
     *  function.Last modified: Jul 1, 2022, by MDN contributors
     * 
     */
    tableValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
    style: PropTypes.oneOf([React.CSSProperties]),

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

export default FeFuncA;
