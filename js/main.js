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

let btn = document.getElementById('btnup') // элемент с id - btnup становится переменной btn
window.onscroll = function () {
	scroll()
}

function scroll() {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		// Если ширина меньше 1024px, то
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20 // Если скроллим больше 20px, то
		) {
			btn.style.display = 'block' // Отображаем кнопку
		} else {
			btn.style.display = 'none' // Если в самом верху, убираем
		}
	} else {
		btn.style.display = 'none' // Убираем кнопку.
	}
}

function TOPB() {
	document.documentElement.scrollTop = 0 // При нажатии возращаемся наверх
}
var html = document.getElementById('html')
function asd() {
	html.classList.add('html_visible')
}
setTimeout(asd, 1000)
