/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

/**
 * Internal dependencies
 */
import SpacingControl from './control';


// Extend component
const { Component, Fragment } = wp.element


class HeadingBlockByGutenixSpacingControl extends Component {

	render() {

		let padding
		let margin

		padding = (
				
			<Fragment>
				<p>{ this.props.paddinglabel }</p>
				<SpacingControl
					type = { this.props.paddingType }

					sizeMobileTop = { this.props.paddingMobileTop }
					sizeMobileRight = { this.props.paddingMobileRight }
					sizeMobileBottom = { this.props.paddingMobileBottom }
					sizeMobileLeft = { this.props.paddingMobileLeft }

					sizeTabletTop = { this.props.paddingTabletTop }
					sizeTabletRight = { this.props.paddingTabletRight }
					sizeTabletBottom = { this.props.paddingTabletBottom }
					sizeTabletLeft = { this.props.paddingTabletLeft }

					sizeTop = { this.props.paddingTop }
					sizeRight = { this.props.paddingRight }
					sizeBottom = { this.props.paddingBottom }
					sizeLeft = { this.props.paddingLeft }

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
		),

		margin = (

			<Fragment>
				<p>{ this.props.marginlabel }</p>
				<SpacingControl
					type = { this.props.marginType }

					sizeMobileTop = { this.props.marginMobileTop }
					sizeMobileRight = { this.props.marginMobileRight }
					sizeMobileBottom = { this.props.marginMobileBottom }
					sizeMobileLeft = { this.props.marginMobileLeft }

					sizeTabletTop = { this.props.marginTabletTop }
					sizeTabletRight = { this.props.marginTabletRight }
					sizeTabletBottom = { this.props.marginTabletBottom }
					sizeTabletLeft = { this.props.marginTabletLeft }

					sizeTop = { this.props.marginTop }
					sizeRight = { this.props.marginRight }
					sizeBottom = { this.props.marginBottom }
					sizeLeft = { this.props.marginLeft }

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

			<div className="heading-block-by-gutenix-spacing-advanced">
				{ this.props.paddinglabel &&
					padding
				}
				{ this.props.marginlabel &&
					margin
				}
			</div>
			
		)
	}
}

export default HeadingBlockByGutenixSpacingControl
