
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Svg is a wrapper for the <svg> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
 */
const Svg = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <svg
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </svg>
    );
};

Svg.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Svg.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Alternative text in case an image can't be displayed.
     */
    'alt': PropTypes.string,

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
      *  Deprecated: This feature is no longer recommended
      */
      baseProfile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  Deprecated: This feature is no longer recommended
      */
      clip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The clip-path presentation attribute defines or associates a
      *  clipping path with the element it is related to
      */
      clipPath: PropTypes.string,

     /**
      *  The color-interpolation attribute specifies the color space for
      *  gradient interpolations, color animations, and alpha
      *  compositing
      */
      colorInterpolation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  Deprecated: This feature is no longer recommended
      */
      colorRendering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  Deprecated: This feature is no longer recommended
      */
      enableBackground: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The mask attribute is a presentation attribute mainly used to
      *  bind a given <mask> element with the element the attribute
      *  belongs to
      */
      mask: PropTypes.string,

     /**
      *  The opacity attribute specifies the transparency of an object
      *  or of a group of objects, that is, the degree to which
      *  the background behind the element is overlaid
      */
      opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The overflow attribute sets what to do when an element's content
      *  is too big to fit in its block formatting context
      */
      overflow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The pointer-events attribute is a presentation attribute that
      *  allows defining whether or when an element may be the
      *  target of a mouse event
      */
      pointerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The preserveAspectRatio attribute indicates how an element with
      *  a viewBox providing a given aspect ratio must fit into
      *  a viewport with a different aspect ratio
      */
      preserveAspectRatio: PropTypes.string,

     /**
      *  Deprecated: This feature is no longer recommended
      */
      requiredFeatures: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The systemLanguage attribute represents a list of supported language
      *  tags
      */
      systemLanguage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  Deprecated: This feature is no longer recommended
      */
      version: PropTypes.string,

     /**
      *  The viewBox attribute defines the position and dimension, in
      *  user space, of an SVG viewport
      */
      viewBox: PropTypes.string,

     /**
      *  The x attribute defines a x-axis coordinate in the user coordinate
      *  system
      */
      x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The y attribute defines a y-axis coordinate in the user coordinate
      *  system
      */
      y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  Deprecated: This feature is no longer recommended
      */
      zoomAndPan: PropTypes.string,


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

export default Svg;