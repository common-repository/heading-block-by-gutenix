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


class HeadingBlockByGutenixRangeControl extends Component {

	render() {

		let range

		range = (
				
			<Fragment>
				<p>{ this.props.rangeLabel }</p>
				<SpacingControl
					type = { this.props.rangeType }

					rangeMobile = { this.props.rangeMobile }
					rangeTablet = { this.props.rangeTablet }
					rangeDesk = { this.props.rangeDesk }

					percentMin = { this.props.percentMin }
					percentMax = { this.props.percentMax }
					pixelsMin = { this.props.pixelsMin }
					pixelsMax = { this.props.pixelsMax }


					{ ...this.props }
				/>
			</Fragment>

		)

		return (

			<div className="heading-block-by-gutenix-spacing-advanced">
				{ this.props.rangeLabel &&
					range
				}
			</div>
			
		)
	}
}

export default HeadingBlockByGutenixRangeControl
