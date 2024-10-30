/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

/**
 * Internal dependencies
 */
import FontFamilyControl from "./font-typography"
import RangeTypographyControl from "./range-typography"
import TypographyStyles from "./inline-styles"

const {
	Button,
	Dashicon,
	SelectControl
} = wp.components


// Extend component
const { Component, Fragment } = wp.element

// Export for ease of importing in individual blocks.
export {
	TypographyStyles,
}

class TypographyControl extends Component {

	constructor() {
		super( ...arguments )
		this.onAdvancedControlClick  = this.onAdvancedControlClick.bind( this )
		this.onAdvancedControlReset  = this.onAdvancedControlReset.bind( this )
	}


	onAdvancedControlClick() {

		let control = true
		let label = __( "Hide Advanced" )

		if( this.state !== null && this.state.showAdvancedControls === true ) {
			control = false
			label = __( "Advanced" )
		}

		this.setState(
			{
				showAdvancedControls: control,
				showAdvancedControlsLabel: label
			}
		)
	}

	onAdvancedControlReset() {

		const { setAttributes } = this.props

		// Reset Font Size to default.
		setAttributes( { [ this.props.fontSize.label ]: "" } )
		setAttributes( { [ this.props.fontSizeType.label ]: "px" } )
		setAttributes( { [ this.props.fontSizeMobile.label ]: "" } )
		setAttributes( { [ this.props.fontSizeTablet.label ]: "" } )

		// Reset Font family to default.
		setAttributes( { [ this.props.fontFamily.label ]: "" } )
		setAttributes( { [ this.props.fontWeight.label ]: "" } )
		setAttributes( { [ this.props.fontSubset.label ]: "" } )
		
		setAttributes( { [ this.props.textTransform.label ]: "" } )
		setAttributes( { [ this.props.fontStyle.label ]: "" } )
		setAttributes( { [ this.props.textDecoration.label ]: "" } )

		// Reset Line Height to default.
		setAttributes( { [ this.props.lineHeight.label ]: "" } )
		setAttributes( { [ this.props.lineHeightType.label ]: "em" } )
		setAttributes( { [ this.props.lineHeightMobile.label ]: "" } )
		setAttributes( { [ this.props.lineHeightTablet.label ]: "" } )

		// Reset Google Fonts to default.
		setAttributes( { [ this.props.loadGoogleFonts.label ]: false } )

	    // Reset Letter Spacing to default.
		setAttributes( { [ this.props.letterSpacing.label ]: "" } )
		setAttributes( { [ this.props.letterSpacingType.label ]: "em" } )
		setAttributes( { [ this.props.letterSpacingMobile.label ]: "" } )
		setAttributes( { [ this.props.letterSpacingTablet.label ]: "" } )


	}

