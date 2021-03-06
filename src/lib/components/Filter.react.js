
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Filter is a wrapper for the <filter> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
 */
const Filter = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <filter
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </filter>
    );
};

Filter.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Filter.propTypes = {
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
     *  may cease to work at any time.The filterRes attribute
     *  indicates the width and height of the intermediate images
     *  in pixels of a filter primitive.Take care when assigning
     *  a non-default value to this attribute. Too small of a
     *  value may result in unwanted pixelation in the result.
     *  Too large of a value may result in slow processing and
     *  large memory usage.Note that negative values or zero values
     *  disable the rendering of the element which referenced
     *  the filter.You can use this attribute with the following
     *  SVG elements:This value takes one or two values, the first
     *  one outlining the resolution in horizontal direction,
     *  the second one in vertical direction. If only one value
     *  is specified, it is used for both directions.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    filterRes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The filterUnits attribute defines the coordinate system for the
     *  attributes x, y, width and height.You can use this attribute
     *  with the following SVG elements:x, y, width and height
     *  represent values in the current coordinate system that
     *  results from taking the current user coordinate system
     *  in place at the time when the <filter> element is referenced
     *  (i.e., the user coordinate system for the element referencing
     *  the <filter> element via a filter attribute).In that case,
     *  x, y, width and height represent fractions or percentages
     *  of the bounding box on the referencing element.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
     */
    filterUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The primitiveUnits attribute specifies the coordinate system
     *  for the various length values within the filter primitives
     *  and for the attributes that define the filter primitive
     *  subregion.You can use this attribute with the following
     *  SVG elements:This value indicates that any length values
     *  within the filter definitions represent values in the
     *  current user coordinate system in place at the time when
     *  the <filter> element is referenced (i.e., the user coordinate
     *  system for the element referencing the <filter> element
     *  via a filter attribute).This value indicates that any
     *  length values within the filter definitions represent
     *  fractions or percentages of the bounding box on the referencing
     *  element.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    primitiveUnits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default Filter;
