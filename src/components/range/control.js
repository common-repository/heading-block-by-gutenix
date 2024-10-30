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


export default function SpacingControl( props ) {

	let sizeTypes

	if( "sizeTypes" in props ) {
		sizeTypes = props.sizeTypes
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "%", name: __( "%" ) },
		]
	}

	const sizeTypesControls = (
		<ButtonGroup className="heading-block-by-gutenix-size-type-field" aria-label={ __( 'Size Type', 'heading-block-by-gutenix' ) }>
			{ map( sizeTypes, ( { name, key } ) => props.type && (
				<Button
					key={ key }
					className="heading-block-by-gutenix-size-btn"
					isSmall
					isPrimary={ props.type.value === key }
					aria-pressed={ props.type.value === key }
					onClick={ () => props.setAttributes( { [props.type.label]: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)

	return (
		<div className="heading-block-by-gutenix-typography-range-options">

			<TabPanel className="heading-block-by-gutenix-size-type-field-tabs" activeClass="active-tab"
				tabs={ [
                      {
                        name: "desktop",
                        title: <HeadingBlockByGutenixUiIcons icon="desktop_icon" />,
                        className: "heading-block-by-gutenix-desktop-tab heading-block-by-gutenix-responsive-tabs",
                      },
                      {
                        name: "tablet",
                        title: <HeadingBlockByGutenixUiIcons icon="tablet_icon" />,
                        className: "heading-block-by-gutenix-tablet-tab heading-block-by-gutenix-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <HeadingBlockByGutenixUiIcons icon="mobile_icon" />,
                        className: "heading-block-by-gutenix-mobile-tab heading-block-by-gutenix-responsive-tabs",
                      },
				] }>
				{
					( tab ) => {
						let tabout

						if ( "mobile" === tab.name ) {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									{ props.rangeMobile &&
										<RangeControl
											className="heading-block-by-gutenix-form-control-range"
											value = { (typeof props.rangeMobile != 'undefined') ? props.rangeMobile.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.rangeMobile.label]: value } ) }
											min={ ( "%" == props.type.value ) ? props.percentMin : props.pixelsMin }
											max={ ( "%" == props.type.value ) ? props.percentMax : props.pixelsMax }
											step={ ( "%" == props.type.value ) ? 1 : 1 }
										/>
									}
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									{ props.rangeTablet &&
										<RangeControl
											className="heading-block-by-gutenix-form-control-range"
											value = { (typeof props.rangeTablet != 'undefined') ? props.rangeTablet.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.rangeTablet.label]: value } ) }
											min={ ( "%" == props.type.value ) ? props.percentMin : props.pixelsMin }
											max={ ( "%" == props.type.value ) ? props.percentMax : props.pixelsMax }
											step={ ( "%" == props.type.value ) ? 1 : 1 }
										/>
									}
								</Fragment>
							)
						} else {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									{ props.rangeDesk &&
										<RangeControl
											className="heading-block-by-gutenix-form-control-range"
											value = { (typeof props.rangeDesk != 'undefined') ? props.rangeDesk.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.rangeDesk.label]: value } ) }
											min={ ( "%" == props.type.value ) ? props.percentMin : props.pixelsMin }
											max={ ( "%" == props.type.value ) ? props.percentMax : props.pixelsMax }
											step={ ( "%" == props.type.value ) ? 1 : 1 }
										/>
									}
								</Fragment>
							)
						}

						return <div>{ tabout }</div>
					}
				}
			</TabPanel>
		</div>
	)
}


