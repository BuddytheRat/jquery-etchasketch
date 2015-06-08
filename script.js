function populateTable(width, height) {
	$('#gridwrapper table').html('');
	for (var i = 1; i <= height; i++) {
		$('#gridwrapper table').append('<tr id="row_' + i + '">');
		for (var j = 1; j <= width; j++) {
			$('#gridwrapper #row_' + i).append('<td id="cell_' + i + '-' + j + '"></td>');
		} 
		$('#gridwrapper table').append('</tr>');
	}
	$('#gridwrapper td').hover(popFadeIn, popFadeOut);
};
//Effects
function popFadeIn() {
	$(this).css('opacity', '1');
};
function popFadeOut() {
	$(this).fadeTo('slow', '0.3');
};
function showInvalidForm($form) {
	$form.css('background-color', '#F00');
};
function resetInvalidForms() {
	$('#control_form input').css('background-color', '#fff');
};
//Control Panel
function resetGrid() {
	$('#gridwrapper td').fadeTo('slow', '0');
};
function changeGridSize() {
	var width = $('input[name=grid_width]').val();
	var height = $('input[name=grid_height]').val();
	if (isNaN(width)) {
		showInvalidForm($('input[name=grid_width]'));
	}
	if (isNaN(height)) {
		showInvalidForm($('input[name=grid_height]'));
	}
	if (!(isNaN(width) || isNaN(height))) {
		resetInvalidForms();
		populateTable(width, height);
	}
};
function changeGridColor() {
	var color = $('input[name=grid_color]').val();
	if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
		$('#gridwrapper td').css('background-color', color);
	} else {
		showInvalidForm($('input[name=grid_color]'));
	}
};
//Initialize
function docReady() {
	//Populate Table
	var tableWidth = 16;
	var tableHeight = 16;
	var tableColor = "#D05";
	populateTable(tableWidth, tableHeight);
	//Populate Control Panel Settings
	$('input[name=grid_width]').val(tableWidth);
	$('input[name=grid_height]').val(tableHeight);
	$('input[name=grid_color]').val(tableColor);
	//Event Handlers
	$('#gridwrapper #button_reset').click(resetGrid);
	$('#gridwrapper #button_grid').click(changeGridSize);
	$('#gridwrapper #button_color').click(changeGridColor);
};
$(document).ready(docReady);