class Grid {
  constructor({ element, size }) {
    // определить свойства
    this.element = element;
    this.size = size;
    this.grid = [];
    this.nextGrid = [];

    // доинициализировать свойства в методе `init`
    this.init();

    this.randomize();
  }

  init() {
    // ЗАМЕТКА: DOM-элементы создаются с помощью метода createElement('название элемента')
    // создать таблицу и сохранить ее в свойство
    // создать массивы для клеток и буфера (временное хранение для расчета следующего поколения)
    // перебрать ряды
    // создать элемент tr
    // доинициализировать массивы для клеток и буфера
    // перебрать столбцы
    // создать клетку
    // добавить ее в ряд
    // сохранить ее в сетку
    // продублировать значение в буфере
    // добавить ряд в таблицу
    // добавить таблицу в элемент
    let table = document.createElement("table");

    for (let i = 0; i < this.size; i++) {
      let row = [];
      let tr = document.createElement("tr");

      for (let j = 0; j < this.size; j++) {
        let td = document.createElement("td");
        let cell = new Cell({ element: td, row: i, col: j });

        tr.appendChild(td);
        row.push(cell);
      }

      table.appendChild(tr);
      this.grid.push(row);
      this.nextGrid.push(row);
    }

    this.element.appendChild(table);
  }

  countNeighbors(cell) {
    // высчитать и вернуть количество соседей у клетки
  }

  reset() {
    // привести сетку в исходное состояние
    this.init();
  }

  resetBuffer() {
    // привести буфер в исходное состояние
    this.nextGrid.forEach(row => {
      row.forEach(cell => {
        cell.alive = false;
      });
    });
  }

  randomize() {
    // определить случайное состояние для сетки
    this.grid.forEach(row => {
      row.forEach(cell => {
        let random = Math.floor(Math.random() * 2);
        cell.alive = random ? true : false;
      });
    });
  }

  next() {
    // высчитать следующее поколение клеток
    // обнулить буфер
  }
}
