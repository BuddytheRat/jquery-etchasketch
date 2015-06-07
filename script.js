function docReady() {
	//Populate table.
	var tableWidth = 16;
	var tableHeight = 16;
	for (var i = 1; i <= tableHeight; i++) {
		$('#gridwrapper > table').append("<tr>");
		for (var i = 1; i <= tableWidth; i++) {
			$('#gridwrapper > table').append("<td>");
		}
		$('#gridwrapper > table').append("</tr>");
	}
};
$(document).ready(docReady);