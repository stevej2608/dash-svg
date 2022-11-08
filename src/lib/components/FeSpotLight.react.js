
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeSpotLight is a wrapper for the <feSpotLight> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight
 */
const FeSpotLight = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feSpotLight
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feSpotLight>
    );
};

FeSpotLight.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeSpotLight.propTypes = {
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
    colorInterpolationFilters: PropTypes.oneOfType([
        PropTypes.oneOf(['"auto"|"inherit"|"linearRGB"|"sRGB"']),
        PropTypes.bool
     ]),

    /**
     *  The limitingConeAngle attribute represents the angle in degrees
     *  between the spot light axis (i.e. the axis between the
     *  light source and the point to which it is pointing at)
     *  and the spot light cone. So it defines a limiting cone
     *  which restricts the region where the light is projected.
     *  No light is projected outside the cone.You can use this
     *  attribute with the following SVG elements:BCD tables only
     *  load in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    limitingConeAngle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pointsAtX attribute represents the x location in the coordinate
     *  system established by attribute primitiveUnits on the
     *  <filter> element of the point at which the light source
     *  is pointing.You can use this attribute with the following
     *  SVG elements:BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    pointsAtX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pointsAtY attribute represents the y location in the coordinate
     *  system established by attribute primitiveUnits on the
     *  <filter> element of the point at which the light source
     *  is pointing.You can use this attribute with the following
     *  SVG elements:BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    pointsAtY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pointsAtZ attribute represents the y location in the coordinate
     *  system established by attribute primitiveUnits on the
     *  <filter> element of the point at which the light source
     *  is pointing, assuming that, in the initial local coordinate
     *  system, the positive z-axis comes out towards the person
     *  viewing the content and assuming that one unit along the
     *  z-axis equals one unit in x and y.You can use this attribute
     *  with the following SVG elements:BCD tables only load in
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    pointsAtZ: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The specularExponent attribute controls the focus for the light
     *  source. The bigger the value the brighter the light.You
     *  can use this attribute with the following SVG elements:For
     *  <feSpecularLighting>, specularExponent defines the exponent
     *  value for the specular term.For <feSpotLight>, specularExponent
     *  defines the exponent value controlling the focus for the
     *  light source.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    specularExponent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  x position
     */
    x: PropTypes.string,

    /**
     *  y position
     */
    y: PropTypes.string,

    /**
     *  The z attribute defines the location along the z-axis for a light
     *  source in the coordinate system established by the primitiveUnits
     *  attribute on the <filter> element, assuming that, in the
     *  initial coordinate system, the positive z-axis comes out
     *  towards the person viewing the content and assuming that
     *  one unit along the z-axis equals one unit in x and y.You
     *  can use this attribute with the following SVG elements:For
     *  <fePointLight>, z defines the location along the z-axis
     *  for the light source in the coordinate system established
     *  by the primitiveUnits attribute on the <filter> element.For
     *  <feSpotLight>, z defines the location along the z-axis
     *  for the light source in the coordinate system established
     *  by the primitiveUnits attribute on the <filter> element.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    z: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default FeSpotLight;
