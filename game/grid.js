"use strict";

/**
 * Создает объект клетки
 * @param {number} row - Индекс ряда
 * @param {number} col - Индекс колонки
 * @param {boolean} [alive=false] - Живая ли клетка
 * @returns {{row: number, col: number, alive: boolean}} Объект клетки со свойствами row, col и alive
 */
function createCell(row, col, alive = false) {
  // вернуть объект сетки
  return { row, col, alive };
}

/**
 * Считает количество соседей вокруг клекти
 * @param {[[{row: number, col: number, alive: boolean}]]} grid - Сетка
 * @param {{row: number, col: number, alive: boolean}} cell - Клетка
 * @returns {number} - Количество соседей
 */
function countNeighbors(grid, cell) {

  // начнем с нуля
  // +1 если сверху есть живая клетка
  // +1 если сверху слева есть живая клетка
  // +1 если сверху справа есть живая клетка
  // +1 если слева есть живая клетка
  // +1 если справа есть живая клетка
  // +1 если снизу есть живая клетка
  // +1 если снизу справа есть живая клетка
  // +1 если снизу справа есть живая клетка
  // вернуть количество соседей
  let { row, col } = cell;
  let length = grid.length - 1;
  let neighbors = 0;

  if ((row - 1 > 0) && (grid[row - 1][col].alive)) neighbors += 1;
  if ((row - 1 > 0) && (col - 1 > 0) && (grid[row - 1][col - 1].alive)) neighbors += 1;
  if ((row - 1 > 0) && (col + 1 < length) && (grid[row - 1][col + 1].alive)) neighbors += 1;

  if ((col - 1 > 0) && (grid[row][col - 1].alive)) neighbors += 1;
  if ((col + 1 < length) && (grid[row][col + 1].alive)) neighbors += 1;

  if ((row + 1 < length) && (grid[row + 1][col].alive)) neighbors += 1;
  if ((row + 1 < length) && (col - 1 > 0) && (grid[row + 1][col - 1].alive)) neighbors += 1;
  if ((row + 1 < length) && (col + 1 < length) && (grid[row + 1][col + 1].alive)) neighbors += 1;

  return neighbors;
}

/**
 * Создает сетку
 * @param {number} size - Размер сетки
 * @param {boolean} [randomize=false] - Случайное определение состояния клеток в сетке
 * @returns {[[{row: number, col: number, alive: boolean}]]} - Сетка
 */
function createGrid(size, randomize = false) {
  // создать массив определенного размера (new Array(size))
  // внутри массива создать еще массивы
  // в каждый элемент массива поместить клетку
  // либо в разнобой (50% что клетка жива, 50% что клетка мертва)
  // либо начальное состояние (клетка мертва)
  // вернуть сетку
  let grid = [];

  for (let i = 0; i < size; i++) {
    let row = [];

    for (let j = 0; j < size; j++) {
      let alive = !randomize ? false : Math.floor(Math.random() * 2) ? true : false;

      row.push(createCell(i, j, alive));
    }

    grid.push(row);
  }

  return grid;
}

/**
 * Высчитывает новую сетку с новым поколением клеток согласно правилам игры
 * @param {[[{row: number, col: number, alive: boolean}]]} grid - Сетка
 * @returns {[[{row: number, col: number, alive: boolean}]]} - Новая сетка
 */
function computeGrid(grid) {
  // создать новую сетку
  // взяв одну клетку текущей сетки
  // посчитать количество соседей
  // изменить состояние клетки в новой сетке согласно правилам игры
  // вернуть новую сетку
  let newGrid = grid.slice();

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];

    for (let j = 0; j < row.length; j++) {

      let cell = grid[i][j];
      let neighbords = countNeighbors(grid, cell);

      if (neighbords < 2 || neighbords > 3) {
        newGrid[i][j] = createCell(i, j, false);

      } else if (neighbords === 3) {
        newGrid[i][j] = createCell(i, j, true);

      } else {
        newGrid[i][j] = grid[i][j];
      };
    }
  }

  return newGrid;
}

/**
 * Формирует строковое представление сетки
 * @param {[[{row: number, col: number, alive: boolean}]]} grid - Сетка
 * @returns {string} - Строковое представление сетки
 */
function renderGrid(grid) {
  // начнем с пустой строки
  // взяв одну клетку
  // если клетка жива добавить '* ' (звездочка пробел) в строку
  // иначе добавить '  ' (два пробела)
  // если клетка последняя в ряду, перейти на следующую строку (\r\n)
  // вернуть готовую строку
  let str = [];
  let length = grid.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let renderAlave = grid[i][j].alive ? '* ' : "  ";
      str.push(renderAlave);
      if (j === length - 1) str.push('\r\n');
    }
  }

  return str.join('');
}

module.exports = {
  createCell,
  countNeighbors,
  createGrid,
  computeGrid,
  renderGrid
};
