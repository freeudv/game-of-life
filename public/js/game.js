class Game {
  constructor({ element, grid }) {
    // определить свойства
    this.element = element;
    this.grid = grid;
    // доинициализировать свойства в методе `init`
  }

  init() {
    // сохранить кнопку Play в свойство и подписаться на событие `click`
    // сохранить кнопку Reset в свойство и подписаться на событие `click`
    // сохранить кнопку Random в свойство и подписаться на событие `click`
    // сохранить слайдер Speed в свойство и подписаться на событие `input`
  }

  play() {
    // отметить что игра в процессе
    // изменить содержимое кнопки Play на pause (название икноки)
    // высчитать следующее поколение клеток
  }

  pause() {
    // отметить что игра присотановлена
    // изменить содержимое кнопки Play на play_arrow (название икноки)
    // очистить интервал
  }

  reset() {
    // отметить что игра присотановлена
    // изменить содержимое кнопки Play на play_arrow (название икноки)
    // сбросить состояние клетки
    // обнулить слайдер
    // обнулить скорость
    // очистить интервал
  }

  randomize() {
    // если игра в процсее, то ничего делать не нужно
    // сбросить игру
    // опредлить случайное сосояние сетки
  }

  handlePlayButtonClick(event) {
    // если игра в процессе
    // приостановить игру
    // в противном случае
    // играть
    // запустить интервал обновления
  }

  handleResetButtonClick(event) {
    // обнулить игру
  }

  handleRandomizeButtonClick(event) {
    // определить случайное состояние для игры
  }

  handleSpeedSliderChange(event) {
    // получить значение слайдера
    // очистить интервал
    // запустить интервал с новой скоростью
  }
}
