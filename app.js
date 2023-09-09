/*Создание галереи из карточек

научитесь делать галерею карточек на JavaScript и взаимодействовать с ними с помощью CSS без применения сторонних библиотек.
*/

/* Ф-я реализации слайдера
при вызове данной ф-ции в параметр передаем слайд, который хотим сделать активным
если ничего не передаем, то по умолчанию будет активен первый слайд (activeSlide = 0)
*/
function slidesPlugin(activeSlide = 0) {
  /* Получаем все слайды */
  const slides = document.querySelectorAll(".slide");

  /* Добавляем слайду, указанному в параметре при вызове ф-ии, класс active */
  slides[activeSlide].classList.add("active");

  /* Обходим массив полученных слайдов и навешиваем обработчик событий на клик по слайду.
  Обработчик вызывает ф-ю clearActive(), кот-я убирает со всех слайдов класс .active
  Затем обработчик навешивает на слайд, по которому кликнули, класс .active
  */
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  /* Ф-я для удаления класса .active со всех слайдов */
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();
