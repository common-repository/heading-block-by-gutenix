/**
* Create an Component
*/

const {__} = wp.i18n;
const { Component } = wp.element;

const { RichText } = wp.blockEditor;

/**
* Module Constants
*/
const className = 'heading-block-by-gutenix-heading';


class Save extends Component {

	render() {

		const {
			attributes: {
				block_id,
				title,
				textTag,
				align
			}
		} = this.props;

		return (
			<div
				id={ `heading-block-by-gutenix-heading-${ block_id }`}
				className={ [ className ].join(' ') }
			>
				<div className={`${className}__wrap`}>
					<RichText.Content
						tagName={ textTag }
						className={ [ className + '__text', 'text-' + align ].join(' ') }
						value={title}
					/>
				</div>
			</div>
		);
	}
}

export default Save;