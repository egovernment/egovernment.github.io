$(document).ready(function(e) {
	console.log(location);

	if(location.href.indexOf("tanzania") !== -1) {
		$('.logo-default').css('display', 'none');
		$('.logo-tanzania').css('display', 'block');
	}
})
