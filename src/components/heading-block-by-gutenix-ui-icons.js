export default class HeadingBlockByGutenixUiIcons extends wp.element.Component {
	shouldComponentUpdate( nextProps ) {
		return (
			this.props.icon !== nextProps.icon
		);
	}

	render() {
		const { icon }    = this.props;
		const defaultIcon = '36';

		let iconID;
		let map = {
			'circle-progress': 'Circle-progress',
			'pricing-table': 'Pricing-Table',
			'map': 'Advanced-Map',
			'timer': 'Countdown-Timer',
			'animated-box': 'Animated-Box',
			'banner': 'Banner',
			'progress-bar': 'Progres-Bar',
			'inline-svg': 'Inline-SVG',
			'image-comparison': 'Image-Comparison',
			'posts': 'Post',
			'section' : 'Section',
			'grid_posts' : 'Grid',
			'list_posts' : 'List',
			'uneven_posts' : 'Uneven',
			'masonry_posts' : 'Masonry',
			'desktop_icon' : 'Desktop',
			'tablet_icon' : 'Tablet',
			'mobile_icon' : 'Mobile',
			'category_icon' : 'Category',
			'columns' : 'Advancet-Columns',
			'left' : 'Align-Left',
			'center' : 'Align-Center',
			'right' : 'Align-Right',
			'justify' : 'Align-Justify',
			'vertical_align_top' : 'Vertical-Align-Top',
			'vertical_align_middle' : 'Vertical-Align-Middle',
			'vertical_align_bottom' : 'Vertical-Align-Bottom',
			'pull_left' : 'Pull-Left',
			'pull_right' : 'Pull-Right',
			'heading' : 'Heading',
			'logo' : 'Logo',
			'icon_list' : 'Icon-List',
			'blurbs' : 'Blurbs',
			'carousel_posts' : 'Carousel',
			'button' : 'Button',
			'subscribe' : 'Subscribe',
			'cf7' : 'CF7',
			'tabs' : 'Tabs',
			'testimonials' : 'Testimonials',
			'team' : 'Team',
		}

		if ( map[ icon ] ) {
			iconID = map[ icon ];
		} else {
			iconID = defaultIcon;
		}

		return (
			<i className={`heading-block-by-gutenix-icon-${iconID}`} aria-hidden="true"></i>
		);
	}
}