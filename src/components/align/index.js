import HeadingBlockByGutenixUiIcons from "components/heading-block-by-gutenix-ui-icons";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n


// Extend component
const { Component, Fragment } = wp.element

const { Toolbar } = wp.components


class HeadingBlockByGutenixAlignControl extends Component {

	render() {

		let Align

		Align = (
				
		<Fragment>
			
			<p>{ __( "Align" ) }</p>
			
			<Toolbar className="heading-block-by-gutenix-component-align-wrapper"

				controls={ [
					{
						icon: <HeadingBlockByGutenixUiIcons icon="left" />,
						isActive: "" === this.props.Align.value,
						onClick: () => this.props.setAttributes( { [ this.props.Align.label ]: "" } ),
					},
					{
						icon: <HeadingBlockByGutenixUiIcons icon="center" />,
						isActive: "center" === this.props.Align.value,
						onClick: () => this.props.setAttributes( { [ this.props.Align.label ]: "center" } ),
					},
					{
						icon: <HeadingBlockByGutenixUiIcons icon="right" />,
						isActive: "right" === this.props.Align.value,
						onClick: () => this.props.setAttributes( { [ this.props.Align.label ]: "right" } ),
					},

				] }
			/>

		</Fragment>

		)

		return (

			<div className="heading-block-by-gutenix-align-advanced">
					{ Align }
			</div>
			

		)
	}
}

export default HeadingBlockByGutenixAlignControl
