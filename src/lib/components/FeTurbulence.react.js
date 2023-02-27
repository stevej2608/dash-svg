
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeTurbulence is a wrapper for the <feTurbulence> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence
 */
const FeTurbulence = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feTurbulence
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feTurbulence>
    );
};

FeTurbulence.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeTurbulence.propTypes = {
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
     *  The baseFrequency attribute represents the base frequency parameter
     *  for the noise function of the <feTurbulence> filter primitive.You
     *  can use this attribute with the following SVG elements:If
     *  two numbers are provided, the first one represents the
     *  base frequency in the horizontal direction and the second
     *  one the base frequency in the vertical direction. If one
     *  number is provided, then that value is used for both x
     *  and y.Negative values are forbidden.BCD tables only load
     *  in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    baseFrequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The color-interpolation-filters attribute specifies the color
     *  space for imaging operations performed via filter effects.Note:
     *  This property just has an affect on filter operations.
     *  Therefore, it has no effect on filter primitives like
     *  <feOffset>, <feImage>, <feTile> or <feFlood>.color-interpolation-filters
     *  has a different initial value than color-interpolation.
     *  color-interpolation-filters has an initial value of linearRGB,
     *  whereas color-interpolation has an initial value of sRGB.
     *  Thus, in the default case, filter effects operations occur
     *  in the linearRGB color space, whereas all other color
     *  interpolations occur by default in the sRGB color space.It
     *  has no affect on filter functions, which operate in the
     *  sRGB color space.Note: As a presentation attribute, color-interpolation-filters
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:Indicates that the user
     *  agent can choose either the sRGB or linearRGB spaces for
     *  color interpolation. This option indicates that the author
     *  doesn't require that color interpolation occur in a particular
     *  color space.Indicates that color interpolation should
     *  occur in the sRGB color space.Indicates that color interpolation
     *  should occur in the linearized RGB color space as described
     *  in the sRGB specification.BCD tables only load in the
     *  browser with JavaScript enabled. Enable JavaScript to
     *  view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    colorInterpolationFilters: PropTypes.oneOf(["auto", "inherit", "linearRGB", "sRGB"]),

    /**
     *  width
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The numOctaves attribute defines the number of octaves for the
     *  noise function of the <feTurbulence> primitive.
  An octave
     *  is a noise function defined by its frequency and amplitude.
     *  A turbulence is built by accumulating several octaves
     *  with increasing frequencies and decreasing amplitudes.

     *   The higher the number of octaves, the more natural the
     *  noise looks. Though more octaves also require more calculations,
     *  resulting in a negative impact on performance.
You can
     *  use this attribute with the following SVG elements:Defines
     *  the number of octaves. Negative values are forbidden.BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    numOctaves: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The result attribute defines the assigned name for this filter
     *  primitive. If supplied, then graphics that result from
     *  processing this filter primitive can be referenced by
     *  an in attribute on a subsequent filter primitive within
     *  the same <filter> element. If no value is provided, the
     *  output will only be available for re-use as the implicit
     *  input into the next filter primitive if that filter primitive
     *  provides no value for its in attribute.You can use this
     *  attribute with the following SVG elements:This value is
     *  a <custom-ident> and defines the name for the filter primitive.
     *  It is only meaningful within a given <filter> element
     *  and thus has only local scope. It is legal for the same
     *  <filter-primitive-reference> to appear multiple times
     *  within the same <filter> element. When referenced, this
     *  value will use the closest preceding filter primitive
     *  with the given result.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    result: PropTypes.string,

    /**
     *  The seed attribute represents the starting number for the pseudo
     *  random number generator of the <feTurbulence> filter primitive.You
     *  can use this attribute with the following SVG elements:BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    seed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stitchTiles attribute defines how the Perlin Noise tiles
     *  behave at the border.You can use this attribute with the
     *  following SVG elements:This value indicates that no attempt
     *  is made to achieve smooth transitions at the border of
     *  tiles which contain a turbulence function. Sometimes the
     *  result will show clear discontinuities at the tile borders.This
     *  value indicates that the user agent will automatically
     *  adjust the x and y values of the base frequency such that
     *  the <feTurbulence> node's width and height (i.e., the
     *  width and height of the current subregion) contain an
     *  integral number of the tile width and height for the first
     *  octave.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    stitchTiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  width
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  x position
     */
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  y position
     */
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
    style: PropTypes.PropTypes.objectOf(PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ])),

    /**
     *  x position
     */
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  y position
     */
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  fill color
     */
    fill: PropTypes.string,


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

export default FeTurbulence;
