'use strict';

/**
 * Создает объект клетки
 * @param {number} row - Индекс ряда
 * @param {number} col - Индекс колонки
 * @param {boolean} [alive=false] - Живая ли клетка
 * @returns {{row: number, col: number, alive: boolean}} Объект клетки со свойствами row, col и alive
 */
function createCell(row, col, alive = false) {
    // вернуть объект сетки
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
}

module.exports = {
    createCell,
    countNeighbors,
    createGrid,
    computeGrid,
    renderGrid
};