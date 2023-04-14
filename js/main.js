let btn = document.getElementById("btnup"); // элемент с id - btnup становится переменной btn
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (window.matchMedia("(min-width: 1024px)").matches) { // Если ширина меньше 1024px, то
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20 // Если скроллим больше 20px, то
    ) {
      btn.style.display = "block"; // Отображаем кнопку
    } else {
      btn.style.display = "none"; // Если в самом верху, убираем
    }
  } else {
    btn.style.display = "none"; // Убираем кнопку.
  }
}

function TOPB() {
  document.documentElement.scrollTop = 0; // При нажатии возращаемся наверх
}
