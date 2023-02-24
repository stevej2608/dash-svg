
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeConvolveMatrix is a wrapper for the <feConvolveMatrix> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix
 */
const FeConvolveMatrix = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feConvolveMatrix
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feConvolveMatrix>
    );
};

FeConvolveMatrix.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeConvolveMatrix.propTypes = {
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
     *  The bias attribute shifts the range of the filter. After applying
     *  the kernelMatrix of the <feConvolveMatrix> element to
     *  the input image to yield a number and applied the divisor
     *  attribute, the bias attribute is added to each component.
     *  This allows representation of values that would otherwise
     *  be clamped to 0 or 1.You can use this attribute with the
     *  following SVG elements:One application of bias is when
     *  it is desirable to have 0.5 gray value be the zero response
     *  of the filter.BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    bias: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The divisor attribute specifies the value by which the resulting
     *  number of applying the kernelMatrix of a <feConvolveMatrix>
     *  element to the input image color value is divided to yield
     *  the destination color value.A divisor that is the sum
     *  of all the matrix values tends to have an evening effect
     *  on the overall color intensity of the result.You can use
     *  this attribute with the following SVG elements:This value
     *  defines the divisor. If the specified divisor is 0 then
     *  the default value will be used instead.BCD tables only
     *  load in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    divisor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The edgeMode attribute determines how to extend the input image
     *  as necessary with color values so that the matrix operations
     *  can be applied when the kernel is positioned at or near
     *  the edge of the input image.You can use this attribute
     *  with the following SVG elements:For <feConvolveMatrix>,
     *  edgeMode determines how to extend the input image as necessary
     *  with color values so that the matrix operations can be
     *  applied when the kernel is positioned at or near the edge
     *  of the input image.This value indicates that the input
     *  image is extended along each of its borders as necessary
     *  by duplicating the color values at the given edge of the
     *  input image.This value indicates that the input image
     *  is extended by taking the color values from the opposite
     *  edge of the image.This value indicates that the input
     *  image is extended with pixel values of zero for R, G,
     *  B and A.For <feGaussianBlur>, edgeMode determines how
     *  to extend the input image as necessary with color values
     *  so that the matrix operations can be applied when the
     *  kernel is positioned at or near the edge of the input
     *  image.This value indicates that the input image is extended
     *  along each of its borders as necessary by duplicating
     *  the color values at the given edge of the input image.This
     *  value indicates that the input image is extended by taking
     *  the color values from the opposite edge of the image.This
     *  value indicates that the input image is extended with
     *  pixel values of zero for R, G, B and A.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    edgeMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  width
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The in attribute identifies input for the given filter primitive.The
     *  value can be either one of the six keywords defined below,
     *  or a string which matches a previous result attribute
     *  value within the same <filter> element. If no value is
     *  provided and this is the first filter primitive, then
     *  this filter primitive will use SourceGraphic as its input.
     *  If no value is provided and this is a subsequent filter
     *  primitive, then this filter primitive will use the result
     *  from the previous filter primitive as its input.If the
     *  value for result appears multiple times within a given
     *  <filter> element, then a reference to that result will
     *  use the closest preceding filter primitive with the given
     *  value for attribute result.You can use this attribute
     *  with the following SVG elements:This keyword represents
     *  the graphics elements that were the original input into
     *  the <filter> element.This keyword represents the graphics
     *  elements that were the original input into the <filter>
     *  element. SourceAlpha has all of the same rules as SourceGraphic
     *  except that only the alpha channel is used.This keyword
     *  represents an image snapshot of the SVG document under
     *  the filter region at the time that the <filter> element
     *  was invoked.Same as BackgroundImage except only the alpha
     *  channel is used.This keyword represents the value of the
     *  fill property on the target element for the filter effect.
     *  In many cases, the FillPaint is opaque everywhere, but
     *  that might not be the case if a shape is painted with
     *  a gradient or pattern which itself includes transparent
     *  or semi-transparent parts.This keyword represents the
     *  value of the stroke property on the target element for
     *  the filter effect. In many cases, the StrokePaint is opaque
     *  everywhere, but that might not be the case if a shape
     *  is painted with a gradient or pattern which itself includes
     *  transparent or semi-transparent parts.This value is an
     *  assigned name for the filter primitive in the form of
     *  a <custom-ident>. If supplied, then graphics that result
     *  from processing this filter primitive can be referenced
     *  by an in attribute on a subsequent filter primitive within
     *  the same filter element. If no value is provided, the
     *  output will only be available for re-use as the implicit
     *  input into the next filter primitive if that filter primitive
     *  provides no value for its in attribute.BackgroundImage
     *  is not supported as a filter source in modern browsers
     *  (see the feComposite compatibility table). We therefore
     *  need to import one of the images to blend inside the filter
     *  itself, using an <feImage> element.Note: Firefox Bug 455986
     *  means that feImage cannot load partial images, including
     *  circles, rectangles, paths or other fragments defined
     *  in the document. So that this example works on more browsers,
     *  a full external image of the logo is loaded.Last modified:
     *  Jul 1, 2022, by MDN contributors
     */
    in: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The kernelMatrix attribute defines the list of numbers that make
     *  up the kernel matrix for the <feConvolveMatrix> element.Values
     *  are separated by space characters and/or a comma. The
     *  number of entries in the list must equal to <orderX> by
     *  <orderY> as defined in the order attribute.You can use
     *  this attribute with the following SVG elements:The list
     *  of <number>s that make up the kernel matrix for the convolution.
     *  Values are separated by space characters and/or a comma.
     *  The number of entries in the list must equal <orderX>
     *  times <orderY>.If the result of orderX * orderY is not
     *  equal to the number of entries in the value list, the
     *  filter primitive acts as a pass through filter.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    kernelMatrix: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The kernelUnitLength attribute
     *  has two meanings based on the context it's used in. For
     *  lighting filter primitives, it indicates the intended
     *  distance for the x and y coordinates, for <feConvolveMatrix>,
     *  it indicates the intended distance between successive
     *  columns and rows in the kernel matrix.You can use this
     *  attribute with the following SVG elements:For the <feConvolveMatrix>,
     *  kernelUnitLength indicates the intended distance in current
     *  filter units (i.e., units as determined by the value of
     *  primitiveUnits attribute) between successive columns and
     *  rows, respectively, in the kernelMatrix. By specifying
     *  value(s) for kernelUnitLength, the kernel becomes defined
     *  in a scalable, abstract coordinate system. If the attribute
     *  is not specified, the default value is one pixel in the
     *  offscreen bitmap, which is a pixel-based coordinate system,
     *  and thus potentially not scalable.If a negative or zero
     *  value is specified the default value will be used instead.The
     *  first number is the x value. The second number is the
     *  y value. If the x value is not specified, it defaults
     *  to the same value as x.For the <feDiffuseLighting>, kernelUnitLength
     *  indicates the intended distance in current filter units
     *  (i.e., units as determined by the value of attribute primitiveUnits)
     *  for the x and y coordinate, respectively, in the surface
     *  normal calculation formulas.The first number is the x
     *  value. The second number is the y value. If the y value
     *  is not specified, it defaults to the same value as x.
     *  By specifying value(s) for kernelUnitLength, the kernel
     *  becomes defined in a scalable, abstract coordinate system.
     *  If the attribute is not specified, the x and y values
     *  represent very small deltas relative to a given position,
     *  which might be implemented in some cases as one pixel
     *  in the intermediate image offscreen bitmap, which is a
     *  pixel-based coordinate system, and thus potentially not
     *  scalable.If a negative or zero value is specified the
     *  default value will be used instead.For the <feSpecularLighting>,
     *  kernelUnitLength indicates the intended distance in current
     *  filter units (i.e., units as determined by the value of
     *  attribute primitiveUnits) for the x and y coordinate,
     *  respectively, in the surface normal calculation formulas.The
     *  first number is the x value. The second number is the
     *  y value. If the y value is not specified, it defaults
     *  to the same value as x. By specifying value(s) for kernelUnitLength,
     *  the kernel becomes defined in a scalable, abstract coordinate
     *  system. If the attribute is not specified, the x and y
     *  values represent very small deltas relative to a given
     *  position, which might be implemented in some cases as
     *  one pixel in the intermediate image offscreen bitmap,
     *  which is a pixel-based coordinate system, and thus potentially
     *  not scalable.If a negative or zero value is specified
     *  the default value will be used instead.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    kernelUnitLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The order attribute indicates the size of the matrix to be used
     *  by a <feConvolveMatrix> element.You can use this attribute
     *  with the following SVG elements:This value indicates the
     *  number of cells in each dimension for the kernel matrix.
     *  The values provided must be <integer>s greater than zero.
     *  Values that are not integers will be truncated, i.e. rounded
     *  to the closest integer value towards zero. The first number,
     *  indicates the number of columns in the matrix. The second
     *  number, indicates the number of rows in the matrix. If
     *  no second number is not provided, it defaults to the first
     *  number.It is recommended that only small values (e.g.,
     *  3) be used; higher values may result in very high CPU
     *  overhead and usually do not produce results that justify
     *  the impact on performance.BCD tables only load in the
     *  browser with JavaScript enabled. Enable JavaScript to
     *  view data.Last modified: Jun 12, 2022, by MDN contributors
     * 
     */
    order: PropTypes.oneOf(["no", "yes"]),

    /**
     *  the preserveAlpha attribute indicates how a <feConvolveMatrix>
     *  element handled alpha transparency.You can use this attribute
     *  with the following SVG elements:This value indicates that
     *  the convolution will only apply to the color channels.
     *  In this case, the filter will temporarily unpremultiply
     *  the color component values and apply the kernel.This value
     *  indicates that the convolution will apply to all channels,
     *  including the alpha channel.BCD tables only load in the
     *  browser with JavaScript enabled. Enable JavaScript to
     *  view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    preserveAlpha: PropTypes.oneOf(['true', 'false']),

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
     *  The targetX attribute determines the positioning in horizontal
     *  direction of the convolution matrix relative to a given
     *  target pixel in the input image. The leftmost column of
     *  the matrix is column number zero. The value must be such
     *  that: 0 <= targetX < orderX.You can use this attribute
     *  with the following SVG elements:This value indicates the
     *  positioning in horizontal direction of the convolution
     *  matrix relative to a given target pixel in the input image.BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    targetX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The targetY attribute determines the positioning in vertical
     *  direction of the convolution matrix relative to a given
     *  target pixel in the input image. The topmost row of the
     *  matrix is row number zero. The value must be such that:
     *  0 <= targetY < orderY.You can use this attribute with
     *  the following SVG elements:This value indicates the positioning
     *  in vertical direction of the convolution matrix relative
     *  to a given target pixel in the input image.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    targetY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default FeConvolveMatrix;
