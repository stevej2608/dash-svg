
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * RadialGradient is a wrapper for the <radialGradient> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient
 */
const RadialGradient = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <radialGradient
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </radialGradient>
    );
};

RadialGradient.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

RadialGradient.propTypes = {
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
     *  The color-interpolation attribute specifies the color space for
     *  gradient interpolations, color animations, and alpha compositing.Note:
     *  For filter effects, the color-interpolation-filters property
     *  controls which color space is used.The color-interpolation
     *  property chooses between color operations occurring in
     *  the sRGB color space or in a (light energy linear) linearized
     *  RGB color space. Having chosen the appropriate color space,
     *  component-wise linear interpolation is used.When a child
     *  element is blended into a background, the value of the
     *  color-interpolation property on the child determines the
     *  type of blending, not the value of the color-interpolation
     *  on the parent. For gradients which make use of the href
     *  or the deprecated xlink:href attribute to reference another
     *  gradient, the gradient uses the property's value from
     *  the gradient element which is directly referenced by the
     *  fill or stroke property. When animating colors, color
     *  interpolation is performed according to the value of the
     *  color-interpolation property on the element being animated.Note:
     *  As a presentation attribute, color-interpolation can be
     *  used as a CSS property.You can use this attribute with
     *  the following SVG elements:Indicates that the user agent
     *  can choose either the sRGB or linearRGB spaces for color
     *  interpolation. This option indicates that the author doesn't
     *  require that color interpolation occur in a particular
     *  color space.Indicates that color interpolation should
     *  occur in the sRGB color space.Indicates that color interpolation
     *  should occur in the linearized RGB color space as described
     *  in the sRGB specification.BCD tables only load in the
     *  browser
     */
    colorInterpolation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The color-rendering attribute
     *  provides a hint to the SVG user agent about how to optimize
     *  its color interpolation and compositing operations.color-rendering
     *  takes precedence over color-interpolation-filters. For
     *  example, assume color-rendering: optimizeSpeed and color-interpolation-filters:
     *  linearRGB. In this case, the SVG user agent should perform
     *  color operations in a way that optimizes performance,
     *  which might mean sacrificing the color interpolation precision
     *  as specified by through the linearRGB value for color-interpolation-filters.Note:
     *  As a presentation attribute, color-rendering can be used
     *  as a CSS property.You can use this attribute with the
     *  following SVG elements:Indicates that the user agent shall
     *  make appropriate tradeoffs to balance speed and quality,
     *  but quality shall be given more importance than speed.Indicates
     *  that the user agent shall emphasize rendering speed over
     *  quality. For RGB display devices, this option will sometimes
     *  cause the user agent to perform color interpolation and
     *  compositing in the device RGB color space.Indicates that
     *  the user agent shall emphasize quality over rendering
     *  speed.BCD tables only load in the browser
     */
    colorRendering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The cx attribute define the x-axis coordinate of a center point.You
     *  can use this attribute with the following SVG elements:For
     *  <circle>, cx defines the x-axis coordinate of the center
     *  of the shape.Note: Starting with SVG2 cx, is a Geometry
     *  Property, meaning this attribute can also be used as CSS
     *  property for circles.For <ellipse>, cx defines the x-axis
     *  coordinate of the center of the shape.Note: Starting with
     *  SVG2 cx, is a Geometry Property, meaning this attribute
     *  can also be used as CSS property for ellipses.For <radialGradient>,
     *  cx defines the x-axis coordinate of the end circle for
     *  the radial gradient.
     */
    cx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The cy attribute define the y-axis coordinate of a center point.You
     *  can use this attribute with the following SVG elements:For
     *  <circle>, cy defines the y-axis coordinate of the center
     *  of the shape.Note: Starting with SVG2, cy is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for circles.For <ellipse>, cy defines the
     *  y-axis coordinate of the center of the shape.Note: Starting
     *  with SVG2, cy is a Geometry Property meaning this attribute
     *  can also be used as a CSS property for ellipses.For <radialGradient>,
     *  cy defines the y-axis coordinate of the end circle for
     *  the radial gradient.
     */
    cy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The fx attribute defines the x-axis coordinate of the focal point
     *  for a radial gradient.You can use this attribute with
     *  the following SVG elements:BCD tables only load in the
     *  browser
     */
    fx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The fy attribute defines the y-axis coordinate of the focal point
     *  for a radial gradient.You can use this attribute with
     *  the following SVG elements:BCD tables only load in the
     *  browser
     */
    fy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The gradientTransform attribute contains the definition of an
     *  optional additional transformation from the gradient coordinate
     *  system onto the target coordinate system (i.e., userSpaceOnUse
     *  or objectBoundingBox). This allows for things such as
     *  skewing the gradient. This additional transformation matrix
     *  is post-multiplied to (i.e., inserted to the right of)
     *  any previously defined transformations, including the
     *  implicit transformation necessary to convert from object
     *  bounding box units to user space.You can use this attribute
     *  with the following SVG elements:A list of transformation
     *  functions specifying some additional transformation from
     *  the gradient coordinate system onto the target coordinate
     *  system.BCD tables only load in the browser
     */
    gradientTransform: PropTypes.string,

    /**
     *  The gradientUnits attribute defines the coordinate system used
     *  for attributes specified on the gradient elements.You
     *  can use this attribute with the following SVG elements:For
     *  <linearGradient>, gradientUnits defines the coordinate
     *  system used for the attributes x1, y1, x2, and y2.
  
     *     This value indicates that the attributes represent
     *  values in the coordinate system that results from taking
     *  the current user coordinate system in place at the time
     *  when the gradient element is referenced (i.e., the user
     *  coordinate system for the element referencing the gradient
     *  element via a fill or stroke property) and then applying
     *  the transform specified by attribute gradientTransform.

     *       Percentages represent values relative to the current
     *  SVG viewport.
    This value indicates that the user coordinate
     *  system for the attributes is established using the bounding
     *  box of the element to which the gradient is applied and
     *  then applying the transform specified by attribute gradientTransform.Percentages
     *  represent values relative to the bounding box for the
     *  object.With this value and gradientTransform being the
     *  identity matrix, the normal of the linear gradient is
     *  perpendicular to the gradient vector in object bounding
     *  box space (i.e., the abstract coordinate system where
     *  (0,0) is at the top/left of the object bounding box and
     *  (1,1) is at the bottom/right of the object bounding box).
     *  When the object's bounding box is not square, the gradient
     *  normal which is initially perpendicular to the gradient
     *  vector within object bounding box space may render non-perpendicular
     *  relative to the gradient vector in user space. If the
     *  gradient vector is parallel to one of the axes of the
     *  bounding box, the gradient normal will remain perpendicular.
     *  This transformation is due to application of the non-uniform
     *  scaling transformation from bounding box space to user
     *  space.For <radialGradient>, gradientUnits defines the
     *  coordinate system used for the attributes cx, cy, r, fx,
     *  fy, and fr.cx, cy, r, fx, fy, and fr represent values
     *  in the coordinate system that results from taking the
     *  current user coordinate system in place at the time when
     *  the gradient element is referenced (i.e., the user coordinate
     *  system for the element referencing the gradient element
     *  via a fill or stroke property) and then applying the transform
     *  specified by attribute gradientTransform.
      for <radialGradient>:
     *  the user coordinate system for attributes cx, cy, r, fx,
     *  fy, and fr is established using the bounding box of the
     *  element to which the gradient is applied (see Object bounding
     *  box units) and then applying the transform specified by
     *  attribute gradientTransform.
      With this value and
     *  gradientTransform being the identity matrix, the rings
     *  of the radial gradient are circular with respect to the
     *  object bounding box space (i.e., the abstract coordinate
     *  system where (0,0) is at the top/left of the object bounding
     *  box and (1,1) is at the bottom/right of the object bounding
     *  box). When the object's bounding box is not square, the
     *  rings that are conceptually circular within object bounding
     *  box space will render as elliptical due to application
     *  of the non-uniform scaling transformation from bounding
     *  box space to user space.
    
     */
    gradientUnits: PropTypes.string,

    /**
     *  The r attribute defines the radius of a circle.You can use this
     *  attribute with the following SVG elements:For <circle>,
     *  r defines the radius of the circle and therefor its size.
     *  With a value lower or equal to zero the circle won't be
     *  drawn at all.Note: Starting with SVG2, r is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for circles.For <radialGradient>, r defines
     *  the radius of the end circle for the radial gradient.The
     *  gradient will be drawn such that the 100% gradient stop
     *  is mapped to the perimeter of this end circle. A value
     *  of lower or equal to zero will cause the area to be painted
     *  as a single color using the color and opacity of the last
     *  gradient <stop>.
     */
    r: PropTypes.string,

    /**
     *  The spreadMethod attribute determines how a shape is filled beyond
     *  the defined edges of a gradient.You can use this attribute
     *  with the following SVG elements:This value indicates that
     *  the final color of the gradient fills the shape beyond
     *  the gradient's edges.This value indicates that the gradient
     *  repeats in reverse beyond its edges.This value specifies
     *  that the gradient repeats in the original order beyond
     *  its edges.By default, a gradient reaches to the edges
     *  of the shape being filled. To see the effects of this
     *  attribute, you will need to set the size of the gradient
     *  smaller than the shape.In the case of a linear gradient,
     *  the edges may be defined as a rectangle by the x1, x2,
     *  y1 and y2 attributes. In the case of a radial gradient,
     *  the edges may be defined as outer and inner circles by
     *  the cx, cy and r (outer) and fx, fy and fr (inner) attributes.Notice
     *  that the middle third of each gradient is the same. The
     *  outer thirds show the difference between the three spread
     *  methods.No compatibility data found for svg.attributes.presentation.spreadMethod.Check
     *  for problems with this page or contribute missing data
     *  to mdn/browser-compat-data.
     */
    spreadMethod: PropTypes.string,

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

export default RadialGradient;
