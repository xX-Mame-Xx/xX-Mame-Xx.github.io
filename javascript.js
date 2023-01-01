$('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-60;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});