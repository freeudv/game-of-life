class Grid {
  constructor({ element, size }) {
    // определить свойства
    this.element = element;
    this.size = size;
    this.grid = [];
    this.nextGrid = [];

    // доинициализировать свойства в методе `init`
    this.init();
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
        tr.appendChild(td);

        row.push(new Cell({ element: td, row: i, col: j }));
      }

      table.appendChild(tr);
      this.grid.push(row);
    }

    //Вариант 2
    // this.grid = Array.from(new Array(this.size), (row, i) => {
    //   let tr = document.createElement("tr");
    //   let gridRow = Array.from(new Array(this.size), (cell, j) => {
    //     let td = document.createElement("td");
    //     tr.appendChild(td);

    //     return new Cell({ element: td, row: i, col: j })
    //   })

    //   table.appendChild(tr);
    //   return gridRow;
    // })

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
    this.grid = [];

    this.resetBuffer();
    this.init();
  }

  resetBuffer() {
    // привести буфер в исходное состояние
    this.nextGrid = [];
  }

  randomize() {
    // определить случайное состояние для сетки
    for (let row of this.grid) {
      for (let cell of row) {
        let random = Math.floor(Math.random() * 2);
        cell.alive = random ? true : false;
      }
    }

    // Вариант 2
    // this.grid.forEach(row => {
    //   row.forEach(cell => {
    //     let random = Math.floor(Math.random() * 2);
    //     cell.alive = random ? true : false;
    //   });
    // });
  }

  next() {
    // высчитать следующее поколение клеток
    this.grid.forEach(row => {
      let nextRow = [];

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

        nextRow.push(alive);
      });

      this.nextGrid.push(nextRow);
    });

    // Вариант 2
    // this.nextGrid = Array.from(new Array(this.size), (row, i) =>
    //   Array.from(new Array(this.size), (cell, j) => {
    //     const computedCell = this.grid[i][j];
    //     const neighbords = this.countNeighbors(computedCell);
    //     let alive;

    //     if (neighbords < 2 || neighbords > 3) {
    //       alive = false;
    //     } else if (neighbords === 3) {
    //       alive = true;
    //     } else {
    //       alive = computedCell.alive;
    //     }

    //     return alive;
    //   }))

    // заменить текущее состояние клеток на следующее поколение
    for (let row of this.grid) {
      for (let cell of row) {
        const { row, col } = cell;
        cell.alive = this.nextGrid[row][col];
      }
    }

    // Вариант 2
    // this.grid.forEach(row => {
    //   row.forEach(cell => {
    //     const { row, col } = cell;
    //     cell.alive = this.nextGrid[row][col];
    //   });
    // });

    // обнулить буфер
    this.resetBuffer();
  }
}
