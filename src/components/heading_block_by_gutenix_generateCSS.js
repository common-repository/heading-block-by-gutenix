
function heading_block_by_gutenix_generateCSS ( selectors, id, isResponsive = false, responsiveType = "" ) {

var heading_block_by_gutenix_styling_css = ""
	var breakpoint = ""
	var gen_styling_css  = ""
	var res_styling_css  = ""

	if ( responsiveType == "tablet" ) {
		breakpoint = 768//heading_block_by_gutenix_tablet_breakpoint 
	} else if ( responsiveType == "mobile" ) {
		breakpoint = 450 //heading_block_by_gutenix_mobile_breakpoint
	}


	for( var i in selectors ) {

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {
			
			var checkString = true
			
			if( typeof sel[j] === "string" && sel[j].length === 0 ) {
				checkString = false
			}

			if( typeof sel[j] != "undefined" && checkString ) {
				css += j + ": " + sel[j] + ";"
			}
		}

		if( css.length !== 0 ) {
			gen_styling_css += id
			gen_styling_css += i + "{"
			gen_styling_css += css
			gen_styling_css += "}"
		}
	}

	if ( isResponsive && typeof gen_styling_css !== "undefined" && gen_styling_css.length !== 0 ) {
		res_styling_css += "@media only screen and (max-width: " + breakpoint + "px) {"
		res_styling_css += gen_styling_css
		res_styling_css += "}"
	}

	if( isResponsive ) {
		return res_styling_css
	} else {
		return gen_styling_css
	}
}

export default heading_block_by_gutenix_generateCSS
