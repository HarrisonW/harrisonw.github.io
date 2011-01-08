$(document).ready(function() {
	$("#years").accordion({autoHeight: false});
	$("#menu a").each(function() {
		if($(this).attr("href") == location.href.toLowerCase()) {
			$(this).addClass("active");
		}
	});
});