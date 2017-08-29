"use strict";

const { createGrid, computeGrid, renderGrid } = require("./grid");

module.exports = ({ size }) => {
  // 1. создать сетку определенного размера с клетками в случайном порядке
  let grid = createGrid(size, true);

  function play() {
    // 2. высчитать новую сетку на основе текущей
    let newGrid = computeGrid(grid);
    // 3. заменить текущую сетку на новую
    grid = newGrid;
    // 4. вернуть строковое представление новой сетки
    return renderGrid(newGrid);
  }

  return {
    play
  };
};
