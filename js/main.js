$(function () {
	$('#menu .nav .menu a').each(function () {
		var location = window.location.href
		var link = this.href
		if (location == link) {
			$(this).addClass('active')
		}
	})
})
const activepage = window.location
console.log(activepage)
setTimeout(function () {
	var element = document.getElementById('html')
	element.classList.add('html_visible')
}, 200)

// Swiper slider
const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextE1: '.swiper-button-next',
		prevE1: '.swiper-button-prev',
	},
	effect: 'cube',
})
