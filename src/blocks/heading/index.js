/**
 * Internal dependencies
 */
 import attributes from './attributes';
 import save from './save';
 import edit from './edit';

/**
 * External dependencies
 */
 import HeadingBlockByGutenixUiIcons from "components/heading-block-by-gutenix-ui-icons";

 const { __ } = wp.i18n;
 const {
 	registerBlockType
 } = wp.blocks;

/**
* Module Constants
*/
const className = 'heading-block-by-gutenix-heading';

/**
* Register the block
*/
export default registerBlockType( 'heading-block-by-gutenix/heading', {
	title: __( 'Heading', 'heading-block-by-gutenix' ),
	description: __( 'Create a heading and use responsiveness settings and styles in visual interface', 'heading-block-by-gutenix' ),
	icon: <HeadingBlockByGutenixUiIcons icon='heading' />,
	category: 'heading-block-by-gutenix',
	attributes,
	edit,
	save,
} );
