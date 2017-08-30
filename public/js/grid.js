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

    this.next();
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
    const { row, col } = cell;
    const len = this.grid.length - 1;
    let aliveNeighbords = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if ((i === row && j === col) || i < 0 || j < 0 || i > len || j > len)
          continue;

        if (this.grid[i][j].alive) aliveNeighbords += 1;
      }
    }

    return aliveNeighbords;
  }

  reset() {
    // привести сетку в исходное состояние
    this.init();
  }

  resetBuffer() {
    // привести буфер в исходное состояние
    this.nextGrid.forEach(row => {
      row.forEach(cell => {
        cell._alive = false;
      });
    });
  }

  randomize() {
    // определить случайное состояние для сетки
    this.grid.forEach(row => {
      row.forEach(cell => {
        let random = Math.floor(Math.random() * 2);
        cell._alive = random ? true : false;
      });
    });
  }

  next() {
    // высчитать следующее поколение клеток
    this.grid.forEach(row => {
      row.forEach(cell => {
        const { row, col } = cell;
        const neighbords = this.countNeighbors(cell);
        let alive;

        if (neighbords < 2 || neighbords > 3) {
          alive = false;
        } else if (neighbords === 3) {
          alive = true;
        } else {
          alive = cell.alive;
        }
        console.log(row, col, neighbords, alive);
        console.log(this.grid[row][col]);
        this.nextGrid[row][col]._alive = alive;
        console.log(this.nextGrid[row][col]._alive);
      });
    });

    console.log(this.nextGrid);
    // обнулить буфер
  }
}
