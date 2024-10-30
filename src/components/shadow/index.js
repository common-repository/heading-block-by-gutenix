/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

import ShadowControl from './control';
import HeadingBlockByGutenixColorPicker from '../color-picker';



const {
	Button,
	Dashicon,
	SelectControl
} = wp.components


// Extend component
const { Component, Fragment } = wp.element


class HeadingBlockByGutenixShadowControl extends Component {

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

		// Reset Font family to default.
		setAttributes( { [ this.props.Vertical.label ]: "" } )
		setAttributes( { [ this.props.Horizontal.label ]: "" } )
		setAttributes( { [ this.props.Blur.label ]: "" } )
		setAttributes( { [ this.props.Spread.label ]: "" } )
		setAttributes( { [ this.props.Color.label ]: "" } )
		setAttributes( { [ this.props.Position.label ]: "" } )
	}

	render() {

		let Vertical
		let Horizontal
		let Blur
		let Spread
		let Color
		let Position

		let fontAdvancedControls
		let fontTypoAdvancedControls
		let showAdvancedFontControls
		let resetFontAdvancedControls

		const {
			disableVertical,
			disableHorizontal,
			disableBlur,
			disableSpread,
			disableColor,
			disablePosition,
			disableAdvancedOptions = false
		} = this.props


		if( true !== disableVertical ) {
			Vertical = (
				<ShadowControl
					size = { this.props.Vertical }
					sizeLabel = { this.props.Vertical.label }
					sizeText = { __( "Vertical" ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableColor ) {
			Color = (
              	 <HeadingBlockByGutenixColorPicker
                     label={ __( 'Color' ) }
                     value={ this.props.Color.value }
                     onChange={ ( value ) => this.props.setAttributes( { [ this.props.Color.label ]: value  } ) }
                     alpha={ true }
                     allowReset
                />
			)
		}

		if( true !== disableHorizontal ) {
			Horizontal = (
				<ShadowControl
					size = { this.props.Horizontal }
					sizeLabel = { this.props.Horizontal.label }
					sizeText = { __( "Horizontal" ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableBlur ) {
			Blur = (
				<ShadowControl
					size = { this.props.Blur }
					sizeLabel = { this.props.Blur.label }
					sizeText = { __( "Blur" ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableSpread ) {
			Spread = (
				<ShadowControl
					size = { this.props.Spread }
					sizeLabel = { this.props.Spread.label }
					sizeText = { __( "Spread" ) }
					steps = { 0.1 }
					{ ...this.props }
				/>
			)
		}

		if( true !== disablePosition ) {
			Position = (
				<SelectControl
                      label = { __('Position') }
                      value={ this.props.Position.value }
                      options={ [
                      	{ label: 'Offset', value: '' },
                        { label: 'Inset', value: 'inset' }
                        ] }
                    onChange={ ( value ) => this.props.setAttributes( { [ this.props.Position.label ]: value  } ) }        
                 />
			)
		}


		if( true !== disableSpread && true !== disableBlur ) {
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
					{ Color }
					{ Vertical }
					{ Horizontal }
					{ Blur }
					{ Spread }
					{ Position }
				</Fragment>
			)
		}


		if( this.state !== null && this.state.showAdvancedControls === true ) {

			showAdvancedFontControls = (
				<div className="heading-block-by-gutenix-typography-advanced">
					{ Color }
					{ Vertical }
					{ Horizontal }
					{ Blur }
					{ Spread }
					{ Position }

				</div>
			)
		}

		if( true !== disableVertical && true !== disableHorizontal&& true !== disableBlur && true !== disableSpread && true !== disableColor ) {
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

export default HeadingBlockByGutenixShadowControl
