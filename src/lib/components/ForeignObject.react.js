
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * ForeignObject is a wrapper for the <foreignObject> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject
 */
const ForeignObject = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <foreignObject
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </foreignObject>
    );
};

ForeignObject.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

ForeignObject.propTypes = {
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
     *  width
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  a way to design SVG that gracefully falls back when features
     *  aren't available.If the attribute is not present, then
     *  its implicit evaluated value is true. If a null string
     *  or empty string value is given to attribute requiredFeatures,
     *  the attribute is evaluate to false.requiredFeatures is
     *  often used in conjunction with the <switch> element. If
     *  requiredFeatures is used in other situations, it represents
     *  a simple switch on the given element whether to render
     *  the element or not.To detect availability of an SVG feature
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
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    requiredFeatures: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  en.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    systemLanguage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  value is that the stroke width is not dependent on the
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
     *  time, that property is consumed for this effect.BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 13, 2022, by
     *  MDN contributors
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
     *  use this attribute with the following SVG elements:The
     *  following example toggles the CSS visibility of the SVG
     *  image path.This value indicates that the element will
     *  be painted.This value indicates that the element will
     *  not be painted. Though it is still part of the rendering
     *  tree, i.e. it may receive pointer events depending on
     *  the pointer-events attribute, may receive focus depending
     *  on the tabindex attribute, contributes to bounding box
     *  calculations and clipping paths, and does affect text
     *  layout.This value is equal to hidden.BCD tables only load
     *  in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    visibility: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default ForeignObject;
