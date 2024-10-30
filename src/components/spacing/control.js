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
									{ props.sizeMobileTop &&
										<RangeControl
											label={ __( props.sizeMobileTextTop ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeMobileTop != 'undefined') ? props.sizeMobileTop.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeMobileTop.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeMobileRight &&
										<RangeControl
											label={ __( props.sizeMobileTextRight ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeMobileRight != 'undefined') ? props.sizeMobileRight.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeMobileRight.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeMobileBottom &&
										<RangeControl
											label={ __( props.sizeMobileTextBottom ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeMobileBottom != 'undefined') ? props.sizeMobileBottom.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeMobileBottom.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeMobileLeft &&
										<RangeControl
											label={ __( props.sizeMobileTextLeft ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeMobileLeft != 'undefined') ? props.sizeMobileLeft.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeMobileLeft.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									{ props.sizeTabletTop &&
										<RangeControl
											label={ __( props.sizeTabletTextTop ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeTabletTop != 'undefined') ? props.sizeTabletTop.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeTabletTop.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeTabletRight &&
										<RangeControl
											label={ __( props.sizeTabletTextRight ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeTabletRight != 'undefined') ? props.sizeTabletRight.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeTabletRight.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeTabletBottom &&
										<RangeControl
											label={ __( props.sizeTabletTextBottom ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeTabletBottom != 'undefined') ? props.sizeTabletBottom.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeTabletBottom.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
									{ props.sizeTabletLeft &&
										<RangeControl
											label={ __( props.sizeTabletTextLeft ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeTabletLeft != 'undefined') ? props.sizeTabletLeft.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeTabletLeft.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }
										/>
									}
								</Fragment>
							)
						} else {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									{ props.sizeTop &&
										<RangeControl
											label={ __( props.sizeTextTop ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeTop != 'undefined') ? props.sizeTop.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeTop.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }

										/>
									}
									{ props.sizeRight &&
										<RangeControl
											label={ __( props.sizeTextRight ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeRight != 'undefined') ? props.sizeRight.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeRight.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }

										/>
									}
									{ props.sizeBottom &&
										<RangeControl
											label={ __( props.sizeTextBottom ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeBottom != 'undefined') ? props.sizeBottom.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeBottom.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }

										/>
									}
									{ props.sizeLeft &&
										<RangeControl
											label={ __( props.sizeTextLeft ) }
											className="heading-block-by-gutenix-form-control"
											value = { (typeof props.sizeLeft != 'undefined') ? props.sizeLeft.value : undefined }
											onChange={ ( value ) => props.setAttributes( { [props.sizeLeft.label]: value } ) }
											min={ ( "%" == props.type.value ) ? -100 : -2000 }
											max={ ( "%" == props.type.value ) ? 100 : 2000 }
											step={ ( "%" == props.type.value ) ? 0.01 : 1 }

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


