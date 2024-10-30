import HeadingBlockByGutenixUiIcons from "components/heading-block-by-gutenix-ui-icons";
import HeadingBlockByGutenixColorPicker from '../color-picker';
import HeadingBlockByGutenixShadowControl from "components/shadow";
import SpacingControl from '../spacing/control';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n


// Extend component
const {
	Component,
	Fragment

} = wp.element

const {
	URLInput
} = wp.blockEditor;

const {
	Toolbar,
	TextControl,
	SelectControl,
	TabPanel

} = wp.components


class HeadingBlockByGutenixButtonControl extends Component {

	render() {

		let Size
		let Text
		let Link
		let UrlTarget
		let Align
		let Color
		let ColorHover
		let BgColor
		let BgColorHover
		let BoxShadow
		let Padding
		let Margin


		Size = (
			
			<SelectControl
				label = { __( 'Button Size', 'heading-block-by-gutenix' ) }
				value = { this.props.btnSize.value }
				options = { [
					{ value: 'default', label: __( 'Default', 'heading-block-by-gutenix' ) },
					{ value: 'block', label: __( 'Full Width (100%)', 'heading-block-by-gutenix' ) },
					{ value: 'inline', label: __( 'Inline (auto)', 'heading-block-by-gutenix' ) },
				] }
				onChange = { ( value ) => this.props.setAttributes( { [ this.props.btnSize.label ]: value  } ) }
			/>

		)

		Align = (

			<Fragment>
				
				<div className="heading-block-by-gutenix-align-advanced">
					<p>{ __( 'Align', 'heading-block-by-gutenix' ) }</p>
					<Toolbar
						className="heading-block-by-gutenix-component-align-wrapper"
						controls={ [
							{
								icon: <HeadingBlockByGutenixUiIcons icon="left" />,
								isActive: "" === this.props.btnAlign.value,
								onClick: () => this.props.setAttributes( { [ this.props.btnAlign.label ]: "" } ),
							},
							{
								icon: <HeadingBlockByGutenixUiIcons icon="center" />,
								isActive: "center" === this.props.btnAlign.value,
								onClick: () => this.props.setAttributes( { [ this.props.btnAlign.label ]: "center" } ),
							},
							{
								icon: <HeadingBlockByGutenixUiIcons icon="right" />,
								isActive: "right" === this.props.btnAlign.value,
								onClick: () => this.props.setAttributes( { [ this.props.btnAlign.label ]: "right" } ),
							},
						] }
					/>
				</div>

			</Fragment>

		)

		Text = (

			<TextControl
				type="text"
				value={ this.props.btnText.value }
				placeholder={ __( 'Text', 'heading-block-by-gutenix' ) }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnText.label ]: value  } ) }
			/>

		)

		Link = (

			<Fragment className="heading-block-by-gutenix-post-wrapper">
				<URLInput
					value={ this.props.btnLink.value }
					onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnLink.label ]: value  } ) }
				/>
				<br/>
			</Fragment>

		)

		UrlTarget = (
			
			<SelectControl
				label={ __( 'Link Target', 'heading-block-by-gutenix' ) }
				value={ this.props.btnUrlTarget.value }
				options={ [
					{ value: '_self', label: __( 'Same Window', 'heading-block-by-gutenix' ) },
					{ value: '_blank', label: __( 'New Window', 'heading-block-by-gutenix' ) },
				] }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnUrlTarget.label ]: value  } ) }
			/>

		)

		Color = (
			
			<HeadingBlockByGutenixColorPicker
				label={ __( 'Color', 'heading-block-by-gutenix' ) }
				value={ this.props.btnColor.value }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnColor.label ]: value  } ) }
				alpha={ true }
				allowReset
			/>

		)

		ColorHover = (
			
			<HeadingBlockByGutenixColorPicker
				label={ __( 'Color', 'heading-block-by-gutenix' ) }
				value={ this.props.btnColorHover.value }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnColorHover.label ]: value  } ) }
				alpha={ true }
				allowReset
			/>

		)

		BgColor = (
			
			<HeadingBlockByGutenixColorPicker
				label={ __( 'Background Color', 'heading-block-by-gutenix' ) }
				value={ this.props.btnBgColor.value }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnBgColor.label ]: value  } ) }
				alpha={ true }
				allowReset
			/>

		)

		BgColorHover = (
			
			<HeadingBlockByGutenixColorPicker
				label={ __( 'Background Color', 'heading-block-by-gutenix' ) }
				value={ this.props.btnBgColorHover.value }
				onChange={ ( value ) => this.props.setAttributes( { [ this.props.btnBgColorHover.label ]: value  } ) }
				alpha={ true }
				allowReset
			/>

		)

		BoxShadow = (

			<HeadingBlockByGutenixShadowControl
				label={ __( 'Box Shadow', 'heading-block-by-gutenix' ) }
				Vertical 				= { this.props.btnShadowHorizontal }
				Horizontal 				= { this.props.btnShadowVertical }
				Blur 					= { this.props.btnShadowBlur }
				Spread 					= { this.props.btnShadowSpread }
				Color 					= { this.props.btnShadowColor }
				Position 				= { this.props.btnShadowPosition }

				{ ...this.props }
			/>

		)

		Padding = (
				
			<Fragment>
				<p>{ __( 'Padding', 'heading-block-by-gutenix' ) }</p>
				<SpacingControl
					type = { this.props.btnPaddingType }

					sizeMobileTop = { this.props.btnPaddingMobileTop }
					sizeMobileRight = { this.props.btnPaddingMobileRight }
					sizeMobileBottom = { this.props.btnPaddingMobileBottom }
					sizeMobileLeft = { this.props.btnPaddingMobileLeft }

					sizeTabletTop = { this.props.btnPaddingTabletTop }
					sizeTabletRight = { this.props.btnPaddingTabletRight }
					sizeTabletBottom = { this.props.btnPaddingTabletBottom }
					sizeTabletLeft = { this.props.btnPaddingTabletLeft }

					sizeTop = { this.props.btnPaddingTop }
					sizeRight = { this.props.btnPaddingRight }
					sizeBottom = { this.props.btnPaddingBottom }
					sizeLeft = { this.props.btnPaddingLeft }

					sizeMobileTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }
					sizeTabletTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }
					sizeTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }

					sizeMobileTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }
					sizeTabletTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }
					sizeTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }

					sizeMobileTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }
					sizeTabletTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }
					sizeTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }

					sizeMobileTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }
					sizeTabletTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }
					sizeTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }

					{ ...this.props }
				/>
			</Fragment>
		)

		Margin = (
				
			<Fragment>
				<p>{ __( 'Margin', 'heading-block-by-gutenix' ) }</p>
				<SpacingControl
					type = { this.props.btnMarginType }

					sizeMobileTop = { this.props.btnMarginMobileTop }
					sizeMobileRight = { this.props.btnMarginMobileRight }
					sizeMobileBottom = { this.props.btnMarginMobileBottom }
					sizeMobileLeft = { this.props.btnMarginMobileLeft }

					sizeTabletTop = { this.props.btnMarginTabletTop }
					sizeTabletRight = { this.props.btnMarginTabletRight }
					sizeTabletBottom = { this.props.btnMarginTabletBottom }
					sizeTabletLeft = { this.props.btnMarginTabletLeft }

					sizeTop = { this.props.btnMarginTop }
					sizeRight = { this.props.btnMarginRight }
					sizeBottom = { this.props.btnMarginBottom }
					sizeLeft = { this.props.btnMarginLeft }

					sizeMobileTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }
					sizeTabletTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }
					sizeTextTop = { __( 'Top', 'heading-block-by-gutenix' ) }

					sizeMobileTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }
					sizeTabletTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }
					sizeTextRight = { __( 'Right', 'heading-block-by-gutenix' ) }

					sizeMobileTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }
					sizeTabletTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }
					sizeTextBottom = { __( 'Bottom', 'heading-block-by-gutenix' ) }

					sizeMobileTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }
					sizeTabletTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }
					sizeTextLeft = { __( 'Left', 'heading-block-by-gutenix' ) }

					{ ...this.props }
				/>
			</Fragment>
		)


		return (

			<div className="heading-block-by-gutenix-button-advanced">
				{ Size }
				{ Align }
				{ Text }
				{ Link }
				{ UrlTarget }

				<p>{ __( 'Color Settings', 'heading-block-by-gutenix' ) }</p>
				<TabPanel
					className="heading-block-by-gutenix-inspect-tabs heading-block-by-gutenix-inspect-tabs-col-2"
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'heading-block-by-gutenix' ),
							className: 'heading-block-by-gutenix-tabs-control heading-block-by-gutenix-normal-tab',
						},
						{
							name: 'hover',
							title: __( 'Hover', 'heading-block-by-gutenix' ),
							className: 'heading-block-by-gutenix-tabs-control heading-block-by-gutenix-hover-tab',
						},
					] }>
					{
						( tab ) => {
							let tabout;
							
							if ( tab.name ) {
								if ( 'hover' === tab.name ) {
									tabout = (
										<Fragment>
											
											{ ColorHover }
											
											{ BgColorHover }

										</Fragment>
									);
								} else {
									tabout = (
										<Fragment>
											
											{ Color }
											
											{ BgColor }

										</Fragment>
									);
								}
							}
							return <div>{ tabout }</div>;
						}
					}
				</TabPanel>
				<br/>

				{ BoxShadow }
				{ Padding }
				{ Margin }
			</div>

		)
	}
}

export default HeadingBlockByGutenixButtonControl
