class Game {
  constructor({ element, grid }) {
    // определить свойства
    this.element = element;
    this.grid = grid;
    this.isPlaying = false;
    this.timerId = null;
    this.interval = 0;
    // доинициализировать свойства в методе `init`
    this.init();
  }

  init() {
    // сохранить кнопку Play в свойство и подписаться на событие `click`
    // сохранить кнопку Reset в свойство и подписаться на событие `click`
    // сохранить кнопку Random в свойство и подписаться на событие `click`
    // сохранить слайдер Speed в свойство и подписаться на событие `input`

    this.playButton = document.querySelector("#play-button");
    this.playButton.addEventListener(
      "click",
      this.handlePlayButtonClick.bind(this)
    );

    document
      .querySelector("#reset-button")
      .addEventListener("click", this.handleResetButtonClick.bind(this));

    document
      .querySelector("#randomize-button")
      .addEventListener("click", this.handleRandomizeButtonClick.bind(this));

    this.speedSlider = document.querySelector("#speed-slider");
    this.speedSlider.addEventListener(
      "change",
      this.handleSpeedSliderChange.bind(this)
    );

    document.querySelector("#speed-slider-value").innerText =
      this.speedSlider.value + "ms";
  }

  play() {
    // отметить что игра в процессе
    // изменить содержимое кнопки Play на pause (название икноки)
    // высчитать следующее поколение клеток
    let grid = this.grid.grid;
    let alive = 0;
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell.alive) alive += 1;
      });
    });
    if (!alive) return;

    this.isPlaying = true;
    this.playButton.innerText = "pause";
    this.timerId = setInterval(() => this.grid.next(), this.interval);
  }

  pause() {
    // отметить что игра присотановлена
    // изменить содержимое кнопки Play на play_arrow (название икноки)
    // очистить интервал
    this.isPlaying = false;
    this.playButton.innerText = "play_arrow";
    clearTimeout(this.timerId);
  }

  reset() {
    // отметить что игра присотановлена
    // изменить содержимое кнопки Play на play_arrow (название икноки)
    // сбросить состояние клетки
    // обнулить слайдер
    // обнулить скорость
    // очистить интервал
    this.isPlaying = false;
    this.playButton.innerText = "play_arrow";
    document.querySelector("#grid").innerHTML = null;
    this.speedSlider.value = 500;

    this.grid.reset();
    this.handleSpeedSliderChange();
  }

  randomize() {
    // если игра в процсее, то ничего делать не нужно
    // сбросить игру
    // опредлить случайное сосояние сетки
    if (this.isPlaying) return;

    this.reset();
    this.grid.randomize();
  }

  handlePlayButtonClick(event) {
    // если игра в процессе
    // приостановить игру
    // в противном случае
    // играть
    // запустить интервал обновления
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  handleResetButtonClick() {
    // обнулить игру
    this.reset();
  }

  handleRandomizeButtonClick() {
    // определить случайное состояние для игры
    this.randomize();
  }

  handleSpeedSliderChange() {
    // получить значение слайдера
    // очистить интервал
    // запустить интервал с новой скоростью
    this.interval = this.speedSlider.value;
    document.querySelector("#speed-slider-value").innerText =
      this.speedSlider.value + "ms";
    clearTimeout(this.timerId);
    if (this.isPlaying) this.play();
  }
}
