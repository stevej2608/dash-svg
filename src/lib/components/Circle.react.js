
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Circle is a wrapper for the <circle> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
 */
const Circle = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <circle
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </circle>
    );
};

Circle.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Circle.propTypes = {
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
      *  The cx attribute define the x-axis coordinate of a center point
      * 
      */
      cx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The cy attribute define the y-axis coordinate of a center point
      * 
      */
      cy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The fill attribute has two different meanings
      */
      fill: PropTypes.string,

     /**
      *  The fill-opacity attribute is a presentation attribute defining
      *  the opacity of the paint server (color, gradient, pattern,
      *  etc) applied to a shape
      */
      fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The marker-end attribute defines the arrowhead or polymarker
      *  that will be drawn at the final vertex of the given shape
      * 
      */
      markerEnd: PropTypes.string,

     /**
      *  The marker-mid attribute defines the arrowhead or polymarker
      *  that will be drawn at all interior vertices of the given
      *  shape
      */
      markerMid: PropTypes.string,

     /**
      *  The marker-start attribute defines the arrowhead or polymarker
      *  that will be drawn at the first vertex of the given shape
      * 
      */
      markerStart: PropTypes.string,

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
      *  The paint-order attribute specifies the order that the fill,
      *  stroke, and markers of a given shape or text element
      *  are painted
      */
      paintOrder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The pathLength attribute lets authors specify a total length
      *  for the path, in user units
      */
      pathLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The pointer-events attribute is a presentation attribute that
      *  allows defining whether or when an element may be the
      *  target of a mouse event
      */
      pointerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The r attribute defines the radius of a circle
      */
      r: PropTypes.string,

     /**
      *  Deprecated: This feature is no longer recommended
      */
      requiredFeatures: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The shape-rendering attribute provides hints to the renderer
      *  about what tradeoffs to make when rendering shapes like
      *  paths, circles, or rectangles
      */
      shapeRendering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The stroke attribute is a presentation attribute defining the
      *  color (or any SVG paint servers like gradients or patterns)
      *  used to paint the outline of the shape;Note: As a presentation
      *  attribute stroke can be used as a CSS property
      */
      stroke: PropTypes.string,

     /**
      *  The stroke-dasharray attribute is a presentation attribute defining
      *  the pattern of dashes and gaps used to paint the outline
      *  of the shape;Note: As a presentation attribute, stroke-dasharray
      *  can be used as a CSS property
      */
      strokeDasharray: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The stroke-dashoffset attribute is a presentation attribute defining
      *  an offset on the rendering of the associated dash array
      * 
      */
      strokeDashoffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The stroke-opacity attribute is a presentation attribute defining
      *  the opacity of the paint server (color, gradient, pattern,
      *  etc) applied to the stroke of a shape
      */
      strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The stroke-width attribute is a presentation attribute defining
      *  the width of the stroke to be applied to the shape
      */
      strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The systemLanguage attribute represents a list of supported language
      *  tags
      */
      systemLanguage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The vector-effect property specifies the vector effect to use
      *  when drawing an object
      */
      vectorEffect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

     /**
      *  The visibility attribute lets you control the visibility of graphical
      *  elements
      */
      visibility: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),


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

export default Circle;
