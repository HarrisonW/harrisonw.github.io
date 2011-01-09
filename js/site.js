function getPageName(string) {
  parts = string.toLowerCase().split('/');
  return parts[parts.length - 1];
}
$(document).ready(function() {
	$("#years").accordion({autoHeight: false});
	$("#menu a").each(function() {
		if(getPageName($(this).attr("href")) == getPageName(location.href)) {
			$(this).addClass("active");
			div = $('<div class="callout"></div>');
			div.css('top',$(this).offset().top-15);
			$('#menu').after(div);
		}
	});
	$(".projects h4").each(function() {
		$(this).prepend('<span class="ui-icon ui-icon-arrowthick-1-e"></span>');
	});
});