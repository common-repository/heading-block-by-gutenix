import HeadingBlockByGutenixUiIcons from "components/heading-block-by-gutenix-ui-icons";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
} = wp.components


// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import map from "lodash/map"


export default function ShadowControl( props ) {

	return (
		<div className="heading-block-by-gutenix-typography-range-options">

			<Fragment>

				<RangeControl
					label={ __( props.sizeText ) }
					value={ props.size.value }
					onChange={ ( value ) => props.setAttributes( { [props.sizeLabel]: value } ) }
					min={ 0 }
					max={ 100 }
					step={ props.steps }
				/>

			</Fragment>

		</div>
	)
}


