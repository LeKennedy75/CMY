// Dragging

$(function(){
	$("#cmyk circle").draggable({
		drag: function(event, ui){
			$(this).prop("cx").baseVal.value = ui.position.left + $(this).prop("r").baseVal.value;
			$(this).prop("cy").baseVal.value = ui.position.top + $(this).prop("r").baseVal.value;
		}
	});
});

// Colors from https://twitter.com/TRASEVOL_DOG/status/870415740209434624