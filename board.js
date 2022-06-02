import Cell from './cell.js';

export const scoreDisplay = document.querySelector('.score');
export const resultDisplay = document.querySelector('.result');
export const colorCell = [
    '#afa192', 
    '#eee4da', 
    '#ede0c8', 
    '#f2b179', 
    '#ffcea4', 
    '#e8c064', 
    '#ffab6e', 
    '#fd9982', 
    '#ead79c', 
    '#76daff', 
    '#beeaa5', 
    '#d7d4f0',
];

// класс Board отвечает за игровое поле, создание новых ячеек на поле, логику объединения ячеек при клике на клавиши.

export default class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.wrapper');
    }
    init() {
        const grid = document.querySelector('.grid');
        for(let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const cell = new Cell();
            grid.appendChild(cell.getNewElement());
            this.squares.push(cell);
        }
        this.wrapper.appendChild(grid);


    }
    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length);

        if (this.squares[randomNumber].getValue() === '') {
            this.squares[randomNumber].setValue(2);

            this.addColours();
        } 
    }
    addColours() {  // функция будет добавлять цвет ячейкам на поле
        this.squares.forEach(function(square) {
            square.dom.style.backgroundColor = colorCell[Math.trunc(Math.sqrt(square.getValue()))];
        })
    }
}

