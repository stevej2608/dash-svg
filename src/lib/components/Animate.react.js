
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * Animate is a wrapper for the <animate> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
 */
const Animate = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <animate
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </animate>
    );
};

Animate.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Animate.propTypes = {
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
     *  The accumulate attribute controls whether or not an animation
     *  is cumulative.It is frequently useful for repeated animations
     *  to build upon the previous results, accumulating with
     *  each iteration. This attribute said to the animation if
     *  the value is added to the previous animated attribute's
     *  value on each iteration.You can use this attribute with
     *  the following SVG elements:Specifies that each repeat
     *  iteration after the first builds upon the last value of
     *  the previous iteration.Specifies that repeat iterations
     *  are not cumulative.This attribute is ignored if the target
     *  attribute value does not support addition, or if the animation
     *  element does not repeat.This attribute will be ignored
     *  if the animation function is specified with only the to
     *  attribute.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    accumulate: PropTypes.oneOf(["none", "sum"]),

    /**
     *  The additive attribute controls whether or not an animation is
     *  additive.It is frequently useful to define animation as
     *  an offset or delta to an attribute's value, rather than
     *  as absolute values.You can use this attribute with the
     *  following SVG elements:Specifies that the animation will
     *  add to the underlying value of the attribute and other
     *  lower priority animations.Specifies that the animation
     *  will override the underlying value of the attribute and
     *  other lower priority animations. This is the default,
     *  however the behavior is also affected by the animation
     *  value attributes by and to, as described in SMIL Animation:
     *  How from, to and by attributes affect additive behavior.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    additive: PropTypes.oneOf(["replace", "sum"]),

    /**
     *  The attributeName attribute indicates the name of the CSS property
     *  or attribute of the target element that is going to be
     *  changed during an animation.You can use this attribute
     *  with the following SVG elements:This value indicates the
     *  name of the CSS property or attribute of the target element
     *  to be animated.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    attributeName: PropTypes.string,

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The attributeType attribute
     *  specifies the namespace in which the target attribute
     *  and its associated values are defined.You can use this
     *  attribute with the following SVG elements:This value specifies
     *  that the value of attributeName is the name of a CSS property
     *  defined as animatable.This value specifies that the value
     *  of attributeName is the name of an XML attribute defined
     *  as animatable in the default XML namespace for the target
     *  element.This value specifies that the implementation should
     *  match the attributeName to an attribute for the target
     *  element. User agents first search through the list of
     *  CSS properties for a matching property name, and if none
     *  is found, search the default XML namespace for the element.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    attributeType: PropTypes.string,

    /**
     *  The begin attribute defines when an animation should begin or
     *  when an element should be discarded.The attribute value
     *  is a semicolon separated list of values. The interpretation
     *  of a list of start times is detailed in the SMIL specification
     *  in "Evaluation of begin and end time lists". Each individual
     *  value can be one of the following : <offset-value>, <syncbase-value>,
     *  <event-value>, <repeat-value>, <accessKey-value>, <wallclock-sync-value>
     *  or the keyword indefinite.You can use this attribute with
     *  the following SVG elements:For <animate>, <animateColor>,
     *  <animateMotion>, <animateTransform>, and <set>, begin
     *  defines when the element should begin, i.e. become active.The
     *  <begin-value-list> is a semicolon-separated list of values.
     *  Each value can be one of the following:This value defines
     *  a clock-value that represents a point in time relative
     *  to the beginning of the SVG document (usually the load
     *  or DOMContentLoaded event). Negative values are valid.This
     *  value defines a syncbase and an optional offset from that
     *  syncbase. The element's animation start time is defined
     *  relative to the begin or active end of another animation.A
     *  valid syncbase-value consists of an ID reference to another
     *  animation element followed by a dot and either begin or
     *  end to identify whether to synchronize with the beginning
     *  or active end of the referenced animation element. An
     *  optional offset value as defined in <offset-value> can
     *  be appended.This value defines an event and an optional
     *  offset that determines the time at which the element's
     *  animation should begin. The animation start time is defined
     *  relative to the time that the specified event is fired.A
     *  valid event-value consists of an element ID followed by
     *  a dot and one of the supported events for that element.
     *  All valid events (not necessarily supported by all elements)
     *  are defined by the DOM and HTML specifications. Those
     *  are: focus, blur, focusin, focusout, DOMActivate, auxclick,
     *  click, dblclick, mousedown, mouseenter, mouseleave, mousemove,
     *  mouseout, mouseover, mouseup, wheel, beforeinput, input,
     *  keydown, keyup, compositionstart, compositionupdate, compositionend,
     *  load, unload, abort, error, select, resize, scroll, beginEvent,
     *  endEvent, and repeatEvent. An optional offset value as
     *  defined in <offset-value> can be appended.This value defines
     *  a qualified repeat event. The element animation start
     *  time is defined relative to the time that the repeat event
     *  is raised with the specified iteration value.A valid repeat
     *  value consists of an element ID followed by a dot and
     *  the function repeat() with an integer value specifying
     *  the number of repetitions as parameter. An optional offset
     *  value as defined in <offset-value> can be appended.This
     *  value defines an access key that should trigger the animation.
     *  The element animation will begin when the user presses
     *  the specified key.A valid accessKey-value consists of
     *  the function accessKey() with the character to be input
     *  as parameter. An optional offset value as defined in <offset-value>
     *  can be appended.This value defines the animation start
     *  time as a real-world clock time.A valid wallclock-sync-value
     *  consists of the function wallclock() with a time value
     *  as parameter. The time syntax is based upon the syntax
     *  defined in ISO 8601.The begin of the animation will be
     *  determined by a beginElement() method call or a hyperlink
     *  targeted to the element.For <discard>, begin defines when
     *  the target element will be discarded.The <discard> element
     *  has an implicit simple duration of indefinite. As soon
     *  as the element's active duration starts, the element identified
     *  by the href attribute is discarded. The behavior is the
     *  same as if Node.removeChild() were called on the parent
     *  of the target element with the target element as parameter.After
     *  removal of the target element, the <discard> element is
     *  no longer useful, therefore it is also discarded after
     *  the target element's removal. If the href attribute has
     *  an invalid URL reference (e.g. the target element did
     *  not exist), the <discard> element itself is still removed
     *  after the activation.Seeking backwards in the timeline
     *  doesn't re-insert the discarded elements. So, authors
     *  are encouraged to set the playbackorder attribute to forwardonly
     *  when using the <discard> element.The <discard> element
     *  itself can be discarded prior to its activation, in which
     *  case it will never trigger the removal of its own target
     *  element.The definition of <begin-value-list> is the same
     *  as for the other animation elements.begin-1-offset.svgbegin-2-syncbase.svgbegin-3-event.svgbegin-4-repeat.svgThis
     *  example is embed in an iFrame. If you want to activate
     *  the key events, you have to click on it first.begin-5-accesskey.svgLast
     *  modified: Jul 12, 2022, by MDN contributors
     */
    begin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The by attribute specifies a relative offset value for an attribute
     *  that will be modified during an animation.The starting
     *  value for the attribute is either indicated by specifying
     *  it as value for the attribute given in the attributeName
     *  or the from attribute.You can use this attribute with
     *  the following SVG elements:The exact value type for this
     *  attribute depends on the value of the attribute that will
     *  be animated.When a list of values is defined via the values
     *  attribute, the by attribute is ignored.BCD tables only
     *  load in the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    by: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The calcMode attribute specifies the interpolation mode for the
     *  animation.The default mode is linear, however if the attribute
     *  does not support linear interpolation (e.g. for strings),
     *  the calcMode attribute is ignored and discrete interpolation
     *  is used.You can use this attribute with the following
     *  SVG elements:This specifies that the animation function
     *  will jump from one value to the next without any interpolation.Simple
     *  linear interpolation between values is used to calculate
     *  the animation function. Except for <animateMotion>, this
     *  is the default value.Defines interpolation to produce
     *  an even pace of change across the animation. This is only
     *  supported for values that define a linear numeric range,
     *  and for which some notion of "distance" between points
     *  can be calculated (e.g. position, width, height, etc.).
     *  If paced is specified, any keyTimes or keySplines will
     *  be ignored. For <animateMotion>, this is the default value.Interpolates
     *  from one value in the values list to the next according
     *  to a time function defined by a cubic Bézier spline. The
     *  points of the spline are defined in the keyTimes attribute,
     *  and the control points for each interval are defined in
     *  the keySplines attribute.Last modified: May 13, 2022,
     *  by MDN contributors
     */
    calcMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The dur attribute indicates the simple duration of an animation.You
     *  can use this attribute with the following SVG elements:This
     *  value specifies the length of the simple duration. The
     *  value must be greater than 0 and can be expressed with
     *  hours (h), minutes (m), seconds (s) or milliseconds (ms).
     *  It's possible to combine those time representations to
     *  create some complex durations like hh:mm:ss.iii or mm:ss.iii.

     *       This value specifies the simple duration as the intrinsic
     *  media duration. This is only valid for elements that define
     *  media.
      (For animation elements the attribute will
     *  be ignored if media is specified.)
    This value specifies
     *  the simple duration as indefinite.Note: the interpolation
     *  will not work if the simple duration is indefinite (although
     *  this may still be useful for <set> elements).BCD tables
     *  only load in the browser with JavaScript enabled. Enable
     *  JavaScript to view data.Last modified: May 17, 2022, by
     *  MDN contributors
     */
    dur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The end attribute defines an end value for the animation that
     *  can constrain the active duration.You can use this attribute
     *  with the following SVG elements:The <end-value-list> is
     *  a semicolon-separated list of values. Each value can be
     *  one of the following:This value defines a clock-value
     *  that represents a point in time relative to the beginning
     *  of the SVG document (usually the load or DOMContentLoaded
     *  event). Negative values are valid.This value defines a
     *  syncbase and an optional offset from that syncbase. The
     *  element's animation end time is defined relative to the
     *  begin or active end of another animation.A valid syncbase-value
     *  consists of an ID reference to another animation element
     *  followed by a dot and either begin or end to identify
     *  whether to synchronize with the beginning or active end
     *  of the referenced animation element. An optional offset
     *  value as defined in <offset-value> can be appended.This
     *  value defines an event and an optional offset that determines
     *  the time at which the element's animation should end.
     *  The animation end time is defined relative to the time
     *  that the specified event is fired.A valid event-value
     *  consists of an element ID followed by a dot and one of
     *  the supported events for that element. All valid events
     *  (not necessarily supported by all elements) are defined
     *  by the DOM and HTML specifications. Those are: focus,
     *  blur, focusin, focusout, activate, auxclick, click, dblclick,
     *  mousedown, mouseenter, mouseleave, mousemove, mouseout,
     *  mouseover, mouseup, wheel, beforeinput, input, keydown,
     *  keyup, compositionstart, compositionupdate, compositionend,
     *  load, unload, abort, error, select, resize, scroll, beginEvent,
     *  endEvent, and repeatEvent . An optional offset value as
     *  defined in <offset-value> can be appended.This value defines
     *  a qualified repeat event. The element animation end time
     *  is defined relative to the time that the repeat event
     *  is raised with the specified iteration value.A valid repeat
     *  value consists of an element ID followed by a dot and
     *  the function repeat() with an integer value specifying
     *  the number of repetitions as parameter. An optional offset
     *  value as defined in <offset-value> can be appended.This
     *  value defines an access key that should trigger the end
     *  of the animation. The element animation will end when
     *  the user presses the specified key.A valid accessKey-value
     *  consists of the function accessKey() with the character
     *  to be input as parameter. An optional offset value as
     *  defined in <offset-value> can be appended.This value defines
     *  the animation end time as a real-world clock time.A valid
     *  wallclock-sync-value consists of the function wallclock()
     *  with a time value as parameter. The time syntax is based
     *  upon the syntax defined in ISO 8601.The end of the animation
     *  will be determined by an SVGAnimationElement.endElement()
     *  method call.This example is embed in an iFrame. If you
     *  want to activate the key events, you have to click on
     *  it first.Last modified: May 17, 2022, by MDN contributors
     * 
     */
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The from attribute indicates the initial value of the attribute
     *  that will be modified during the animation.When used with
     *  the to attribute, the animation will change the modified
     *  attribute from the from value to the to value. When used
     *  with the by attribute, the animation will change the attribute
     *  relatively from the from value by the value specified
     *  in by.You can use this attribute with the following SVG
     *  elements:The exact value type for this attribute depends
     *  on the value of the attribute that will be animated.When
     *  a list of values is defined via the values attribute,
     *  the from attribute is ignored.BCD tables only load in
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The keyPoints attribute indicates the simple duration of an animation.You
     *  can use this attribute with the following SVG elements:This
     *  value defines a semicolon-separated list of floating point
     *  values between 0 and 1 and indicates how far along the
     *  motion path the object shall move at the moment in time
     *  specified by corresponding keyTimes value. The distance
     *  is calculated along the path specified by the path attribute.
     *  Each progress value in the list corresponds to a value
     *  in the keyTimes attribute list.If a list of key points
     *  is specified, there must be exactly as many values in
     *  the keyPoints list as in the keyTimes list.If there's
     *  a semicolon at the end of the value, optionally followed
     *  by white space, both the semicolon and the trailing white
     *  space are ignored.If there are any errors in the value
     *  specification (i.e. bad values, too many or too few values),
     *  then that's an error.BCD tables only load in the browser
     *  with JavaScript enabled. Enable JavaScript to view data.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    keyPoints: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The keySplines attribute defines a set of Bézier curve control
     *  points associated with the keyTimes list, defining a cubic
     *  Bézier function that controls interval pacing.This attribute
     *  is ignored unless the calcMode attribute is set to spline.If
     *  there are any errors in the keySplines specification (bad
     *  values, too many or too few values), the animation will
     *  not occur.You can use this attribute with the following
     *  SVG elements:The attribute value is a semicolon-separated
     *  list of control point descriptions.Last modified: May
     *  17, 2022, by MDN contributors
     */
    keySplines: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The keyTimes attribute represents a list of time values used
     *  to control the pacing of the animation.Each time in the
     *  list corresponds to a value in the values attribute list,
     *  and defines when the value is used in the animation. Each
     *  time value in the keyTimes list is specified as a floating
     *  point value between 0 and 1 (inclusive), representing
     *  a proportional offset into the duration of the animation
     *  element.You can use this attribute with the following
     *  SVG elements:The value of the keyTimes attribute is a
     *  semicolon-separated list of values.There must be exactly
     *  as many values in the keyTimes list as in the values list.Each
     *  successive time value must be greater than or equal to
     *  the preceding time value.The keyTimes list semantics depends
     *  upon the interpolation mode:If the calcMode attribute
     *  is set to paced, the keyTimes attribute is ignored.If
     *  the duration of the animation is indefinite, any keyTimes
     *  specification will be ignored.Last modified: May 13, 2022,
     *  by MDN contributors
     */
    keyTimes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The repeatCount attribute indicates the number of times an animation
     *  will take place.You can use this attribute with the following
     *  SVG elements:This value specifies the number of iterations.
     *  It can include partial iterations expressed as fraction
     *  values. A fractional value describes a portion of the
     *  simple duration. Values must be greater than 0.This value
     *  indicates that the animation will be repeated indefinitely
     *  (i.e. until the document ends).BCD tables only load in
     *  the browser with JavaScript enabled. Enable JavaScript
     *  to view data.Last modified: May 13, 2022, by MDN contributors
     * 
     */
    repeatCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The repeatDur attribute specifies the total duration for repeating
     *  an animation.You can use this attribute with the following
     *  SVG elements:This value specifies the duration in presentation
     *  time to repeat the animation.This value indicates that
     *  the animation will be repeated indefinitely (i.e. until
     *  the document ends).Last modified: May 13, 2022, by MDN
     *  contributors
     */
    repeatDur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The restart attribute specifies whether or not an animation can
     *  restart.You can use this attribute with the following
     *  SVG elements:This value indicates that the animation can
     *  be restarted at any time.This value indicates that the
     *  animation can only be restarted when it is not active
     *  (i.e. after the active end). Attempts to restart the animation
     *  during its active duration are ignored.This value indicates
     *  that the animation cannot be restarted for the time the
     *  document is loaded.Last modified: May 13, 2022, by MDN
     *  contributors
     */
    restart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
     *  The to attribute indicates the final value of the attribute that
     *  will be modified during the animation.The value of the
     *  attribute will change between the from attribute value
     *  and this value.You can use this attribute with the following
     *  SVG elements:For <animate>, <animateColor>, <animateMotion>,
     *  and <animateTransform>, to specifies the ending value
     *  of the animation.The exact value type for this attribute
     *  depend on the value of the attribute that will be animated.If
     *  a list of values is defined via the values attribute,
     *  the to attribute is ignored.For the <set> element, to
     *  specifies the value for the attribute during the duration
     *  of the element.The exact value type for this attribute
     *  depend on the value of the attribute that will be animated.Last
     *  modified: May 13, 2022, by MDN contributors
     */
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The values attribute has different meanings, depending upon the
     *  context where it's used, either it defines a sequence
     *  of values used over the course of an animation, or it's
     *  a list of numbers for a color matrix, which is interpreted
     *  differently depending on the type of color change to be
     *  performed.You can use this attribute with the following
     *  SVG elements:For <animate>, <animateColor>, <animateMotion>,
     *  and <animateTransform>, values is a list of values defining
     *  the sequence of values over the course of the animation.
     *  If this attribute is specified, any from, to, and by attribute
     *  values set on the element are ignored.The value holds
     *  a semicolon-separated list of one or more values. The
     *  type of the values is defined by the href and attributeName
     *  attributes.For the <feColorMatrix> element, values is
     *  a list of numbers interpreted differently depending on
     *  the value of the type attribute.The value is a list of
     *  numbers, which is interpreted differently depending on
     *  the value of the type attribute:Last modified: Jul 10,
     *  2022, by MDN contributors
     */
    values: PropTypes.string,

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

export default Animate;
