/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

/**
 * Internal dependencies
 */
import SpacingControl from '../spacing/control';


// Extend component
const { Component, Fragment } = wp.element


class HeadingBlockByGutenixBorderControl extends Component {

	render() {

		let borderWidth
		let borderRadius

		borderWidth = (
				
			<Fragment>
				<p>{ this.props.borderWidthlabel }</p>
				<SpacingControl
					type = { this.props.borderWidthType }

					sizeMobileTop = { this.props.borderWidthMobileTop }
					sizeMobileRight = { this.props.borderWidthMobileRight }
					sizeMobileBottom = { this.props.borderWidthMobileBottom }
					sizeMobileLeft = { this.props.borderWidthMobileLeft }

					sizeTabletTop = { this.props.borderWidthTabletTop }
					sizeTabletRight = { this.props.borderWidthTabletRight }
					sizeTabletBottom = { this.props.borderWidthTabletBottom }
					sizeTabletLeft = { this.props.borderWidthTabletLeft }

					sizeTop = { this.props.borderWidthTop }
					sizeRight = { this.props.borderWidthRight }
					sizeBottom = { this.props.borderWidthBottom }
					sizeLeft = { this.props.borderWidthLeft }

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

					steps = { 1 }
					{ ...this.props }
				/>
			</Fragment>
		),

		borderRadius = (
			<Fragment>
				<p>{ this.props.borderRadiuslabel }</p>
				<SpacingControl
					type = { this.props.borderRadiusType }

					sizeMobileTop = { this.props.borderRadiusMobileTop }
					sizeMobileRight = { this.props.borderRadiusMobileRight }
					sizeMobileBottom = { this.props.borderRadiusMobileBottom }
					sizeMobileLeft = { this.props.borderRadiusMobileLeft }

					sizeTabletTop = { this.props.borderRadiusTabletTop }
					sizeTabletRight = { this.props.borderRadiusTabletRight }
					sizeTabletBottom = { this.props.borderRadiusTabletBottom }
					sizeTabletLeft = { this.props.borderRadiusTabletLeft }

					sizeTop = { this.props.borderRadiusTop }
					sizeRight = { this.props.borderRadiusRight }
					sizeBottom = { this.props.borderRadiusBottom }
					sizeLeft = { this.props.borderRadiusLeft }

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

					steps = { 1 }
					{ ...this.props }
				/>
			</Fragment>
		)

		return (

			<div className="heading-block-by-gutenix-spacing-advanced">
				{ this.props.borderWidthlabel &&
					borderWidth
				}
				{ this.props.borderRadiuslabel &&
					borderRadius
				}
			</div>

		)
	}
}

export default HeadingBlockByGutenixBorderControl
