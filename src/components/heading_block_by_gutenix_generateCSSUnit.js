
function generateCSSUnit ( value, unit ) {

	var css = ""

	if( ( (value !== "undefined") ? value : undefined ) && value !== "" && value !== false || value === 0) {
		css += value + unit
	}

	return css 
}

export default generateCSSUnit
