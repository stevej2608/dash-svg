
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeImage is a wrapper for the <feImage> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage
 */
const FeImage = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feImage
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feImage>
    );
};

FeImage.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeImage.propTypes = {
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
     *  The height attribute defines the vertical length of an element
     *  in the user coordinate system.You can use this attribute
     *  with the following SVG elements:For <feBlend>, height
     *  defines the vertical length for the rendering area of
     *  the primitive.For <feColorMatrix>, height defines the
     *  vertical length for the rendering area of the primitive.For
     *  <feComponentTransfer>, height defines the vertical length
     *  for the rendering area of the primitive.For <feComposite>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <feConvolveMatrix>, height defines
     *  the vertical length for the rendering area of the primitive.For
     *  <feDiffuseLighting>, height defines the vertical length
     *  for the rendering area of the primitive.For <feDisplacementMap>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <feDropShadow>, height defines the
     *  vertical length for the rendering area of the primitive.For
     *  <feFlood>, height defines the vertical length for the
     *  rendering area of the primitive.For <feGaussianBlur>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <feImage>, height defines the vertical
     *  length for the rendering area of the primitive.For <feMerge>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <feMorphology>, height defines the
     *  vertical length for the rendering area of the primitive.For
     *  <feOffset>, height defines the vertical length for the
     *  rendering area of the primitive.For <feSpecularLighting>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <feTile>, height defines the vertical
     *  length for the rendering area of the primitive.For <feTurbulence>,
     *  height defines the vertical length for the rendering area
     *  of the primitive.For <filter>, height defines the vertical
     *  length for the rendering area of the filter.For <foreignObject>,
     *  height defines the vertical length for the rendering area
     *  for the referenced document.Note: Starting with SVG2,
     *  height is a Geometry Property meaning this attribute can
     *  also be used as a CSS property for <foreignObject>.For
     *  <image>, height defines the vertical length for the image.Note:
     *  Starting with SVG2, height is a Geometry Property meaning
     *  this attribute can also be used as a CSS property for
     *  images.For <mask>, height defines the vertical length
     *  of its area of effect. The exact effect of this attribute
     *  is influenced by the maskUnits attribute.For <pattern>,
     *  height defines the vertical length of the tile pattern.
     *  The exact effect of this attribute is influenced by the
     *  patternUnits and patternTransform attributes.For <rect>,
     *  height defines the vertical length for the rectangle.Note:
     *  Starting with SVG2, height is a Geometry Property meaning
     *  this attribute can also be used as a CSS property for
     *  rectangles.For <svg>, height defines the vertical length
     *  for the rendering area of the SVG viewport.Note: In an
     *  HTML document if both the viewBox and height attributes
     *  are omitted, the svg element will be rendered with a height
     *  of 150pxNote: Starting with SVG2, height is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <svg>.For <use>, height defines the vertical
     *  length for the referenced element.Note: height has no
     *  effect on use elements, unless the element referenced
     *  has a viewbox - i.e. they only have an effect when use
     *  refers to a svg or symbol element.Note: Starting with
     *  SVG2, height is a Geometry Property meaning this attribute
     *  can also be used as a CSS property for used elements.Last
     *  modified: Jun 29, 2022, by MDN contributors
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The width attribute defines the horizontal length of an element
     *  in the user coordinate system.You can use this attribute
     *  with the following SVG elements:For <feBlend>, width defines
     *  the horizontal length for the rendering area of the primitive.For
     *  <feColorMatrix>, width defines the horizontal length for
     *  the rendering area of the primitive.For <feComponentTransfer>,
     *  width defines the horizontal length for the rendering
     *  area of the primitive.For <feComposite>, width defines
     *  the horizontal length for the rendering area of the primitive.For
     *  <feConvolveMatrix>, width defines the horizontal length
     *  for the rendering area of the primitive.For <feDiffuseLighting>,
     *  width defines the horizontal length for the rendering
     *  area of the primitive.For <feDisplacementMap>, width defines
     *  the horizontal length for the rendering area of the primitive.For
     *  <feDropShadow>, width defines the horizontal length for
     *  the rendering area of the primitive.For <feFlood>, width
     *  defines the horizontal length for the rendering area of
     *  the primitive.For <feGaussianBlur>, width defines the
     *  horizontal length for the rendering area of the primitive.For
     *  <feImage>, width defines the horizontal length for the
     *  rendering area of the primitive.For <feMerge>, width defines
     *  the horizontal length for the rendering area of the primitive.For
     *  <feMorphology>, width defines the horizontal length for
     *  the rendering area of the primitive.For <feOffset>, width
     *  defines the horizontal length for the rendering area of
     *  the primitive.For <feSpecularLighting>, width defines
     *  the horizontal length for the rendering area of the primitive.For
     *  <feTile>, width defines the horizontal length for the
     *  rendering area of the primitive.For <feTurbulence>, width
     *  defines the horizontal length for the rendering area of
     *  the primitive.For <filter>, width defines the horizontal
     *  length for the rendering area of the filter.For <foreignObject>,
     *  width defines the horizontal length for the rendering
     *  area for the referenced document.Note: Starting with SVG2,
     *  width is a Geometry Property meaning this attribute can
     *  also be used as a CSS property for <foreignObject>.For
     *  <image>, width defines the horizontal length for the image.Note:
     *  Starting with SVG2, width is a Geometry Property meaning
     *  this attribute can also be used as a CSS property for
     *  images.For <mask>, width defines the horizontal length
     *  of its area of effect. The exact effect of this attribute
     *  is influenced by the maskUnits attribute.For <pattern>,
     *  width defines the horizontal length of the tile pattern.
     *  The exact effect of this attribute is influenced by the
     *  patternUnits and patternTransform attributes.For <rect>,
     *  width defines the horizontal length for the rectangle.Note:
     *  Starting with SVG2, width is a Geometry Property meaning
     *  this attribute can also be used as a CSS property for
     *  rectangles.For <svg>, width defines the horizontal length
     *  for the rendering area of the SVG viewport.Note: In an
     *  HTML document if both the viewBox and width attributes
     *  are omitted, the svg element will be rendered with a width
     *  of 300pxNote: Starting with SVG2, width is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <svg>.For <use>, width defines the horizontal
     *  length for the referenced element.Note: width has no effect
     *  on use elements, unless the element referenced has a viewbox
     *  - i.e. they only have an effect when use refers to a svg
     *  or symbol element.Note: Starting with SVG2, width is a
     *  Geometry Property meaning this attribute can also be used
     *  as a CSS property for used elements.Last modified: Jun
     *  29, 2022, by MDN contributors
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The x attribute defines an x-axis coordinate in the user coordinate
     *  system.You can use this attribute with the following SVG
     *  elements:Warning: As of SVG2 <altGlyph> is deprecated
     *  and shouldn't be used.For <altGlyph>, x defines the x-axis
     *  coordinate of the alternate glyph.For <feBlend>, x defines
     *  the minimum x coordinate for the rendering area of the
     *  primitive.For <feColorMatrix>, x defines the minimum x
     *  coordinate for the rendering area of the primitive.For
     *  <feComponentTransfer>, x defines the minimum x coordinate
     *  for the rendering area of the primitive.For <feComposite>,
     *  x defines the minimum x coordinate for the rendering area
     *  of the primitive.For <feConvolveMatrix>, x defines the
     *  minimum x coordinate for the rendering area of the primitive.For
     *  <feDiffuseLighting>, x defines the minimum x coordinate
     *  for the rendering area of the primitive.For <feDisplacementMap>,
     *  x defines the minimum x coordinate for the rendering area
     *  of the primitive.For <feDropShadow>, x defines the minimum
     *  x coordinate for the rendering area of the primitive.For
     *  <feFlood>, x defines the minimum x coordinate for the
     *  rendering area of the primitive.For <feFuncA>, x defines
     *  the minimum x coordinate for the rendering area of the
     *  primitive.For <feFuncB>, x defines the minimum x coordinate
     *  for the rendering area of the primitive.For <feFuncG>,
     *  x defines the minimum x coordinate for the rendering area
     *  of the primitive.For <feFuncR>, x defines the minimum
     *  x coordinate for the rendering area of the primitive.For
     *  <feGaussianBlur>, x defines the minimum x coordinate for
     *  the rendering area of the primitive.For <feImage>, x defines
     *  the minimum x coordinate for the rendering area of the
     *  primitive.For <feMerge>, x defines the minimum x coordinate
     *  for the rendering area of the primitive.For <feMergeNode>,
     *  x defines the minimum x coordinate for the rendering area
     *  of the primitive.For <feMorphology>, x defines the minimum
     *  x coordinate for the rendering area of the primitive.For
     *  <feOffset>, x defines the minimum x coordinate for the
     *  rendering area of the primitive.For <fePointLight>, x
     *  defines the x location for the light source in the coordinate
     *  system defined by the primitiveUnits attribute on the
     *  <filter> element.For <feSpecularLighting>, x defines the
     *  minimum x coordinate for the rendering area of the primitive.For
     *  <feSpotLight>, x defines the x location for the light
     *  source in the coordinate system defined by the primitiveUnits
     *  attribute on the <filter> element.For <feTile>, x defines
     *  the minimum x coordinate for the rendering area of the
     *  primitive.For <feTurbulence>, x defines the minimum x
     *  coordinate for the rendering area of the primitive.For
     *  <filter>, x defines the x coordinate of the upper left
     *  corner for the rendering area of the filter.For <foreignObject>,
     *  x defines the x coordinate of the upper left corner of
     *  its viewport.Note: Starting with SVG2, x is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <foreignObject>.Warning: As of SVG2 <glyphRef>
     *  is deprecated and shouldn't be used.For <glyphRef>, x
     *  defines the x-axis coordinate of the glyph.For <image>,
     *  x defines the x coordinate of the upper left corner of
     *  the image.Note: Starting with SVG2, x is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for images.For <mask>, x defines the x coordinate of the
     *  upper left corner of its area of effect. The exact effect
     *  of this attribute is influenced by the maskUnits attribute.For
     *  <pattern>, x defines the x coordinate of the upper left
     *  corner of the tile pattern. The exact effect of this attribute
     *  is influenced by the patternUnits and patternTransform
     *  attributes.For <rect>, x defines the x coordinate of the
     *  upper left corner of the shape.Note: Starting with SVG2,
     *  x is a Geometry Property meaning this attribute can also
     *  be used as a CSS property for rectangles.For <svg>, x
     *  defines the x coordinate of the upper left corner of its
     *  viewport.Note: Starting with SVG2, x is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for <svg>.For <text>, if it contains a single value, x
     *  defines the x coordinate where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by other properties,
     *  such as text-anchor or direction.If it contains multiple
     *  values, x defines the x coordinate of each individual
     *  glyph from the text. If there are fewer values than glyphs,
     *  the remaining glyphs are placed in line with the last
     *  positioned glyph. If there are more values than glyphs,
     *  the extra values are ignored.Warning: As of SVG2 <tref>
     *  is deprecated and shouldn't be used.For <tref>, if it
     *  contains a single value, x defines the x coordinate where
     *  the content text position must be placed. The content
     *  text position is usually a point on the baseline of the
     *  first line of text. The exact content text position is
     *  influenced by other properties, such as text-anchor or
     *  direction.If it contains multiple values, x defines the
     *  x coordinate of each individual glyph from the text. If
     *  there are fewer values than glyphs, the remaining glyphs
     *  are placed in line with the last positioned glyph. If
     *  there are more values than glyphs, the extra values are
     *  ignored.For <tspan>, if it contains a single value, x
     *  defines the x coordinate where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by other properties,
     *  such as text-anchor or direction.If it contains multiple
     *  values, x defines the x coordinate of each individual
     *  glyph from the text. If there are fewer values than glyphs,
     *  the remaining glyphs are placed in line with the last
     *  positioned glyph. If there are more values than glyphs,
     *  the extra values are ignored.For <use>, x defines the
     *  x coordinate of the upper left corner of the referenced
     *  element.Note: Starting with SVG2, x is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for used elements.Last modified: Jun 17, 2022, by MDN
     *  contributors
     */
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The y attribute defines a y-axis coordinate in the user coordinate
     *  system.You can use this attribute with the following SVG
     *  elements:Warning: As of SVG2 <altGlyph> is deprecated
     *  and shouldn't be used.For <altGlyph>, y defines the y-axis
     *  coordinate of the alternate glyph.For <feBlend>, y defines
     *  the minimum y coordinate for the rendering area of the
     *  primitive.For <feColorMatrix>, y defines the minimum y
     *  coordinate for the rendering area of the primitive.For
     *  <feComponentTransfer>, y defines the minimum y coordinate
     *  for the rendering area of the primitive.For <feComposite>,
     *  y defines the minimum y coordinate for the rendering area
     *  of the primitive.For <feConvolveMatrix>, y defines the
     *  minimum y coordinate for the rendering area of the primitive.For
     *  <feDiffuseLighting>, y defines the minimum y coordinate
     *  for the rendering area of the primitive.For <feDisplacementMap>,
     *  y defines the minimum y coordinate for the rendering area
     *  of the primitive.For <feDropShadow>, y defines the minimum
     *  y coordinate for the rendering area of the primitive.For
     *  <feFlood>, y defines the minimum y coordinate for the
     *  rendering area of the primitive.For <feFuncA>, y defines
     *  the minimum y coordinate for the rendering area of the
     *  primitive.For <feFuncB>, y defines the minimum y coordinate
     *  for the rendering area of the primitive.For <feFuncG>,
     *  y defines the minimum y coordinate for the rendering area
     *  of the primitive.For <feFuncR>, y defines the minimum
     *  y coordinate for the rendering area of the primitive.For
     *  <feGaussianBlur>, y defines the minimum y coordinate for
     *  the rendering area of the primitive.For <feImage>, y defines
     *  the minimum y coordinate for the rendering area of the
     *  primitive.For <feMerge>, y defines the minimum y coordinate
     *  for the rendering area of the primitive.For <feMergeNode>,
     *  y defines the minimum y coordinate for the rendering area
     *  of the primitive.For <feMorphology>, y defines the minimum
     *  y coordinate for the rendering area of the primitive.For
     *  <feOffset>, y defines the minimum y coordinate for the
     *  rendering area of the primitive.For <fePointLight>, y
     *  defines the y location for the light source in the coordinate
     *  system defined by the primitiveUnits attribute on the
     *  <filter> element.For <feSpecularLighting>, y defines the
     *  minimum y coordinate for the rendering area of the primitive.For
     *  <feSpotLight>, y defines the y location for the light
     *  source in the coordinate system defined by the primitiveUnits
     *  attribute on the <filter> element.For <feTile>, y defines
     *  the minimum y coordinate for the rendering area of the
     *  primitive.For <feTurbulence>, y defines the minimum y
     *  coordinate for the rendering area of the primitive.For
     *  <filter>, y defines the y coordinate of the upper left
     *  corner for the rendering area of the filter.For <foreignObject>,
     *  y defines the y coordinate of the upper left corner of
     *  its viewport.Note: Starting with SVG2, y is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <foreignObject>.Warning: As of SVG2 <glyphRef>
     *  is deprecated and shouldn't be used.For <glyphRef>, y
     *  defines the y-axis coordinate of the glyph.For <image>,
     *  y defines the y coordinate of the upper left corner of
     *  the image.Note: Starting with SVG2, y is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for images.For <mask>, y defines the y coordinate of the
     *  upper left corner of its area of effect. The exact effect
     *  of this attribute is influenced by the maskUnits attribute.For
     *  <pattern>, y defines the y coordinate of the upper left
     *  corner of the tile pattern. The exact effect of this attribute
     *  is influenced by the patternUnits and patternTransform
     *  attributes.For <rect>, y defines the y coordinate of the
     *  upper left corner of the shape.Note: Starting with SVG2,
     *  y is a Geometry Property meaning this attribute can also
     *  be used as a CSS property for rectangles.For <svg>, y
     *  defines the y coordinate of the upper left corner of its
     *  viewport.Note: Starting with SVG2, y is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for <svg>.For <text>, if it contains a single value, y
     *  defines the y coordinate where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by other properties,
     *  such as text-anchor or direction.If it contains multiple
     *  values, y defines the y coordinate of each individual
     *  glyph from the text. If there are fewer values than glyphs,
     *  the remaining glyphs are placed in line with the last
     *  positioned glyph. If there are more values than glyphs,
     *  the extra values are ignored.Warning: As of SVG2 <tref>
     *  is deprecated and shouldn't be used.For <tref>, if it
     *  contains a single value, y defines the y coordinate where
     *  the content text position must be placed. The content
     *  text position is usually a point on the baseline of the
     *  first line of text. The exact content text position is
     *  influenced by other properties, such as text-anchor or
     *  direction.If it contains multiple values, y defines the
     *  y coordinate of each individual glyph from the text. If
     *  there are fewer values than glyphs, the remaining glyphs
     *  are placed in line with the last positioned glyph. If
     *  there are more values than glyphs, the extra values are
     *  ignored.For <tspan>, if it contains a single value, y
     *  defines the y coordinate where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by other properties,
     *  such as text-anchor or direction.If it contains multiple
     *  values, y defines the y coordinate of each individual
     *  glyph from the text. If there are fewer values than glyphs,
     *  the remaining glyphs are placed in line with the last
     *  positioned glyph. If there are more values than glyphs,
     *  the extra values are ignored.For <use>, y defines the
     *  y coordinate of the upper left corner of the referenced
     *  element.Note: Starting with SVG2, y is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for used elements.Last modified: Jun 14, 2022, by MDN
     *  contributors
     */
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default FeImage;
