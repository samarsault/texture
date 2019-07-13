//
// Texture Picker
//

window.onload = function() {
	// Handle Texture Picker
	const $picker = document.querySelector('#texture-picker');
	const $header = document.querySelector('header');
	
	$picker.onclick = function(e) {
		const textureName = e.target.id;
		if (textureName && textureName != 'texture-picker') {
			$header.setAttribute('class', `texture-${textureName}`);
		}
	}
}