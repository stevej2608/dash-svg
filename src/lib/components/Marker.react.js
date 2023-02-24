
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Marker is a wrapper for the <marker> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
 */
const Marker = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <marker
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </marker>
    );
};

Marker.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Marker.propTypes = {
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
     *  may cease to work at any time.The clip attribute is a
     *  presentation attribute defining the visible region of
     *  an element.This attribute has the same parameter values
     *  as defined for the css clip property. Unitless values,
     *  which indicate current user coordinates, are permitted
     *  on the coordinate values on the rect(). The value of auto
     *  defines a clipping path along the bounds of the viewport
     *  created by the given element.You can use this attribute
     *  with the following SVG elements:Warning: This property
     *  is deprecated. Use clip-path instead.The value auto defines
     *  a clipping path along the bounds of the viewport created
     *  by the given element. The value rect() defines a clipping
     *  rectangle following the following syntax: rect(<top>,
     *  <right>, <bottom>, <left>). The <top> and <bottom> values
     *  specify offsets from the top border edge of the element
     *  viewport, while <right> and <left> specify offsets from
     *  the left border edge of the element viewport.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: Jun 28, 2022, by
     *  MDN contributors
     */
    clip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The clip-path presentation attribute defines or associates a
     *  clipping path with the element it is related to.Note:
     *  As a presentation attribute clip-path can be used as a
     *  CSS property.You can use this attribute with the following
     *  SVG elements:An extra information to tell how a <basic-shape>
     *  is applied to an element: fill-box indicates to use the
     *  object bounding box; stroke-box indicates to use the object
     *  bounding box extended with the stroke; view-box indicates
     *  to use the nearest SVG viewport as the reference box.Note:
     *  For more details on the clip-path syntax, see the CSS
     *  property clip-path reference page.BCD tables only load
     *  in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    clipPath: PropTypes.string,

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
     *  color space.Indicates that color interpolation should
     *  occur in the sRGB color space.Indicates that color interpolation
     *  should occur in the linearized RGB color space as described
     *  in the sRGB specification.BCD tables only load in the
     *  browser with JavaScript enabled. Enable JavaScript to
     *  view data.Last modified: May 13, 2022, by MDN contributors
     * 
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
     *  may cease to work at any time.The enable-background attribute
     *  specifies how the accumulation of the background image
     *  is managed.Note: As a presentation attribute, enable-background
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:If an ancestor container
     *  element has a property value of enable-background: new,
     *  then all graphics elements within the current container
     *  element are rendered both onto the parent container element's
     *  background image canvas and onto the target device.Otherwise,
     *  there is no current background image canvas, so graphics
     *  elements are only rendered onto the target device.This
     *  value enables the ability of children of the current container
     *  element to access the background image.It also indicates
     *  that a new (i.e., initially transparent black) background
     *  image canvas is established and that in effect all children
     *  of the current container element shall be rendered into
     *  the new background image canvas in addition to being rendered
     *  onto the target device.
      The optional <x>, <y>, <width>,
     *  and <height> parameters are <number> values that indicate
     *  the subregion of the container element's user space where
     *  access to the background image is allowed to happen. Those
     *  values act as a clipping rectangle on the background image
     *  canvas.
      Negative values for <width> or <height>
     *  are forbidden. If one, two, or three values are specified
     *  or if neither <width> nor <height> are specified, the
     *  BackgroundImage and BackgroundAlpha of a filter primitive
     *  are processed as if background image processing were not
     *  enabled.
    BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 17, 2022, by MDN contributors
     */
    enableBackground: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The markerHeight attribute represents the height of the viewport
     *  into which the <marker> is to be fitted when it is rendered
     *  according to the viewBox and preserveAspectRatio attributes.You
     *  can use this attribute with the following SVG elements:

     *       This value defines either an absolute or a relative
     *  height of the marker.
      Relative values refer to the
     *  height specified via the viewBox and preserveAspectRatio
     *  attributes.
    This value defines the height of the marker
     *  in the units defined by the markerUnits attribute.A value
     *  of zero disables rendering of the element and negative
     *  values are an error.BCD tables only load in the browser
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    markerHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The markerUnits attribute defines the coordinate system for the
     *  markerWidth and markerHeight attributes and the contents
     *  of the <marker>.You can use this attribute with the following
     *  SVG elements:This value specifies that the markerWidth
     *  and markerHeight attributes and the contents of the <marker>
     *  element represent values in the current user coordinate
     *  system in place for the graphic object referencing the
     *  marker (i.e., the user coordinate system for the element
     *  referencing the <marker> element via a marker, marker-start,
     *  marker-mid, or marker-end property).This value specifies
     *  that the markerWidth and markerHeight attributes and the
     *  contents of the <marker> element represent values in a
     *  coordinate system which has a single unit equal the size
     *  in user units of the current stroke width (see the stroke-width
     *  attribute) in place for the graphic object referencing
     *  the marker.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    markerUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The markerWidth attribute represents the width of the viewport
     *  into which the <marker> is to be fitted when it is rendered
     *  according to the viewBox and preserveAspectRatio attributes.You
     *  can use this attribute with the following SVG elements:

     *       This value defines either an absolute or a relative
     *  width of the marker.
      Relative values refer to the
     *  width specified via the viewBox and preserveAspectRatio
     *  attributes.
    This value defines the width of the marker
     *  in the units defined by the markerUnits attribute.A value
     *  of zero disables rendering of the element and negative
     *  values are an error.BCD tables only load in the browser
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    markerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The mask attribute is a presentation attribute mainly used to
     *  bind a given <mask> element with the element the attribute
     *  belongs to.Note: As a presentation attribute mask can
     *  be used as a CSS property.You can use this attribute with
     *  the following SVG elements:Since SVG2, the mask attribute
     *  is defined as a css property and is a shorthand for many
     *  other properties: mask-image, mask-mode, mask-repeat,
     *  mask-position, mask-clip, mask-origin, mask-size, and
     *  mask-composite.BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    mask: PropTypes.string,

    /**
     *  The opacity attribute specifies the transparency of an object
     *  or of a group of objects, that is, the degree to which
     *  the background behind the element is overlaid.Note: As
     *  a presentation attribute, opacity can be used as a CSS
     *  property. See the css opacity property for more information.You
     *  can use this attribute with the following SVG elements:The
     *  uniform opacity setting to be applied across an entire
     *  object, as a <number>. Any values outside the range 0.0
     *  (fully transparent) to 1.0 (fully opaque) will be clamped
     *  to this range.BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The orient attribute indicates how a marker is rotated when it
     *  is placed at its position on the shape.You can use this
     *  attribute with the following SVG elements:This value indicates
     *  that the marker is oriented such that its positive x-axis
     *  is pointing in a direction relative to the path at the
     *  position the marker is placed.If placed by marker-start,
     *  the marker is oriented 180° different from the orientation
     *  that would be used if auto where specified. For all other
     *  markers, auto-start-reverse means the same as auto.Note:
     *  This allows a single arrowhead marker to be defined that
     *  can be used for both the start and end of a path, i.e.
     *  which points outwards from both ends.This value indicates
     *  that the marker is oriented such that the specified angle
     *  is that measured between the shape's positive x-axis and
     *  the marker's positive x-axis.Note: For example, if a value
     *  of 45 is given, then the marker's positive x-axis would
     *  be pointing down and right in the shape's coordinate system.This
     *  value indicates an angle in degrees. The marker is oriented
     *  such that the specified angle is that measured between
     *  the shape's positive x-axis and the marker's positive
     *  x-axis.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    orient: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The overflow attribute sets what to do when an element's content
     *  is too big to fit in its block formatting context. This
     *  feature is not widely implemented yet.This attribute has
     *  the same parameter values and meaning as the css overflow
     *  property, however, the following additional points apply:Note:
     *  Although the initial value for overflow is auto, it is
     *  overwritten in the User Agent style sheet for the <svg>
     *  element when it is not the root element of a stand-alone
     *  document, the <pattern> element, and the <marker> element
     *  to be hidden by default.Note: As a presentation attribute,
     *  overflow can be used as a CSS property. See the CSS overflow
     *  property for more information.You can use this attribute
     *  with the following SVG elements:For a description of the
     *  values, please see the css overflow property.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    overflow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pointer-events attribute is a presentation attribute that
     *  allows defining whether or when an element may be the
     *  target of a mouse event.Note: As a presentation attribute
     *  pointer-events can be used as a CSS property.You can use
     *  this attribute with the following SVG elements:For a detailed
     *  explanation of each possible value, have a look at the
     *  CSS pointer-events documentation.BCD tables only load
     *  in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    pointerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The preserveAspectRatio attribute indicates how an element with
     *  a viewBox providing a given aspect ratio must fit into
     *  a viewport with a different aspect ratio.Because the aspect
     *  ratio of an SVG image is defined by the viewBox attribute,
     *  if this attribute isn't set, the preserveAspectRatio attribute
     *  has no effect (with one exception, the <image> element,
     *  as described below).Its value is made of one or two keywords:
     *  A required alignment value and an optional "meet or slice"
     *  reference as described below:The alignment value indicates
     *  whether to force uniform scaling and, if so, the alignment
     *  method to use in case the aspect ratio of the viewBox
     *  doesn't match the aspect ratio of the viewport. The alignment
     *  value must be one of the following keywords:The meet or
     *  slice reference is optional and, if provided, must be
     *  one of the following keywords:You can use this attribute
     *  with the following SVG elements:For <feImage>, preserveAspectRatio
     *  defines how the referenced image should fit in the rectangle
     *  define by the <feImage> element.For <image>, preserveAspectRatio
     *  defines how the referenced image should fit in the rectangle
     *  define by the <image> element.For <marker>, preserveAspectRatio
     *  indicates if a uniform scaling must be performed to fit
     *  the element viewport.For <pattern>, preserveAspectRatio
     *  indicates if a uniform scaling must be performed to fit
     *  the element viewport.For <svg>, preserveAspectRatio indicates
     *  if a uniform scaling must be performed to fit the element
     *  viewport.For <symbol>, preserveAspectRatio indicates if
     *  a uniform scaling must be performed to fit the element
     *  viewport.For <view>, preserveAspectRatio indicates if
     *  a uniform scaling must be performed to fit the element
     *  viewport.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    preserveAspectRatio: PropTypes.string,

    /**
     *  The refX attribute defines the x coordinate of an element's reference
     *  point.You can use this attribute with the following SVG
     *  elements:For <marker>, refX defines the x coordinate of
     *  the marker's reference point, which is to be placed exactly
     *  at the marker's position on the shape.Lengths are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.Percentage values are interpreted as being
     *  a percentage of the viewBox width.Numbers are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.The reference point of the marker is placed
     *  at the left edge of the shape.The reference point of the
     *  marker is placed at the horizontal center of the shape.The
     *  reference point of the marker is placed at the right edge
     *  of the shape.For <symbol>, refX defines the x coordinate
     *  of the symbol, which is defined by the cumulative effect
     *  of the x attribute and any transformations on the <symbol>
     *  and its host <use> element.Unlike other positioning attributes,
     *  refX is interpreted as being in the coordinate system
     *  of the symbol contents, after application of the viewBox
     *  and preserveAspectRatio attributes. If the attribute is
     *  not specified, no horizontal adjustment is made, and the
     *  left side of the symbol's rectangular viewport region
     *  (regardless of the viewBox coordinate) is positioned at
     *  the x coordinate.Note: For backwards compatibility, the
     *  behavior when refX is not specified on a <symbol> element
     *  is different from when it is specified with a value of
     *  0, and therefore different from the behavior when an equivalent
     *  attribute is not specified on a <marker> element.Lengths
     *  are interpreted as being in the coordinate system of the
     *  marker contents, after application of the viewBox and
     *  preserveAspectRatio attributes.Percentage values are interpreted
     *  as being a percentage of the viewBox width.Numbers are
     *  interpreted as being in the coordinate system of the marker
     *  contents, after application of the viewBox and preserveAspectRatio
     *  attributes.The reference point of the marker is placed
     *  at the left edge of the shape.The reference point of the
     *  marker is placed at the horizontal center of the shape.The
     *  reference point of the marker is placed at the right edge
     *  of the shape.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    refX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The refY attribute defines the y coordinate of an element's reference
     *  point.You can use this attribute with the following SVG
     *  elements:For <marker>, refY defines the y coordinate of
     *  the marker's reference point, which is to be placed exactly
     *  at the marker's position on the shape.Lengths are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.Percentage values are interpreted as being
     *  a percentage of the viewBox height.Numbers are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.The reference point of the marker is placed
     *  at the top edge of the shape.The reference point of the
     *  marker is placed at the vertical center of the shape.The
     *  reference point of the marker is placed at the bottom
     *  edge of the shape.For <symbol>, refY defines the y coordinate
     *  of the symbol, which is defined by the cumulative effect
     *  of the y attribute and any transformations on the <symbol>
     *  and its host <use> element.Unlike other positioning attributes,
     *  refY is interpreted as being in the coordinate system
     *  of the symbol contents, after application of the viewBox
     *  and preserveAspectRatio attributes. If the attribute is
     *  not specified, no vertical adjustment is made, and the
     *  top side of the symbol's rectangular viewport region (regardless
     *  of the viewBox coordinate) is positioned at the y coordinate.Note:
     *  For backwards compatibility, the behavior when refY is
     *  not specified on a <symbol> element is different from
     *  when it is specified with a value of 0, and therefore
     *  different from the behavior when an equivalent attribute
     *  is not specified on a <marker> element.Lengths are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.Percentage values are interpreted as being
     *  a percentage of the viewBox height.Numbers are interpreted
     *  as being in the coordinate system of the marker contents,
     *  after application of the viewBox and preserveAspectRatio
     *  attributes.The reference point of the marker is placed
     *  at the top edge of the shape.The reference point of the
     *  marker is placed at the vertical center of the shape.The
     *  reference point of the marker is placed at the bottom
     *  edge of the shape.Last modified: May 13, 2022, by MDN
     *  contributors
     */
    refY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The viewBox attribute defines the position and dimension, in
     *  user space, of an SVG viewport.The value of the viewBox
     *  attribute is a list of four numbers: min-x, min-y, width
     *  and height. The numbers, which are separated by whitespace
     *  and/or a comma, specify a rectangle in user space which
     *  is mapped to the bounds of the viewport established for
     *  the associated SVG element (not the browser viewport).You
     *  can use this attribute with the following SVG elements:The
     *  exact effect of this attribute is influenced by the preserveAspectRatio
     *  attribute.Note: Values for width or height lower or equal
     *  to 0 disable rendering of the element.For <marker>, viewBox
     *  defines the position and dimension for the content of
     *  the <marker> element.For <pattern>, viewBox defines the
     *  position and dimension for the content of the pattern
     *  tile.For <svg>, viewBox defines the position and dimension
     *  for the content of the <svg> element.For <symbol>, viewBox
     *  defines the position and dimension for the content of
     *  the <symbol> element.For <view>, viewBox defines the position
     *  and dimension for the content of the <view> element.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    viewBox: PropTypes.string,

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

export default Marker;
