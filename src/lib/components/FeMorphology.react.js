
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

/**
 * FeMorphology is a wrapper for the <feMorphology> SVG element.
 * For detailed attribute info see:
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology
 */
const FeMorphology = (props) => {
    const dataAttributes = {};
    if(props.loading_state && props.loading_state.is_loading) {
        dataAttributes['data-dash-is-loading'] = true;
    }

    return (
        <feMorphology
            onClick={() => props.setProps({
                n_clicks: props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            })}
            {...omit(['n_clicks', 'n_clicks_timestamp', 'loading_state', 'setProps'], props)}
            {...dataAttributes}
        >
            {props.children}
        </feMorphology>
    );
};

FeMorphology.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

FeMorphology.propTypes = {
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
    colorInterpolationFilters: PropTypes.oneOf(["auto", "inherit", "linearRGB", "sRGB"]),

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
     *  The operator attribute has two meanings based on the context
     *  it's used in. Either it defines the compositing or morphing
     *  operation to be performed.You can use this attribute with
     *  the following SVG elements:For <feComposite>, operator
     *  defines the compositing operation that is to be performed.This
     *  value indicates that the source graphic defined in the
     *  in attribute is placed over the destination graphic defined
     *  in the in2 attribute.This value indicates that the parts
     *  of the source graphic defined in the in attribute that
     *  overlap the destination graphic defined in the in2 attribute,
     *  replace the destination graphic.This value indicates that
     *  the parts of the source graphic defined in the in attribute
     *  that fall outside the destination graphic defined in the
     *  in2 attribute, are displayed.This value indicates that
     *  the parts of the source graphic defined in the in attribute,
     *  which overlap the destination graphic defined in the in2
     *  attribute, replace the destination graphic. The parts
     *  of the destination graphic that do not overlap with the
     *  source graphic stay untouched.This value indicates that
     *  the non-overlapping regions of the source graphic defined
     *  in the in attribute and the destination graphic defined
     *  in the in2 attribute are combined.This value indicates
     *  that the sum of the source graphic defined in the in attribute
     *  and the destination graphic defined in the in2 attribute
     *  is displayed.This value indicates that the source graphic
     *  defined in the in attribute and the destination graphic
     *  defined in the in2 attribute are combined using the following
     *  formula:result = k1*i1*i2 + k2*i1 + k3*i2 + k4
      where:

     *       i1 and i2 indicate the corresponding pixel channel
     *  values of the input image, which map to in and in2 respectively,
     *  and k1, k2, k3, and k4 indicate the values of the attributes
     *  with the same name.
    For <feMorphology>, operator defines
     *  whether to erode (i.e., thin) or dilate (fatten) the source
     *  graphic.This value thins the source graphic defined in
     *  the in attribute.This value fattens the source graphic
     *  defined in the in attribute.Last modified: Jul 12, 2022,
     *  by MDN contributors
     */
    operator: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     *  The radius attribute represents the radius (or radii) for the
     *  operation on a given <feMorphology> filter primitive.If
     *  two numbers are provided, the first number represents
     *  the x-radius and the second one the y-radius. If one number
     *  is provided, then that value is used for both x and y.
     *  The values are in the coordinate system established by
     *  the primitiveUnits attribute on the <filter> element.A
     *  negative or zero value disables the effect of the given
     *  filter primitive (i.e., the result is the filter input
     *  image).You can use this attribute with the following SVG
     *  elements:BCD tables only load in the browser with JavaScript
     *  enabled. Enable JavaScript to view data.Last modified:
     *  May 13, 2022, by MDN contributors
     */
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

export default FeMorphology;
