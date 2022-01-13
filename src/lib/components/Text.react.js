
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Text is a wrapper for the <text> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
 */
const Text = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <text
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </text>
    );
};

Text.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Text.propTypes = {
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
     *  in the browser
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
     *  The direction attribute specifies the inline-base direction of
     *  a <text> or <tspan> element. It defines the start and
     *  end points of a line of text as used by the text-anchor
     *  and inline-size properties. It also may affect the direction
     *  in which characters are positioned if the unicode-bidi
     *  property's value is either embed or bidi-override.It applies
     *  only to glyphs oriented perpendicular to the inline-base
     *  direction, which includes the usual case of horizontally-oriented
     *  Latin or Arabic text and the case of narrow-cell Latin
     *  or Arabic characters rotated 90 degrees clockwise relative
     *  to a top-to-bottom inline-base direction.In many cases,
     *  the bidirectional Unicode algorithm produces the desired
     *  result automatically, so this attribute doesn't need to
     *  be specified in those cases. For other cases, such as
     *  when using right-to-left languages, it may be sufficient
     *  to add the direction attribute to the outermost <svg>
     *  element, and allow that direction to inherit to all text
     *  elements:Note: As a presentation attribute, direction
     *  can be used as a CSS property. See css direction for further
     *  information.You can use this attribute with the following
     *  SVG elements:BCD tables only load in the browser
     */
    direction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The dominant-baseline attribute specifies the dominant baseline,
     *  which is the baseline used to align the box’s text and
     *  inline-level contents. It also indicates the default alignment
     *  baseline of any boxes participating in baseline alignment
     *  in the box's alignment context.It is used to determine
     *  or re-determine a scaled-baseline-table. A scaled-baseline-table
     *  is a compound value with three components:Some values
     *  of the property re-determine all three values. Others
     *  only re-establish the baseline-table font-size. When the
     *  initial value, auto, would give an undesired result, this
     *  property can be used to explicitly set the desired scaled-baseline-table.If
     *  there is no baseline table in the nominal font, or if
     *  the baseline table lacks an entry for the desired baseline,
     *  then the browser may use heuristics to determine the position
     *  of the desired baseline.Note: As a presentation attribute,
     *  dominant-baseline can be used as a CSS property.You can
     *  use this attribute with the following SVG elements:If
     *  this property occurs on a <text> element, then the computed
     *  value depends on the value of the writing-mode attribute.If
     *  the writing-mode is horizontal, then the value of the
     *  dominant-baseline component is alphabetic. Otherwise,
     *  if the writing-mode is vertical, then the value of the
     *  dominant-baseline component is central.If this property
     *  occurs on a <tspan>, <tref>, <altGlyph>, or <textPath>
     *  element, then the dominant-baseline and the baseline-table
     *  components remain the same as those of the parent text
     *  content element.If the computed baseline-shift value actually
     *  shifts the baseline, then the baseline-table font-size
     *  component is set to the value of the font-size attribute
     *  on the element on which the dominant-baseline attribute
     *  occurs, otherwise the baseline-table font-size remains
     *  the same as that of the element.If there is no parent
     *  text content element, the scaled-baseline-table value
     *  is constructed as above for <text> elements.The dominant-baseline
     *  and the baseline-table components are set by determining
     *  the predominant script of the character data content.
     *  The writing-mode, whether horizontal or vertical, is used
     *  to select the appropriate set of baseline-tables and the
     *  dominant baseline is used to select the baseline-table
     *  that corresponds to that baseline. The baseline-table
     *  font-size component is set to the value of the font-size
     *  attribute on the element on which the dominant-baseline
     *  attribute occurs.The dominant-baseline, the baseline-table,
     *  and the baseline-table font-size remain the same as that
     *  of the parent text content element.The dominant-baseline
     *  and the baseline-table remain the same, but the baseline-table
     *  font-size is changed to the value of the font-size attribute
     *  on this element. This re-scales the baseline-table for
     *  the current font-size.The baseline-identifier for the
     *  dominant-baseline is set to be ideographic, the derived
     *  baseline-table is constructed using the ideographic baseline-table
     *  in the font, and the baseline-table font-size is changed
     *  to the value of the font-size attribute on this element.The
     *  baseline-identifier for the dominant-baseline is set to
     *  be alphabetic, the derived baseline-table is constructed
     *  using the alphabetic baseline-table in the font, and the
     *  baseline-table font-size is changed to the value of the
     *  font-size attribute on this element.The baseline-identifier
     *  for the dominant-baseline is set to be hanging, the derived
     *  baseline-table is constructed using the hanging baseline-table
     *  in the font, and the baseline-table font-size is changed
     *  to the value of the font-size attribute on this element.The
     *  baseline-identifier for the dominant-baseline is set to
     *  be mathematical, the derived baseline-table is constructed
     *  using the mathematical baseline-table in the font, and
     *  the baseline-table font-size is changed to the value of
     *  the font-size attribute on this element.The baseline-identifier
     *  for the dominant-baseline is set to be central. The derived
     *  baseline-table is constructed from the defined baselines
     *  in a baseline-table in the font. That font baseline-table
     *  is chosen using the following priority order of baseline-table
     *  names: ideographic, alphabetic, hanging, mathematical.
     *  The baseline-table font-size is changed to the value of
     *  the font-size attribute on this element.The baseline-identifier
     *  for the dominant-baseline is set to be middle. The derived
     *  baseline-table is constructed from the defined baselines
     *  in a baseline-table in the font. That font baseline-table
     *  is chosen using the following priority order of baseline-table
     *  names: alphabetic, ideographic, hanging, mathematical.
     *  The baseline-table font-size is changed to the value of
     *  the font-size attribute on this element.The baseline-identifier
     *  for the dominant-baseline is set to be text-after-edge.
     *  The derived baseline-table is constructed from the defined
     *  baselines in a baseline-table in the font. The choice
     *  of which font baseline-table to use from the baseline-tables
     *  in the font is browser dependent. The baseline-table font-size
     *  is changed to the value of the font-size attribute on
     *  this element.The baseline-identifier for the dominant-baseline
     *  is set to be text-before-edge. The derived baseline-table
     *  is constructed from the defined baselines in a baseline-table
     *  in the font. The choice of which baseline-table to use
     *  from the baseline-tables in the font is browser dependent.
     *  The baseline-table font-size is changed to the value of
     *  the font-size attribute on this element.This value uses
     *  the top of the em box as the baseline.BCD tables only
     *  load in the browser
     */
    dominantBaseline: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The fill attribute has two different meanings. For shapes and
     *  text it's a presentation attribute that defines the color
     *  (or any SVG paint servers like gradients or patterns)
     *  used to paint the element; for animation it defines the
     *  final state of the animation.You can use this attribute
     *  with the following SVG elements:For animation, these elements
     *  are using this attribute: <animate>, <animateColor>, <animateMotion>,
     *  <animateTransform>, and <set>.Warning: As of SVG2 <altGlyph>
     *  is deprecated and shouldn't be used.For <altGlyph>, fill
     *  is a presentation attribute that defines the color of
     *  the glyph.Note: As a presentation attribute fill can be
     *  used as a CSS property.For <animate>, fill defines the
     *  final state of the animation.Warning: As of SVG Animation
     *  2 <animateColor> is deprecated and shouldn't be used.
     *  Use <animate> instead.For <animateColor>, fill defines
     *  the final state of the animation.For <animateMotion>,
     *  fill defines the final state of the animation.For <animateTransform>,
     *  fill defines the final state of the animation.For <circle>,
     *  fill is a presentation attribute that defines the color
     *  of the circle.Note: As a presentation attribute fill can
     *  be used as a CSS property.For <ellipse>, fill is a presentation
     *  attribute that defines the color of the ellipse.Note:
     *  As a presentation attribute fill can be used as a CSS
     *  property.For <path>, fill is a presentation attribute
     *  that defines the color of the interior of the shape. (Interior
     *  is define by the fill-rule attribute)Note: As a presentation
     *  attribute fill can be used as a CSS property.For <polygon>,
     *  fill is a presentation attribute that defines the color
     *  of the interior of the shape. (Interior is define by the
     *  fill-rule attribute)Note: As a presentation attribute
     *  fill can be used as a CSS property.For <polyline>, fill
     *  is a presentation attribute that defines the color of
     *  the interior of the shape. (Interior is define by the
     *  fill-rule attribute)Note: As a presentation attribute
     *  fill can be used as a CSS property.For <rect>, fill is
     *  a presentation attribute that defines the color of the
     *  rectangle.Note: As a presentation attribute fill can be
     *  used as a CSS property.For <set>, fill defines the final
     *  state of the animation.For <text>, fill is a presentation
     *  attribute that defines what the color of the text.Note:
     *  As a presentation attribute fill can be used as a CSS
     *  property.For <textPath>, fill is a presentation attribute
     *  that defines the color of the text.Note: As a presentation
     *  attribute fill can be used as a CSS property.Warning:
     *  As of SVG2 <tref> is deprecated and shouldn't be used.For
     *  <tref>, fill is a presentation attribute that defines
     *  the color of the text.Note: As a presentation attribute
     *  fill can be used as a CSS property.For <tspan>, fill is
     *  a presentation attribute that defines the color of the
     *  text.Note: As a presentation attribute fill can be used
     *  as a CSS property.BCD tables only load in the browserNote:
     *  For information on using the context-fill (and context-stroke)
     *  values from HTML documents, see the documentation for
     *  the non-standard -moz-context-properties property.
     */
    fill: PropTypes.string,

    /**
     *  The fill-opacity attribute is a presentation attribute defining
     *  the opacity of the paint server (color, gradient, pattern,
     *  etc) applied to a shape.Note: As a presentation attribute
     *  fill-opacity can be used as a CSS property.You can use
     *  this attribute with the following SVG elements:Note: SVG2
     *  introduces percentage values for fill-opacity, however,
     *  it is not widely supported yet (See Browser compatibility
     *  below) as a consequence, it is best practices to set opacity
     *  with a value in the range [0-1].BCD tables only load in
     *  the browser
     */
    fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The fill-rule attribute is a presentation attribute defining
     *  the algorithm to use to determine the inside part of a
     *  shape.Note: As a presentation attribute, fill-rule can
     *  be used as a CSS property.You can use this attribute with
     *  the following SVG elements:The fill-rule attribute provides
     *  two options for how the inside (that is, the area to be
     *  filled) of a shape is determined:The value nonzero determines
     *  the "insideness" of a point in the shape by drawing a
     *  ray from that point to infinity in any direction, and
     *  then examining the places where a segment of the shape
     *  crosses the ray. Starting with a count of zero, add one
     *  each time a path segment crosses the ray from left to
     *  right and subtract one each time a path segment crosses
     *  the ray from right to left. After counting the crossings,
     *  if the result is zero then the point is outside the path.
     *  Otherwise, it is inside.The value evenodd determines the
     *  "insideness" of a point in the shape by drawing a ray
     *  from that point to infinity in any direction and counting
     *  the number of path segments from the given shape that
     *  the ray crosses. If this number is odd, the point is inside;
     *  if even, the point is outside.BCD tables only load in
     *  the browser
     */
    fillRule: PropTypes.oneOfType([
        PropTypes.oneOf(['"evenodd"|"inherit"|"nonzero"']),
        PropTypes.bool
     ]),

    /**
     *  The font-family attribute indicates which font family will be
     *  used to render the text, specified as a prioritized list
     *  of font family names and/or generic family names.Note:
     *  As a presentation attribute, font-family can be used as
     *  a CSS property. See the css font-family property for more
     *  information.You can use this attribute with the following
     *  SVG elements:where <family-name> = <string> | <custom-ident>+<generic-family>
     *  = serif | sans-serif | cursive | fantasy | monospaceFor
     *  a description of the values, please refer to the CSS font-family
     *  property.BCD tables only load in the browser
     */
    fontFamily: PropTypes.string,

    /**
     *  The font-size attribute refers to the size of the font from baseline
     *  to baseline when multiple lines of text are set solid
     *  in a multiline layout environment.Note: As a presentation
     *  attribute, font-size can be used as a CSS property. See
     *  the css font-size property for more information.You can
     *  use this attribute with the following SVG elements:For
     *  a description of the values, please refer to the CSS font-size
     *  property.BCD tables only load in the browser
     */
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The font-size-adjust attribute allows authors to specify an aspect
     *  value for an element that will preserve the x-height of
     *  the first choice font in a substitute font.Note: As a
     *  presentation attribute, font-size-adjust can be used as
     *  a CSS property. See the css font-size-adjust property
     *  for more information.You can use this attribute with the
     *  following SVG elements:Choose the size of the font based
     *  only on the font-size property.Choose the size of the
     *  font so that its lowercase letters (as determined by the
     *  x-height of the font) are the specified number times the
     *  font-size.The number specified should generally be the
     *  aspect ratio (ratio of x-height to font size) of the first
     *  choice font-family. This means that the first-choice font,
     *  when available, will appear the same size in browsers,
     *  whether or not they support font-size-adjust.0 yields
     *  text of zero height (hidden text).BCD tables only load
     *  in the browser
     */
    fontSizeAdjust: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The font-stretch attribute indicates the desired amount of condensing
     *  or expansion in the glyphs used to render the text.Note:
     *  As a presentation attribute, font-stretch can be used
     *  as a CSS property. See the css font-stretch property for
     *  more information.You can use this attribute with the following
     *  SVG elements:where <font-stretch-absolute> = normal |
     *  ultra-condensed | extra-condensed | condensed | semi-condensed
     *  | semi-expanded | expanded | extra-expanded | ultra-expanded
     *  | <percentage>BCD tables only load in the browser
     */
    fontStretch: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The font-style attribute specifies whether the text is to be
     *  rendered using a normal, italic, or oblique face.Note:
     *  As a presentation attribute, font-style can be used as
     *  a CSS property. See the css font-style property for more
     *  information.You can use this attribute with the following
     *  SVG elements:For a description of the values, please refer
     *  to the CSS font-style property.BCD tables only load in
     *  the browser
     */
    fontStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The font-variant attribute indicates whether the text is to be
     *  rendered using variations of the font's glyphs.Note: As
     *  a presentation attribute, font-variant can be used as
     *  a CSS property. See the css font-variant property for
     *  more information.You can use this attribute with the following
     *  SVG elements:
          normal | none | [
          <common-lig-values>
     *  ||
          <discretionary-lig-values> ||
          <historical-lig-values>
     *  ||
          <contextual-alt-values> ||
          stylistic(
     *  <feature-value-name> ) ||
          historical-forms ||

     *           styleset( <feature-value-name># ) ||
       
     *    character-variant( <feature-value-name># ) ||
     
     *      swash( <feature-value-name> ) ||
          ornaments(
     *  <feature-value-name> ) ||
          annotation( <feature-value-name>
     *  ) || [
          small-caps | all-small-caps |
      
     *     petite-caps | all-petite-caps |
          unicase |
     *  titling-caps ] ||
          <numeric-figure-values> ||

     *           <numeric-spacing-values> ||
          <numeric-fraction-values>
     *  || ordinal ||
          slashed-zero ||
          <east-asian-variant-values>
     *  ||
          <east-asian-width-values> || ruby ]
    
     *     For a description of the values, please refer to the
     *  CSS font-variant property.BCD tables only load in the
     *  browser
     */
    fontVariant: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The font-weight attribute refers to the boldness or lightness
     *  of the glyphs used to render the text, relative to other
     *  fonts in the same font family.Note: As a presentation
     *  attribute, font-weight can be used as a CSS property.
     *  See the css font-weight property for more information.You
     *  can use this attribute with the following SVG elements:For
     *  a description of the values, please refer to the CSS font-weight
     *  property.BCD tables only load in the browser
     */
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The glyph-orientation-horizontal
     *  attribute affects the amount that the current text position
     *  advances as each glyph is rendered.When the reference
     *  orientation direction is horizontal and the glyph-orientation-horizontal
     *  results in an orientation angle that is a multiple of
     *  180 degrees, then the current text position is incremented
     *  according to the horizontal metrics of the glyph. Otherwise,
     *  if the value of this attribute is not a multiple of 180
     *  degrees, then the current text position is incremented
     *  according to the vertical metrics of the glyph.This attribute
     *  is applied only to text written in a horizontal writing-mode.Note:
     *  As a presentation attribute, glyph-orientation-horizontal
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:
      The value of the
     *  angle is restricted to 0, 90, 180, and 270 degrees. If
     *  another angle is specified, it is rounded to the closest
     *  of the permitted values.
      A value of 0deg indicates
     *  that all glyphs are set with the top of the glyphs oriented
     *  towards the reference orientation. A value of 90deg indicates
     *  an orientation of 90 degrees clockwise from the reference
     *  orientation.
    BCD tables only load in the browser
     */
    glyphOrientationHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The glyph-orientation-vertical
     *  attribute affects the amount that hte current text position
     *  advances as each glyph is rendered.When the inline-progression-direction
     *  is vertical and the glyph-orientation-vertical results
     *  in an orientation angle that is a multiple of 180 degrees,
     *  then the current text position is incremented according
     *  to the vertical metrics of the glyph. Otherwise, if the
     *  angle is not a multiple of 180 degrees, then the current
     *  text position is incremented according to the horizontal
     *  metrics of the glyph.This attribute is applied only to
     *  text written in a vertical writing-mode.Note: As a presentation
     *  attribute, glyph-orientation-vertical can be used as a
     *  CSS property.You can use this attribute with the following
     *  SVG elements:Fullwidth ideographic and fullwidth Latin
     *  text will be set with a glyph orientation of 0 degrees.
     *  Ideographic punctuation and other ideographic characters
     *  having alternate horizontal and vertical forms will use
     *  the vertical form of the glyph. Text which is not fullwidth
     *  will be set with a glyph orientation of 90 degrees.This
     *  reorientation rule applies only to the first-level non-ideographic
     *  text. All further embedding of writing modes or bidirectional
     *  processing will be based on the first-level rotation.Note:
     *  Text set in this "rotated" manner may contain ligatures
     *  or other glyph combining and reordering common to the
     *  language and script. (This presentation form does not
     *  disable auto-ligature formation or similar context-driven
     *  variations.)The determination of which characters should
     *  be auto-rotated may vary across user agents. The determination
     *  is based on a complex interaction between country, language,
     *  script, character properties, font, and character context.

     *       The value of the angle is restricted to 0, 90, 180,
     *  and 270 degrees. If another angle is specified, it is
     *  rounded to the closest of the permitted values.
     
     *  A value of 0deg indicates that all glyphs are set with
     *  the top of the glyphs oriented towards the reference orientation.
     *  A value of 90deg indicates an orientation of 90 degrees
     *  clockwise from the reference orientation.
    BCD tables
     *  only load in the browser
     */
    glyphOrientationVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The kerning attribute indicates
     *  whether the spacing between glyphs should be adjusted
     *  based on kerning tables that are included in the relevant
     *  font (i.e., enable auto-kerning) or instead disable auto-kerning
     *  and set the spacing between them to a specific length
     *  (typically, zero).Note: As a presentation attribute kerning
     *  can be used as a CSS property. In CSS the property is
     *  called font-kerning, though.You can use this attribute
     *  with the following SVG elements:This value indicates that
     *  the spacing between glyphs is adjusted based on kerning
     *  tables that are included in the font that will be used.If a
     *  length is provided, then auto-kerning is disabled. Instead,
     *  inter-character spacing is set to the given length.If
     *  a length is provided without a unit identifier (e.g.,
     *  an unqualified number such as 128), the length is processed
     *  as a width value in the current user coordinate system.
     *  If a unit identifier (e.g., 0.25em or 1%) is provided,
     *  then the length is converted into a corresponding value
     *  in the current user coordinate system.The most common
     *  scenario, other than auto, is to set kerning to a value
     *  of 0 so that auto-kerning is disabled.The given length
     *  is added to the inter-character spacing value specified
     *  by the letter-spacing attribute.BCD tables only load in
     *  the browser
     */
    kerning: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The lengthAdjust attribute controls how the text is stretched
     *  into the length defined by the textLength attribute.You
     *  can use this attribute with the following SVG elements:BCD
     *  tables only load in the browser
     */
    lengthAdjust: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The letter-spacing attribute controls spacing between text characters,
     *  in addition to any spacing from the kerning attribute.If
     *  the attribute value is a unitless number (like 128), the
     *  browser processes it as a <length> in the current user
     *  coordinate system.If the attribute value has a unit identifier,
     *  such as .25em or 1%, then the browser converts the <length>
     *  into its corresponding value in the current user coordinate
     *  system.Note: As a presentation attribute, letter-spacing
     *  can be used as a CSS property. See the css letter-spacing
     *  property for more information.You can use this attribute
     *  with the following SVG elements:For a description of the
     *  values, please refer to the CSS letter-spacing property.BCD
     *  tables only load in the browser
     */
    letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The mask attribute is a presentation attribute mainly used to
     *  bind a given <mask> element with the element the attribute
     *  belongs to.Note: As a presentation attribute mask can
     *  be used as a CSS property.You can use this attribute with
     *  the following SVG elements:Since SVG2, the mask attribute
     *  is defined as a css property and is a shorthand for many
     *  other properties: mask-image, mask-mode, mask-repeat,
     *  mask-position, mask-clip, mask-origin, mask-size, and
     *  mask-composite.BCD tables only load in the browser
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
     *  to this range.BCD tables only load in the browser
     */
    opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The overflow attribute sets what to do when an element's content
     *  is too big to fit in its block formatting context. This
     *  feature is not widely implemented yet.This attribute has
     *  the same parameter values and meaning as the css overflow
     *  property, however, the following additional points apply:Note:
     *  Although the initial value for overflow is auto, it is
     *  overwritten in the User Agent style sheet for the <svg>
     *  element when it is not the root element of a stand-alone
     *  document, the <pattern> element, and the <marker> element
     *  to be hidden by default.Note: As a presentation attribute,
     *  overflow can be used as a CSS property. See the css opacity
     *  property for more information.You can use this attribute
     *  with the following SVG elements:For a description of the
     *  values, please see the css overflow property.BCD tables
     *  only load in the browser
     */
    overflow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The paint-order attribute specifies the order that the fill,
     *  stroke, and markers of a given shape or text element are
     *  painted.Note: As a presentation attribute, paint-order
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:This value indicates that
     *  the fill will be painted first, then the stroke, and finally
     *  the markers.The order of these three keywords indicates
     *  the order in which the painting happens, from left to
     *  right. If any of the three painting components is omitted,
     *  they will be painted in their default order after the
     *  specified components. For example, using stroke is equivalent
     *  to stroke fill markers.The example would be rendered as
     *  follows:
  
The stroke under effect could be achieved
     *  via the following CSS property:BCD tables only load in
     *  the browser
     */
    paintOrder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pointer-events attribute is a presentation attribute that
     *  allows defining whether or when an element may be the
     *  target of a mouse event.Note: As a presentation attribute
     *  pointer-events can be used as a CSS property.You can use
     *  this attribute with the following SVG elements:For a detailed
     *  explanation of each possible value, have a look at the
     *  CSS  pointer-events documentation.BCD tables only load
     *  in the browser
     */
    pointerEvents: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The requiredFeatures attribute
     *  takes a list of feature strings, with the individual strings
     *  separated by white space. It determines whether or not
     *  all of the named features are supported by the browser;
     *  if all of them are supported, the attribute evaluates
     *  to true end the element is rendered; otherwise, the attribute
     *  evaluates to false and the current element and its children
     *  are skipped and thus will not be rendered. This provides
     *  a way to design SVG that gracefully falls back when features
     *  aren't available.If the attribute is not present, then
     *  its implicit evaluated value is true. If a null string
     *  or empty string value is given to attribute requiredFeatures,
     *  the attribute is evaluate to false.requiredFeatures is
     *  often used in conjunction with the <switch> element. If
     *  requiredFeatures is used in other situations, it represents
     *  a simple switch on the given element whether to render
     *  the element or not.To detect availability of an SVG feature
     *  from script, there is the (also deprecated) DOMImplementation.hasFeature()
     *  method.You can use this attribute with the following SVG
     *  elements:This is a list of feature strings, separated
     *  using white space. Determines whether all of the named
     *  features are supported by the browser. See Feature strings
     *  below for a list of allowed values.The following are the
     *  feature strings for the requiredFeatures attribute. These
     *  same feature strings apply to the hasFeature method call
     *  that is part of the SVG DOM's support for the DOMImplementation
     *  interface. In some cases the feature strings map directly
     *  to a set of attributes, properties or elements, in others
     *  they represent some functionality of the browser. Note
     *  that the format and naming for feature strings changed
     *  from SVG 1.0 to SVG 1.1. The SVG 1.0 feature strings are
     *  not listed here but can be found in the SVG Specification.
     *  Some browser support SVG 1.0 Feature strings for compatibility
     *  reasons. However, the SVG 1.0 feature strings are considered
     *  deprecated.At least one of the following feature is supported:At
     *  least one of the following feature is supported:The browser
     *  supports all the following features:The browser supports
     *  all of the DOM interfaces and methods that correspond
     *  to the language features for http://www.w3.org/TR/SVG11/feature#SVG-static.The
     *  browser supports all of the language features from http://www.w3.org/TR/SVG11/feature#SVG-static
     *  plus the feature http://www.w3.org/TR/SVG11/feature#Animation.The
     *  browser supports all of the DOM interfaces and methods
     *  that correspond to the language features for http://www.w3.org/TR/SVG11/feature#SVG-animation.The
     *  browser supports all of the language features from http://www.w3.org/TR/SVG11/feature#SVG-animation
     *  plus the following features:The browser supports all of
     *  the DOM interfaces and methods that correspond to the
     *  language features for http://www.w3.org/TR/SVG11/feature#SVG-dynamic.The
     *  browser supports the id, xml:base, xml:lang and xml:space
     *  attributesThe browser supports <svg>, <g>, <defs>, <desc>,
     *  <title>, <metadata>, <symbol> and <use> elements.The browser
     *  supports <svg>, <g>, <defs>, <desc>, <title>, <metadata>
     *  and <use> elements.The browser supports the enable-background
     *  attributeThe browser supports the <switch> element, and
     *  the requiredFeatures, requiredExtensions, systemLanguage
     *  attributesThe browser supports the <image> element.The
     *  browser supports the <style> element.The browser supports
     *  the clip and overflow attributes.The browser supports
     *  the <rect>, <circle>, <line>, <polyline>, <polygon>, <ellipse>
     *  and <path> elements.The browser supports the <text>, <tspan>,
     *  <tref>, <textPath>, <altGlyph>, <altGlyphDef>, <altGlyphItem>
     *  and <glyphRef> elements.The browser supports the <text>
     *  elementThe browser supports the color, fill, fill-rule,
     *  stroke, stroke-dasharray, stroke-dashoffset, stroke-linecap,
     *  stroke-linejoin, stroke-miterlimit, stroke-width, color-interpolation
     *  and color-rendering attributesThe browser supports the
     *  color, fill, fill-rule, stroke, stroke-dasharray, stroke-dashoffset,
     *  stroke-linecap, stroke-linejoin, stroke-miterlimit, stroke-width
     *  and color-rendering attributesThe browser supports the
     *  opacity, stroke-opacity and fill-opacity attributesThe
     *  browser supports the display, image-rendering, pointer-events,
     *  shape-rendering, text-rendering and visibility attributesThe
     *  browser supports the display and visibility attributesThe
     *  browser supports the <marker> elementThe browser supports
     *  the <linearGradient>, <radialGradient> and <stop> elementsThe
     *  browser supports the <pattern> elementThe browser supports
     *  the <clipPath> element and the clip-path, clip-rule attributesThe
     *  browser supports the <clipPath> element and the clip-path
     *  attributeThe browser supports the <mask> elementThe browser
     *  supports the <filter>, <feBlend>, <feColorMatrix>, <feComponentTransfer>,
     *  <feComposite>, <feConvolveMatrix>, <feDiffuseLighting>,
     *  <feDisplacementMap>, <feFlood>, <feGaussianBlur>, <feImage>,
     *  <feMerge>, <feMergeNode>, <feMorphology>, <feOffset>,
     *  <feSpecularLighting>, <feTile>, <feDistantLight>, <fePointLight>,
     *  <feSpotLight>, <feFuncR>, <feFuncG>, <feFuncB> and <feFuncA>
     *  elementsThe browser supports the <filter>, <feBlend>,
     *  <feColorMatrix>, <feComponentTransfer>, <feComposite>,
     *  <feFlood>, <feGaussianBlur>, <feImage>, <feMerge>, <feMergeNode>,
     *  <feOffset>, <feTile>, <feFuncR>, <feFuncG>, <feFuncB>
     *  and <feFuncA> elementsThe browser supports the onunload,
     *  onabort, onerror, onresize, onscroll and onzoom attributesThe
     *  browser supports the onfocusin, onfocusout, onactivate,
     *  onclick, onmousedown, onmouseup, onmouseover, onmousemove,
     *  onmouseout and onload attributesThe browser supports the
     *  onbegin, onend, onrepeat and onload attributesThe browser
     *  supports the <cursor> elementThe browser supports the
     *  <a> elementThe browser supports the xlink:type, xlink:href,
     *  xlink:role, xlink:arcrole, xlink:title, xlink:show and
     *  xlink:actuate attributesThe browser supports the <view>
     *  elementThe browser supports the <script> elementThe browser
     *  supports the <animate>, <set>, <animateMotion>, <animateTransform>,
     *  <animateColor> and <mpath> elementsThe browser supports
     *  the <font>, <font-face>, <glyph>, <missing-glyph>, <hkern>,
     *  <vkern>, <font-face-src>, <font-face-uri>, <font-face-format>
     *  and <font-face-name> elementsThe browser supports the
     *  <font>, <font-face>, <glyph>, <missing-glyph>, <hkern>,
     *  <font-face-src> and <font-face-name> elementsThe browser
     *  supports the <foreignObject> elementSee also requiredFeatures.svgBCD
     *  tables only load in the browser
     */
    requiredFeatures: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke attribute is a presentation attribute defining the
     *  color (or any SVG paint servers like gradients or patterns)
     *  used to paint the outline of the shape;Note: As a presentation
     *  attribute stroke can be used as a CSS property.You can
     *  use this attribute with the following SVG elements:BCD
     *  tables only load in the browserNote: For information on
     *  using the context-stroke (and context-fill) values from
     *  HTML documents, see the documentation for the non-standard
     *  -moz-context-properties property.
     */
    stroke: PropTypes.string,

    /**
     *  The stroke-dasharray attribute is a presentation attribute defining
     *  the pattern of dashes and gaps used to paint the outline
     *  of the shape;Note: As a presentation attribute, stroke-dasharray
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:A list of comma and/or
     *  white space separated <length>s and <percentage>s that
     *  specify the lengths of alternating dashes and gaps.If
     *  an odd number of values is provided, then the list of
     *  values is repeated to yield an even number of values.
     *  Thus, 5,3,2 is equivalent to 5,3,2,5,3,2.BCD tables only
     *  load in the browser
     */
    strokeDasharray: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke-dashoffset attribute is a presentation attribute defining
     *  an offset on the rendering of the associated dash array.Note:
     *  As a presentation attribute stroke-dashoffset can be used
     *  as a CSS property.You can use this attribute with the
     *  following SVG elements:The offset is usually expressed
     *  in user units resolved against the pathLength but if a
     *  <percentage> is used, the value is resolved as a percentage
     *  of the current viewport.BCD tables only load in the browser
     * 
     */
    strokeDashoffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke-linecap attribute is a presentation attribute defining
     *  the shape to be used at the end of open subpaths when
     *  they are stroked.Note: As a presentation attribute stroke-linecap
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:The butt value indicates
     *  that the stroke for each subpath does not extend beyond
     *  its two endpoints. On a zero length subpath, the path
     *  will not be rendered at all.The round value indicates
     *  that at the end of each subpath the stroke will be extended
     *  by a half circle with a diameter equal to the stroke width.
     *  On a zero length subpath, the stroke consists of a full
     *  circle centered at the subpath's point.The square value
     *  indicates that at the end of each subpath the stroke will
     *  be extended by a rectangle with a width equal to half
     *  the width of the stroke and a height equal to the width
     *  of the stroke. On a zero length subpath, the stroke consists
     *  of a square with its width equal to the stroke width,
     *  centered at the subpath's point.BCD tables only load in
     *  the browser
     */
    strokeLinecap: PropTypes.oneOfType([
        PropTypes.oneOf(['"butt"|"inherit"|"round"|"square"']),
        PropTypes.bool
     ]),

    /**
     *  The stroke-linejoin attribute is a presentation attribute defining
     *  the shape to be used at the corners of paths when they
     *  are stroked.Note: As a presentation attribute stroke-linejoin
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:Note: The arcs value as
     *  been introduced in SVG2 and it isn't widely supported
     *  yet, see Browser compatibility below for details.The arcs
     *  value indicates that an arcs corner is to be used to join
     *  path segments. The arcs shape is formed by extending the
     *  outer edges of the stroke at the join point with arcs
     *  that have the same curvature as the outer edges at the
     *  join point.The bevel value indicates that a bevelled corner
     *  is to be used to join path segments.The miter value indicates
     *  that a sharp corner is to be used to join path segments.
     *  The corner is formed by extending the outer edges of the
     *  stroke at the tangents of the path segments until they
     *  intersect.Note: If the stroke-miterlimit is exceeded,
     *  the line join falls back to bevel.Note: the miter-clip
     *  value as been introduced in SVG2 and it isn't widely supported
     *  yet, see Browser compatibility below for details.The miter-clip
     *  value indicates that a sharp corner is to be used to join
     *  path segments. The corner is formed by extending the outer
     *  edges of the stroke at the tangents of the path segments
     *  until they intersect.If the stroke-miterlimit is exceeded,
     *  the miter is clipped at a distance equal to half the stroke-miterlimit
     *  value multiplied by the stroke width from the intersection
     *  of the path segments. This provides a better rendering
     *  than miter on very sharp join or in case of an animation.The
     *  round value indicates that a round corner is to be used
     *  to join path segments.BCD tables only load in the browser
     * 
     */
    strokeLinejoin: PropTypes.oneOfType([
        PropTypes.oneOf(['"bevel"|"inherit"|"miter"|"round"']),
        PropTypes.bool
     ]),

    /**
     *  The stroke-miterlimit attribute is a presentation attribute defining
     *  a limit on the ratio of the miter length to the stroke-width
     *  used to draw a miter join. When the limit is exceeded,
     *  the join is converted from a miter to a bevel.Note: As
     *  a presentation attribute stroke-miterlimit can be used
     *  as a CSS property.You can use this attribute with the
     *  following SVG elements:When two line segments meet at
     *  a sharp angle and miter joins have been specified for
     *  stroke-linejoin, it is possible for the miter to extend
     *  far beyond the thickness of the line stroking the path.
     *  The stroke-miterlimit ratio is used to define when the
     *  limit is exceeded, if so the join is converted from a
     *  miter to a bevel.The ratio of miter length (distance between
     *  the outer tip and the inner corner of the miter) to stroke-width
     *  is directly related to the angle (theta) between the segments
     *  in user space by the formula:
  
    
      stroke-miterlimit

     *       =
      
        
          miterLength
        

     *         
          stroke-width
        
      
      =

     *       
        
          1
        
        
        
     *   
            sin
            
              (
      
     *         
                
                  θ
        
     *         
                
                  2
        
     *         
              
              )
            
 
     *          
        
      
    
  
For example, a miter
     *  limit of 1.414 converts miters to bevels for theta less
     *  than 90 degrees, a limit of 4.0 converts them for theta
     *  less than approximately 29 degrees, and a limit of 10.0
     *  converts them for theta less than approximately 11.5 degrees.The
     *  value of stroke-miterlimit must be greater than or equal
     *  to 1.BCD tables only load in the browser
     */
    strokeMiterlimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke-opacity attribute is a presentation attribute defining
     *  the opacity of the paint server (color, gradient, pattern,
     *  etc) applied to the stroke of a shape.Note: As a presentation
     *  attribute stroke-opacity can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:Note:
     *  SVG2 introduces percentage values for stroke-opacity,
     *  however, it is not widely supported yet (See Browser compatibility
     *  below) as a consequence, it is best practices to set opacity
     *  with a value in the range [0-1].It's important to know
     *  that the stroke partially covers the fill of a shape,
     *  so a stroke with an opacity different than 1 will partially
     *  show the fill underneath. To avoid this effect, it is
     *  possible to apply a global opacity with the opacity attribute
     *  or to put the stroke behind the fill with the paint-order
     *  attribute.BCD tables only load in the browser
     */
    strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke-width attribute is a presentation attribute defining
     *  the width of the stroke to be applied to the shape.You
     *  can use this attribute with the following SVG elements:Note:
     *  A percentage value is always computed as a percentage
     *  of the normalized viewBox diagonal length.BCD tables only
     *  load in the browser
     */
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The systemLanguage attribute represents a list of supported language
     *  tags. This list is matched against the language defined
     *  in the user preferences.You can use this attribute with
     *  the following SVG elements:The value is a set of comma-separated
     *  tokens, each of which must be a language tag, as defined
     *  in RFC 5646: Tags for Identifying Languages (also known
     *  as BCP 47).systemLanguage is often used in conjunction
     *  with the <switch> element. If the attribute is used in
     *  other situations, then it represents a simple switch on
     *  the given element whether to render the element or not.Note:
     *  If several alternative language objects are enclosed in
     *  a <switch> and none of them matches, this may lead to
     *  situations where no content is displayed. It is thus recommended
     *  to include a "catch-all" choice at the end of such a <switch>
     *  which is acceptable in all cases.The attribute evaluates
     *  to "true" if one of the language tags indicated by user
     *  preferences is a case-insensitive match or prefix (followed
     *  by a "-") of one of the language tags given in the value
     *  of this parameter. Otherwise it evaluates to "false".Note:
     *  The prefix matching rule does not imply that if a user
     *  understands a language with a certain tag, that the user
     *  will also understand all languages with the tag as prefix.If
     *  the attribute is not present, then it implicitly evaluates
     *  to "true". If a null string or empty string value is given,
     *  the attribute evaluates to "false".The prefix rule allows
     *  the use of prefix tags if this is the case.Multiple languages
     *  may be listed for content that is intended for multiple
     *  audiences. For example, content that is presented simultaneously
     *  in the original Maori and English versions, would call
     *  for:However, just because multiple languages are present
     *  within the object on which the systemLanguage test attribute
     *  is placed, this does not mean that it is intended for
     *  multiple linguistic audiences. An example would be a beginner's
     *  language primer, such as "A First Lesson in Latin," which
     *  is clearly intended to be used by an English-literate
     *  audience. In this case, the attribute should only include
     *  en.BCD tables only load in the browser
     */
    systemLanguage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The text-anchor attribute is used to align (start-, middle- or
     *  end-alignment) a string of pre-formatted text or auto-wrapped
     *  text where the wrapping area is determined from the inline-size
     *  property relative to a given point.This attribute is not
     *  applicable to other types of auto-wrapped text. For those
     *  cases you should use text-align. For multi-line text,
     *  the alignment takes place for each line.The text-anchor
     *  attribute is applied to each individual text chunk within
     *  a given <text> element. Each text chunk has an initial
     *  current text position, which represents the point in the
     *  user coordinate system resulting from (depending on context)
     *  application of the x and y attributes on the <text> element,
     *  any x or y attribute values on a <tspan>, <tref> or <altGlyph>
     *  element assigned explicitly to the first rendered character
     *  in a text chunk, or determination of the initial current
     *  text position for a <textPath> element.Note: As a presentation
     *  attribute, text-anchor can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:The
     *  rendered characters are aligned such that the start of
     *  the text string is at the initial current text position.
     *  For an element with a direction property value of ltr
     *  (typical for most European languages), the left side of
     *  the text is rendered at the initial text position. For
     *  an element with a direction property value of rtl (typical
     *  for Arabic and Hebrew), the right side of the text is
     *  rendered at the initial text position. For an element
     *  with a vertical primary text direction (often typical
     *  for Asian text), the top side of the text is rendered
     *  at the initial text position.The rendered characters are
     *  aligned such that the middle of the text string is at
     *  the current text position. (For text on a path, conceptually
     *  the text string is first laid out in a straight line.
     *  The midpoint between the start of the text string and
     *  the end of the text string is determined. Then, the text
     *  string is mapped onto the path with this midpoint placed
     *  at the current text position.)The rendered characters
     *  are shifted such that the end of the resulting rendered
     *  text (final current text position before applying the
     *  text-anchor property) is at the initial current text position.
     *  For an element with a direction property value of ltr
     *  (typical for most European languages), the right side
     *  of the text is rendered at the initial text position.
     *  For an element with a direction property value of rtl
     *  (typical for Arabic and Hebrew), the left side of the
     *  text is rendered at the initial text position. For an
     *  element with a vertical primary text direction (often
     *  typical for Asian text), the bottom of the text is rendered
     *  at the initial text position.BCD tables only load in the
     *  browser
     */
    textAnchor: PropTypes.string,

    /**
     *  The text-decoration attribute defines whether text is decorated
     *  with an underline, overline and/or strike-through. It
     *  is a shorthand for the text-decoration-line and text-decoration-style
     *  properties.The fill and stroke of the text decoration
     *  are given by the fill and stroke of the text at the point
     *  where the text decoration is declared.The paint order
     *  of the text decoration, i.e. the fill and stroke, is determined
     *  by the value of the paint-order attribute at the point
     *  where the text decoration is declared.Note: As a presentation
     *  attribute, text-decoration can be used as a CSS property.
     *  See the css text-decoration property for more information.You
     *  can use this attribute with the following SVG elements:For
     *  a description of the values, please refer to the CSS text-decoration
     *  property.BCD tables only load in the browser
     */
    textDecoration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The text-rendering attribute provides hints to the renderer about
     *  what tradeoffs to make when rendering text.Note: As a
     *  presentation attribute, text-rendering can be used as
     *  a CSS property. See the css text-rendering property for
     *  more information.You can use this attribute with the following
     *  SVG elements:This value indicates that the user agent
     *  shall make appropriate tradeoffs to balance speed, legibility
     *  and geometric precision, but with legibility given more
     *  importance than speed and geometric precision.This value
     *  indicates that the user agent shall emphasize rendering
     *  speed over legibility and geometric precision. This option
     *  will sometimes cause some user agents to turn off text
     *  anti-aliasing.This value indicates that the user agent
     *  shall emphasize legibility over rendering speed and geometric
     *  precision. The user agent will often choose whether to
     *  apply anti-aliasing techniques, built-in font hinting
     *  or both to produce the most legible text.This value indicates
     *  that the user agent shall emphasize geometric precision
     *  over legibility and rendering speed. This option will
     *  usually cause the user agent to suspend the use of hinting
     *  so that glyph outlines are drawn with comparable geometric
     *  precision to the rendering of path data.BCD tables only
     *  load in the browser
     */
    textRendering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The textLength attribute, available on SVG <text> and <tspan>
     *  elements, lets you specify the width of the space into
     *  which the text will draw. The user agent will ensure that
     *  the text does not extend farther than that distance, using
     *  the method or methods specified by the lengthAdjust attribute.
     *  By default, only the spacing between characters is adjusted,
     *  but the glyph size can also be adjusted if you change
     *  lengthAdjust.By using textLength, you can ensure that
     *  your SVG text displays at the same width regardless of
     *  conditions including web fonts failing to load (or not
     *  having loaded yet).You can use this attribute with the
     *  following SVG elements:This value specifies the width
     *  of the space the text will be adjusted to occupy as absolute
     *  length or percentage.A numeric value outlines a length
     *  referring to the units of the current coordinate system.Let's
     *  create a simple example that presents text you can resize
     *  using an <input> element of type "range".Let's start with
     *  the SVG. It's pretty basic, with a 1000-by-300 pixel space
     *  mapped into a 10 centimeter by 3 centimeter box.First,
     *  a <rect> element is used to create and stroke a rectangle
     *  to contain the text. Then <text> is used to create the
     *  text element itself, with an id of "hello".The HTML is
     *  also simple, with only two displayed elements contained
     *  inside a grouping <div>:The <input> element, of type "range",
     *  is used to create the slider control the user will manipulate
     *  to change the width of the text. A <span> element of ID
     *  "widthDisplay" is provided to display the current width
     *  value.Finally, let's have a look at the JavaScript code.
     *  It starts by stashing references to the elements it will
     *  need to access, using Document.getElementById():After
     *  fetching the element references, an EventListener is established
     *  by calling addEventListener() on the slider control, to
     *  receive any input events which occur. These events will
     *  be sent any time the slider's value changes, even if the
     *  user hasn't stopped moving it, so we can responsively
     *  adjust the text width.When an "input" event occurs, we
     *  call newValueSpecifiedUnits() to set the value of textLength
     *  to the slider's new value, using the SVGLength interface's
     *  SVG_LENGTHTYPE_PX unit type to indicate that the value
     *  represents pixels. Note that we have to dive into textLength
     *  to get its baseVal property; textLength is stored as an
     *  SVGLength object, so we can't treat it like a plain number.After
     *  updating the text width, the contents of the widthDisplay
     *  box are updated with the new value as well, and we're
     *  finished.Here's what the example looks like. Try dragging
     *  the slider around to get a feel for what it does.BCD tables
     *  only load in the browser
     */
    textLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The unicode-bidi attribute specifies how the accumulation of
     *  the background image is managed.Note: As a presentation
     *  attribute, unicode-bidi can be used as a CSS property.
     *  See the CSS unicode-bidi property for more information.You
     *  can use this attribute with the following SVG elements:For
     *  a description of the values, please refer to the CSS unicode-bidi
     *  property.BCD tables only load in the browser
     */
    unicodeBidi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The vector-effect property specifies the vector effect to use
     *  when drawing an object. Vector effects are applied before
     *  any of the other compositing operations, i.e. filters,
     *  masks and clips.Note: As a presentation attribute, vector-effect
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:This value specifies that
     *  no vector effect shall be applied, i.e. the default rendering
     *  behavior is used which is to first fill the geometry of
     *  a shape with a specified paint, then stroke the outline
     *  with a specified paint.This value modifies the way an
     *  object is stroked. Normally stroking involves calculating
     *  stroke outline of the shape's path in current user coordinate
     *  system and filling that outline with the stroke paint
     *  (color or gradient). The resulting visual effect of this
     *  value is that the stroke width is not dependant on the
     *  transformations of the element (including non-uniform
     *  scaling and shear transformations) and zoom level.This
     *  value specifies a special user coordinate system used
     *  by the element and its descendants. The scale of that
     *  user coordinate system does not change in spite of any
     *  transformation changes from a host coordinate space. However,
     *  it does not specify the suppression of rotation and skew.
     *  Also, it does not specify the origin of the user coordinate
     *  system. Since this value suppresses scaling of the user
     *  coordinate system, it also has the characteristics of
     *  non-scaling-stroke.This value specifies a special user
     *  coordinate system used by the element and its descendants.
     *  The rotation and skew of that user coordinate system is
     *  suppressed in spite of any transformation changes from
     *  a host coordinate space. However, it does not specify
     *  the suppression of scaling. Also, it does not specify
     *  the origin of user coordinate system.This value specifies
     *  a special user coordinate system used by the element and
     *  its descendants. The position of user coordinate system
     *  is fixed in spite of any transformation changes from a
     *  host coordinate space. However, it does not specify the
     *  suppression of rotation, skew and scaling. When this vector
     *  effect and the transform property are defined at the same
     *  time, that property is consumed for this effect.No compatibility
     *  data found for svg.attributes.vector-effect.Check for
     *  problems with this page or contribute missing data to
     *  mdn/browser-compat-data.
     */
    vectorEffect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The visibility attribute lets you control the visibility of graphical
     *  elements. With a value of hidden or collapse the current
     *  graphics element is invisible.Note: If the visibility
     *  attribute is set to hidden on a text element, then the
     *  text is invisible but still takes up space in text layout
     *  calculations.Depending on the value of attribute pointer-events,
     *  graphics elements which have their visibility attribute
     *  set to hidden still might receive events.Note: As a presentation
     *  attribute, visibility can be used as a CSS property. See
     *  the css visibility property for more information.You can
     *  use this attribute with the following SVG elements:This
     *  value indicates that the element will be painted.This
     *  value indicates that the element will not be painted.
     *  Though it is still part of the rendering tree, i.e. it
     *  may receive pointer events depending on the pointer-events
     *  attribute, may receive focus depending on the tabindex
     *  attribute, contributes to bounding box calculations and
     *  clipping paths, and does affect text layout.This value
     *  is equal to hidden.The following example toggles the CSS
     *  visibility of the SVG image path.BCD tables only load
     *  in the browser
     */
    visibility: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The word-spacing attribute specifies spacing behavior between
     *  words.If a <length> is provided without a unit identifier
     *  (e.g. an unqualified number such as 128), the browser
     *  processes the <length> as a width value in the current
     *  user coordinate system.If a <length> is provided with
     *  one of the unit identifiers (e.g. .25em or 1%), then the
     *  browser converts the <length> into a corresponding value
     *  in the current user coordinate system.Note: As a presentation
     *  attribute, word-spacing can be used as a CSS property.
     *  See the css word-spacing property for more information.You
     *  can use this attribute with the following SVG elements:For
     *  a description of the values, please refer to the CSS letter-spacing
     *  property.BCD tables only load in the browser
     */
    wordSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The writing-mode attribute specifies whether the initial inline-progression-direction
     *  for a <text> element shall be left-to-right, right-to-left,
     *  or top-to-bottom. The writing-mode attribute applies only
     *  to <text> elements; the attribute is ignored for <tspan>,
     *  <tref>, <altGlyph> and <textPath> sub-elements. (Note
     *  that the inline-progression-direction can change within
     *  a <text> element due to the Unicode bidirectional algorithm
     *  and properties direction and unicode-bidi.)Note: As a
     *  presentation attribute, writing-mode can be used as a
     *  CSS property. See the CSS writing-mode property for more
     *  information.You can use this attribute with the following
     *  SVG elements:This value defines a top-to-bottom block
     *  flow direction. Both the writing mode and the typographic
     *  mode are horizontal.This value defines a right-to-left
     *  block flow direction. Both the writing mode and the typographic
     *  mode are vertical.This value defines a left-to-right block
     *  flow direction. Both the writing mode and the typographic
     *  mode are vertical.BCD tables only load in the browser
     * 
     */
    writingMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default Text;
