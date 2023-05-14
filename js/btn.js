// Button UP
let btn = document.getElementById('btnup')
window.onscroll = function () {
	scroll()
}
function scroll() {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			btn.style.display = 'block'
		} else {
			btn.style.display = 'none'
		}
	} else {
		btn.style.display = 'none'
	}
}
function TOPB() {
	document.documentElement.scrollTop = 0
}
