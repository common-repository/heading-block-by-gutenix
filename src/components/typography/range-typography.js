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
	Dashicon,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import map from "lodash/map"


function RangeTypographyControl( props ) {

	let sizeTypes

	if( "sizeTypes" in props ) {
		sizeTypes = props.sizeTypes
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
			{ key: "vw", name: __( "vw" ) },
		]
	}

	const sizeTypesControls = (
		<ButtonGroup className="heading-block-by-gutenix-size-type-field" aria-label={ __( "Size Type" ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="heading-block-by-gutenix-size-btn"
					isSmall
					isPrimary={ props.type.value === key }
					aria-pressed={ props.type.value === key }
					onClick={ () => props.setAttributes( { [props.typeLabel]: key } ) }
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
									<RangeControl
										label={ __( props.sizeMobileText ) }
										value={ props.sizeMobile.value }
										onChange={ ( value ) => props.setAttributes( { [props.sizeMobileLabel]: value } ) }
										min={ -10 }
										max={ 200 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									<RangeControl
										label={ __( props.sizeTabletText ) }
										value={ props.sizeTablet.value }
										onChange={ ( value ) => props.setAttributes( { [props.sizeTabletLabel]: value } ) }
										min={ -10 }
										max={ 200 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						} else {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									<RangeControl
										label={ __( props.sizeText ) }
										value={ props.size.value }
										onChange={ ( value ) => props.setAttributes( { [props.sizeLabel]: value } ) }
										min={ -10 }
										max={ 200 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
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

export default RangeTypographyControl
