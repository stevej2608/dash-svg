
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeDropShadow is a wrapper for the <feDropShadow> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
 */
const FeDropShadow = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feDropShadow
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feDropShadow>
    );
};

FeDropShadow.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeDropShadow.propTypes = {
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
     *  browser
     */
    colorInterpolationFilters: PropTypes.oneOfType([
        PropTypes.oneOf(['"auto"|"inherit"|"linearRGB"|"sRGB"']),
        PropTypes.bool
     ]),

    /**
     *  The dx attribute indicates a shift along the x-axis on the position
     *  of an element or its content.You can use this attribute
     *  with the following SVG elements:Warning: As of SVG2 <altGlyph>
     *  is deprecated and shouldn't be used.For <altGlyph>, if
     *  it contains a single value, dx defines a shift along the
     *  x-axis for all alternate glyph.If there are multiple values,
     *  dx defines a shift along the x-axis for each individual
     *  glyph relative to the preceding glyph. If there are less
     *  values than glyphs, the remaining glyphs use a value of
     *  0. If there are more values than glyphs, extra values
     *  are ignored.For <feDropShadow>, dx defines the x offset
     *  of the dropped shadow. The unit used to resolve the value
     *  of the attribute is set by the primitiveUnits attribute
     *  of the <filter> element.For <feOffset>, dx defines the
     *  x offset of the filter input graphic. The unit used to
     *  resolve the value of the attribute is set by the primitiveUnits
     *  attribute of the <filter> element.Warning: As of SVG2
     *  <glyphRef> is deprecated and shouldn't be used.For <glyphRef>,
     *  dx defines the x offset of the glyph, in the font metric
     *  system.For <text>, if it contains a single value, dx defines
     *  a shift along the x-axis for all glyphs.If there are multiple
     *  values, dx defines a shift along the x-axis for each individual
     *  glyph relative to the preceding glyph. If there are less
     *  values than glyphs, the remaining glyphs use a value of
     *  0. If there are more values than glyphs, extra values
     *  are ignored.Warning: As of SVG2 <tref> is deprecated and
     *  shouldn't be used.For <tref>, if it contains a single
     *  value, dx defines a shift along the x-axis for all glyphs.If
     *  there are multiple values, dx defines a shift along the
     *  x-axis for each individual glyph relative to the preceding
     *  glyph. If there are less values than glyphs, the remaining
     *  glyphs use a value of 0. If there are more values than
     *  glyphs, extra values are ignored.For <tspan>, if it contains
     *  a single value, dx defines a shift along the x-axis for
     *  all alternate glyph.If there are multiple values, dx defines
     *  a shift along the x-axis for each individual glyph relative
     *  to the preceding glyph. If there are less values than
     *  glyphs, the remaining glyphs use a value of 0. If there
     *  are more values than glyphs, extra values are ignored.
     * 
     */
    dx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The dy attribute indicates a shift along the y-axis on the position
     *  of an element or its content.You can use this attribute
     *  with the following SVG elements:Warning: As of SVG2 <altGlyph>
     *  is deprecated and shouldn't be used.For <altGlyph>, if
     *  it contains a single value, dy defines a shift along the
     *  y-axis for all alternate glyph.If there are multiple values,
     *  dy defines a shift along the y-axis for each individual
     *  glyph relative to the preceding glyph. If there are less
     *  values than glyphs, the remaining glyphs use a value of
     *  0. If there are more values than glyphs, extra values
     *  are ignored.For <feDropShadow>, dy defines the y offset
     *  of the dropped shadow. The unit used to resolve the value
     *  of the attribute is set by the primitiveUnits attribute
     *  of the <filter> element.For <feOffset>, dy defines the
     *  y offset of the filter input graphic. The unit used to
     *  resolve the value of the attribute is set by the primitiveUnits
     *  attribute of the <filter> element.Warning: As of SVG2
     *  <glyphRef> is deprecated and shouldn't be used.For <glyphRef>,
     *  dy defines the y offset of the glyph, in the font metric
     *  system.For <text>, if it contains a single value, dy defines
     *  a shift along the y-axis for all glyphs.If there are multiple
     *  values, dy defines a shift along the y-axis for each individual
     *  glyph relative to the preceding glyph. If there are less
     *  values than glyphs, the remaining glyphs use a value of
     *  0. If there are more values than glyphs, extra values
     *  are ignored.Warning: As of SVG2 <tref> is deprecated and
     *  shouldn't be used.For <tref>, if it contains a single
     *  value, dy defines a shift along the y-axis for all glyphs.If
     *  there are multiple values, dy defines a shift along the
     *  y-axis for each individual glyph relative to the preceding
     *  glyph. If there are less values than glyphs, the remaining
     *  glyphs use a value of 0. If there are more values than
     *  glyphs, extra values are ignored.For <tspan>, if it contains
     *  a single value, dy defines a shift along the y-axis for
     *  all alternate glyph.If there are multiple values, dy defines
     *  a shift along the y-axis for each individual glyph relative
     *  to the preceding glyph. If there are less values than
     *  glyphs, the remaining glyphs use a value of 0. If there
     *  are more values than glyphs, extra values are ignored.
     * 
     */
    dy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The flood-color attribute indicates what color to use to flood
     *  the current filter primitive subregion.Note: As a presentation
     *  attribute, flood-color can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:BCD
     *  tables only load in the browser
     */
    floodColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The flood-opacity attribute indicates the opacity value to use
     *  across the current filter primitive subregion.Note: As
     *  a presentation attribute, flood-opacity can be used as
     *  a CSS property.You can use this attribute with the following
     *  SVG elements:
      A number or percentage indicating
     *  the opacity value to use across the current filter primitive
     *  subregion.
      A number of 0 or a percentage of 0% represents
     *  a fully transparent color,  1 or 100% represents a fully
     *  opaque color.
    BCD tables only load in the browser
     * 
     */
    floodOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  itself, using an <feImage> element.Note: Firefox Bug 455986
     *  means that feImage cannot load partial images, including
     *  circles, rectangles, paths or other fragments defined
     *  in the document. So that this example works on more browsers,
     *  a full external image of the logo is loaded.
     */
    in: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  with the given result.
     */
    result: PropTypes.string,

    /**
     *  The x attribute defines a x-axis coordinate in the user coordinate
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
     *  x defines the  x coordinate of the upper left corner of
     *  its viewport.Note: Starting with SVG2, x is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <foreignObject>.Warning: As of SVG2 <glyphRef>
     *  is deprecated and shouldn't be used.For <glyphRef>, x
     *  defines the x-axis coordinate of the glyph.For <image>,
     *  x defines the  x coordinate of the upper left corner of
     *  the image.Note: Starting with SVG2, x is a Geometry Property
     *  meaning this attribute can also be used as a CSS property
     *  for images.For <mask>, x defines the  x coordinate of
     *  the upper left corner of its area of effect. The exact
     *  effect of this attribute is influenced by the maskUnits
     *  attribute.For <pattern>, x defines the  x coordinate of
     *  the upper left corner of the tile pattern. The exact effect
     *  of this attribute is influenced by the patternUnits and
     *  patternTransform attributes.For <rect>, x defines the 
     *  x coordinate of the upper left corner of the shape.Note:
     *  Starting with SVG2, x is a Geometry Property meaning this
     *  attribute can also be used as a CSS property for rectangles.For
     *  <svg>, x defines the  x coordinate of the upper left corner
     *  of its viewport.Note: Starting with SVG2, x is a Geometry
     *  Property meaning this attribute can also be used as a
     *  CSS property for <svg>.For <text>, if it contain a single
     *  value, x defines the x coordinate on where the content
     *  text position must be placed. The content text position
     *  is usually a point on the baseline of the first line of
     *  text. The exact content text position is influenced by
     *  some properties like text-anchor, or direction.If there
     *  are multiple values, x defines the x coordinate of each
     *  individual glyph from the text. If there are less values
     *  than glyphs, the remaining glyphs are placed in the continuity
     *  of the last positioned glyph. If there are more values
     *  than glyphs, extra values are ignored.Warning: As of SVG2
     *  <tref> is deprecated and shouldn't be used.For <tref>,
     *  if it contain a single value, x defines the x coordinate
     *  on where the content text position must be placed. The
     *  content text position is usually a point on the baseline
     *  of the first line of text. The exact content text position
     *  is influenced by some properties like text-anchor, or
     *  direction.If there are multiple values, x defines the
     *  x coordinate of each individual glyph from the text. If
     *  there are less values than glyphs, the remaining glyphs
     *  are placed in the continuity of the last positioned glyph.
     *  If there are more values than glyphs, extra values are
     *  ignored.For <tspan>, if it contain a single value, x defines
     *  the x coordinate on where the content text position must
     *  be placed. The content text position is usually a point
     *  on the baseline of the first line of text. The exact content
     *  text position is influenced by some properties like text-anchor,
     *  or direction.If there are multiple values, x defines the
     *  x coordinate of each individual glyph from the text. If
     *  there are less values than glyphs, the remaining glyphs
     *  are placed in the continuity of the last positioned glyph.
     *  If there are more values than glyphs, extra values are
     *  ignored.For <use>, x defines the  x coordinate of the
     *  upper left corner of the referenced element.Note: Starting
     *  with SVG2, x is a Geometry Property meaning this attribute
     *  can also be used as a CSS property for used elements.
     * 
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
     *  for <svg>.For <text>, if it contain a single value, y
     *  defines the y coordinate on where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by some properties
     *  like text-anchor, or direction.If there are multiple values,
     *  y defines the y coordinate of each individual glyph from
     *  the text. If there are less values than glyphs, the remaining
     *  glyphs are placed in the continuity of the last positioned
     *  glyph. If there are more values than glyphs, extra values
     *  are ignored.Warning: As of SVG2 <tref> is deprecated and
     *  shouldn't be used.For <tref>, if it contain a single value,
     *  y defines the y coordinate on where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by some properties
     *  like text-anchor, or direction.If there are multiple values,
     *  y defines the y coordinate of each individual glyph from
     *  the text. If there are less values than glyphs, the remaining
     *  glyphs are placed in the continuity of the last positioned
     *  glyph. If there are more values than glyphs, extra values
     *  are ignored.For <tspan>, if it contain a single value,
     *  y defines the y coordinate on where the content text position
     *  must be placed. The content text position is usually a
     *  point on the baseline of the first line of text. The exact
     *  content text position is influenced by some properties
     *  like text-anchor, or direction.If there are multiple values,
     *  y defines the y coordinate of each individual glyph from
     *  the text. If there are less values than glyphs, the remaining
     *  glyphs are placed in the continuity of the last positioned
     *  glyph. If there are more values than glyphs, extra values
     *  are ignored.For <use>, y defines the y coordinate of the
     *  upper left corner of the referenced element.Note: Starting
     *  with SVG2, y is a Geometry Property meaning this attribute
     *  can also be used as a CSS property for used elements.
     * 
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

export default FeDropShadow;