	render() {

		let fontSize
		let fontWeight
		let fontFamily
		let fontStyle
		let heading
		let letterSpacing
		let textTransform
		let textDecoration
		let fontAdvancedControls
		let fontTypoAdvancedControls
		let showAdvancedFontControls
		let resetFontAdvancedControls

		const {
			disableFontFamily,
			disableFontSize,
			disableLineHeight,
			disableLetterSpacing,
			disableAdvancedOptions = false
		} = this.props

		if( true !== disableFontFamily ) {
			fontFamily = (
				<FontFamilyControl
					{ ...this.props }
				/>
			)
		}

		if( true !== disableLetterSpacing ) {
			letterSpacing = (
				<RangeTypographyControl
					type = { this.props.letterSpacingType }
					typeLabel = { this.props.letterSpacingType.label }
					sizeMobile = { this.props.letterSpacingMobile }
					sizeMobileLabel = { this.props.letterSpacingMobile.label }
					sizeTablet = { this.props.letterSpacingTablet }
					sizeTabletLabel = { this.props.letterSpacingTablet.label }
					size = { this.props.letterSpacing }
					sizeLabel = { this.props.letterSpacing.label }
					sizeMobileText = { __( "Letter Spacing" ) }
					sizeTabletText = { __( "Letter Spacing" ) }
					sizeText = { __( 'Letter Spacing', 'heading-block-by-gutenix' ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableLineHeight ) {
			fontWeight = (
				<RangeTypographyControl
					type = { this.props.lineHeightType }
					typeLabel = { this.props.lineHeightType.label }
					sizeMobile = { this.props.lineHeightMobile }
					sizeMobileLabel = { this.props.lineHeightMobile.label }
					sizeTablet = { this.props.lineHeightTablet }
					sizeTabletLabel = { this.props.lineHeightTablet.label }
					size = { this.props.lineHeight }
					sizeLabel = { this.props.lineHeight.label }
					sizeMobileText = { __( "Line Height" ) }
					sizeTabletText = { __( "Line Height" ) }
					sizeText = { __( "Line Height" ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableFontSize ) {
			fontSize = (
				<RangeTypographyControl
					type = { this.props.fontSizeType }
					typeLabel = { this.props.fontSizeType.label }
					sizeMobile = { this.props.fontSizeMobile }
					sizeMobileLabel = { this.props.fontSizeMobile.label }
					sizeTablet = { this.props.fontSizeTablet }
					sizeTabletLabel = { this.props.fontSizeTablet.label }
					size = { this.props.fontSize }
					sizeLabel = { this.props.fontSize.label }
					sizeMobileText = { ( ! this.props.fontSizeLabel ) ? __( "Font Size" ) : this.props.fontSizeLabel }
					sizeTabletText = { ( ! this.props.fontSizeLabel ) ? __( "Font Size" ) : this.props.fontSizeLabel }
					sizeText = { ( ! this.props.fontSizeLabel ) ? __( "Font Size" ) : this.props.fontSizeLabel }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}
		
		
			

		

		
		heading = (

			<Fragment>

			{ this.props.heading  && 

				<SelectControl
					label = { __('Tag') }
					value = { (typeof this.props.heading != 'undefined') ? this.props.heading.value : undefined }
						options={ [
							{ label: 'H1', value: 'h1' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
							{ label: 'span', value: 'span' },
							{ label: 'div', value: 'div' },
							{ label: 'p', value: 'p' },
							] }
						onChange={ ( value ) => this.props.setAttributes( { [ this.props.heading.label ]: value } ) }
				/>

			}

			</Fragment>
		)
       
		if( true !== disableFontFamily && true !== disableFontSize ) {
			fontAdvancedControls =  (
				<Button
					className="heading-block-by-gutenix-size-btn heading-block-by-gutenix-typography-control-btn"
					isSmall
					aria-pressed={ ( this.state !== null ) }
					onClick={ this.onAdvancedControlClick }
				><Dashicon icon="admin-tools" /></Button>
			)

		resetFontAdvancedControls =  (
				<Button
					className="heading-block-by-gutenix-size-btn heading-block-by-gutenix-typography-reset-btn"
					isSmall
					aria-pressed={ ( this.state !== null ) }
					onClick={ this.onAdvancedControlReset }
				><Dashicon icon="image-rotate" /></Button>
			)
		} else {
			showAdvancedFontControls = (
				<Fragment>
					{ heading }
					{ fontSize }
					{ fontFamily }
					{ fontWeight }
					{ letterSpacing }
				</Fragment>
			)
		}


		if( this.state !== null && this.state.showAdvancedControls === true ) {

			showAdvancedFontControls = (
				<div className="heading-block-by-gutenix-typography-advanced">
					{ heading }
					{ fontSize }
					{ fontFamily }
					{ fontWeight }
					{ letterSpacing }
				</div>
			)
		}

		if( true !== disableFontFamily && true !== disableFontSize && true !== disableLetterSpacing && true !== disableLineHeight ) {
			fontTypoAdvancedControls =  (
				<div className="heading-block-by-gutenix-typography-option-actions">
					<span>{ this.props.label }</span>
					{ fontAdvancedControls }
					{ resetFontAdvancedControls }
				</div>
			)
		}

		return (
			<div className="heading-block-by-gutenix-typography-options">
				{ !disableAdvancedOptions &&
					<Fragment>
						{ fontTypoAdvancedControls }
						{ showAdvancedFontControls }
					</Fragment>
				}
			</div>
		)
	}
}

export default TypographyControl
