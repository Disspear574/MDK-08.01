setTimeout(function () {
	var element = document.getElementById('html')
	element.classList.add('html_visible')
}, 100)

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
