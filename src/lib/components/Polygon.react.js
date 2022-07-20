
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Polygon is a wrapper for the <polygon> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
 */
const Polygon = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <polygon
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </polygon>
    );
};

Polygon.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Polygon.propTypes = {
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
     *  The fill attribute has two different meanings. For shapes and
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
     *  as a CSS property.BCD tables only load in the browser
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
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
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
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
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    fillRule: PropTypes.oneOfType([
        PropTypes.oneOf(['"evenodd"|"inherit"|"nonzero"']),
        PropTypes.bool
     ]),

    /**
     *  The marker-end attribute defines the arrowhead or polymarker
     *  that will be drawn at the final vertex of the given shape.For
     *  all shape elements, except <polyline> and <path>, the
     *  last vertex is the same as the first vertex. In this case,
     *  if the value of marker-start and marker-end are both not
     *  none, then two markers will be rendered on that final
     *  vertex. For <path> elements, for each closed subpath,
     *  the last vertex is the same as the first vertex. marker-end
     *  is only rendered on the final vertex of the path data.Note:
     *  As a presentation attribute, marker-end can be used as
     *  a CSS property.You can use this attribute with the following
     *  SVG elements:Indicates that no marker symbol shall be
     *  drawn at the final vertex.This value is a reference to
     *  a <marker> element, which will be drawn at the final vertex.
     *  If the reference is not valid, then no marker will be
     *  drawn.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 17, 2022, by MDN contributors
     */
    markerEnd: PropTypes.string,

    /**
     *  The marker-mid attribute defines the arrowhead or polymarker
     *  that will be drawn at all interior vertices of the given
     *  shape.The marker is rendered on every vertex other than
     *  the first and last vertices of the path data.Note: As
     *  a presentation attribute, marker-mid can be used as a
     *  CSS property.You can use this attribute with the following
     *  SVG elements:Indicates that no marker symbol shall be
     *  drawn at the given vertices.This value is a reference
     *  to a <marker> element, which will be drawn at the given
     *  vertices. If the reference is not valid, then no marker
     *  will be drawn.BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 17, 2022, by MDN contributors
     */
    markerMid: PropTypes.string,

    /**
     *  The marker-start attribute defines the arrowhead or polymarker
     *  that will be drawn at the first vertex of the given shape.For
     *  all shape elements, except <polyline> and <path>, the
     *  last vertex is the same as the first vertex. In this case,
     *  if the value of marker-start and marker-end are both not
     *  none, then two markers will be rendered on that final
     *  vertex. For <path> elements, for each closed subpath,
     *  the last vertex is the same as the first vertex. marker-start
     *  is only rendered on the first vertex of the path data.Note:
     *  As a presentation attribute, marker-start can be used
     *  as a CSS property.You can use this attribute with the
     *  following SVG elements:Indicates that no marker symbol
     *  shall be drawn at the first vertex.This value is a reference
     *  to a <marker> element, which will be drawn at the first
     *  vertex. If the reference is not valid, then no marker
     *  will be drawn.BCD tables only load in the browser with
     *  JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 17, 2022, by MDN contributors
     */
    markerStart: PropTypes.string,

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
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    paintOrder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The pathLength attribute lets authors specify a total length
     *  for the path, in user units. This value is then used to
     *  calibrate the browser's distance calculations with those
     *  of the author, by scaling all distance computations using
     *  the ratio pathLength/(computed value of path length).This
     *  can affect the actual rendered lengths of paths; including
     *  text paths, animation paths, and various stroke operations.
     *  Basically, all computations that require the length of
     *  the path. stroke-dasharray, for example, will assume the
     *  start of the path being 0 and the end point the value
     *  defined in the pathLength attribute.You can use this attribute
     *  with the following SVG elements:For <circle>, pathLength
     *  lets authors specify a total length for the circle, in
     *  user units.For <ellipse>, pathLength lets authors specify
     *  a total length for the ellipse, in user units.For <line>,
     *  pathLength lets authors specify a total length for the
     *  line, in user units.For <path>, pathLength lets authors
     *  specify a total length for the path, in user units.For
     *  <polygon>, pathLength lets authors specify a total length
     *  for the shape, in user units.For <polyline>, pathLength
     *  lets authors specify a total length for the shape, in
     *  user units.For <rect>, pathLength lets authors specify
     *  a total length for the rectangle, in user units.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    pathLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The points attribute defines a list of points. Each point is
     *  defined by a pair of number representing a X and a Y coordinate
     *  in the user coordinate system. If the attribute contains
     *  an odd number of coordinates, the last one will be ignored.You
     *  can use this attribute with the following SVG elements:For
     *  <polyline>, points defines a list of points, each representing
     *  a vertex of the line to be drawn. Each point is define
     *  by a X and Y coordinate in the user coordinate system.Note:
     *  A polyline is an open shape, meaning the last point is
     *  not connected to the first point.For <polygon>, points
     *  defines a list of points, each representing a vertex of
     *  the shape to be drawn. Each point is define by a X and
     *  Y coordinate in the user coordinate system.Note: A polygon
     *  is a closed shape, meaning the last point is connected
     *  to the first point.Last modified: May 13, 2022, by MDN
     *  contributors
     */
    points: PropTypes.string,

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
     *  The shape-rendering attribute provides hints to the renderer
     *  about what tradeoffs to make when rendering shapes like
     *  paths, circles, or rectangles.Note: As a presentation
     *  attribute, shape-rendering can be used as a CSS property.You
     *  can use this attribute with the following SVG elements:This
     *  value indicates that the user agent shall make appropriate
     *  tradeoffs to balance speed, crisp edges and geometric
     *  precision, but with geometric precision given more importance
     *  than speed and crisp edges.This value indicates that the
     *  user agent shall emphasize rendering speed over geometric
     *  precision and crisp edges. This option will sometimes
     *  cause the user agent to turn off shape anti-aliasing.This
     *  value indicates that the user agent shall attempt to emphasize
     *  the contrast between clean edges of artwork over rendering
     *  speed and geometric precision. To achieve crisp edges,
     *  the user agent might turn off anti-aliasing for all lines
     *  and curves or possibly just for straight lines which are
     *  close to vertical or horizontal. Also, the user agent
     *  might adjust line positions and line widths to align edges
     *  with device pixels.Indicates that the user agent shall
     *  emphasize geometric precision over speed and crisp edges.BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    shapeRendering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke attribute is a presentation attribute defining the
     *  color (or any SVG paint servers like gradients or patterns)
     *  used to paint the outline of the shape;Note: As a presentation
     *  attribute stroke can be used as a CSS property.You can
     *  use this attribute with the following SVG elements:BCD
     *  tables only load in the browser with JavaScript enabled.
     *  Enable JavaScript to view data.Last modified: May 13,
     *  2022, by MDN contributors
     */
    stroke: PropTypes.string,

    /**
     *  The stroke-dasharray attribute is a presentation attribute defining
     *  the pattern of dashes and gaps used to paint the outline
     *  of the shape;Note: As a presentation attribute, stroke-dasharray
     *  can be used as a CSS property.You can use this attribute
     *  with the following SVG elements:A list of comma and/or
     *  white space separated <length>s and <percentage>s that
     *  specify the lengths of alternating dashes and gaps.If
     *  an odd number of values is provided, then the list of
     *  values is repeated to yield an even number of values.
     *  Thus, 5,3,2 is equivalent to 5,3,2,5,3,2.BCD tables only
     *  load in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
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
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    strokeDashoffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
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
     *  to 1.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
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
     *  attribute.BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The stroke-width attribute is a presentation attribute defining
     *  the width of the stroke to be applied to the shape.You
     *  can use this attribute with the following SVG elements:Note:
     *  A percentage value is always computed as a percentage
     *  of the normalized viewBox diagonal length.BCD tables only
     *  load in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
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

export default Polygon;
