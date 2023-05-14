// Active Menu
const currentLocation = location.href
const menuItem = document.querySelectorAll('.menu-link')
const menuLenght = menuItem.length
for (let i = 0; i < menuLenght; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = 'menu-link active'
	} else {
		menuItem[i].className = 'menu-link passive'
	}
}

// Html Visible
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
