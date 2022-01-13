
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * View is a wrapper for the <view> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view
 */
const View = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <view
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </view>
    );
};

View.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

View.propTypes = {
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
     *  viewport.
     */
    preserveAspectRatio: PropTypes.string,

    /**
     *  The viewBox attribute defines the position and dimension, in
     *  user space, of an SVG viewport.The value of the viewBox
     *  attribute is a list of four numbers: min-x, min-y, width
     *  and height. The numbers separated by whitespace and/or
     *  a comma, which specify a rectangle in user space which
     *  is mapped to the bounds of the viewport established for
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
     *  and dimension for the content of the <view> element.
     */
    viewBox: PropTypes.string,

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The viewTarget attribute
     *  indicates the target object associated with the view.You
     *  can use this attribute with the following SVG elements:This
     *  value specifies the name of the object associated with
     *  the view.BCD tables only load in the browser
     */
    viewTarget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  Deprecated: This feature is no longer recommended. Though some
     *  browsers might still support it, it may have already been
     *  removed from the relevant web standards, may be in the
     *  process of being dropped, or may only be kept for compatibility
     *  purposes. Avoid using it, and update existing code if
     *  possible; see the compatibility table at the bottom of
     *  this page to guide your decision. Be aware that this feature
     *  may cease to work at any time.The zoomAndPan attribute
     *  specifies whether the SVG document can be magnified and
     *  panned.Magnification in this context means the effect
     *  of a supplemental scale and translate transformation on
     *  the outermost SVG document fragment.Panning represents
     *  a translation (i.e., a shift) transformation on an SVG
     *  document fragment in response to a user interface action.You
     *  can use this attribute with the following SVG elements:BCD
     *  tables only load in the browser
     */
    zoomAndPan: PropTypes.string,

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

export default View;
