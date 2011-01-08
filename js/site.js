$(document).ready(function() {
	$("#years").accordion({autoHeight: false});
	$("#menu a").each(function() {
		if($(this).attr("href") == location.href.toLowerCase()) {
			$(this).addClass("active");
		}
	});
	$(".projects h4").each(function() {
		$(this).prepend('<span class="ui-icon ui-icon-arrowthick-1-e"></span>');
	});
});