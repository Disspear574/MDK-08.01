$(function () {
	$('.menu a').each(function () {
		var location = window.location.href
		var link = this.href
		if (location == link) {
			$(this).addClass('active')
		}
	})
})
setTimeout(function () {
	var element = document.getElementById('html')
	element.classList.add('html_visible')
}, 100)
