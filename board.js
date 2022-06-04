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
    movingColumn(direction) {
        for (let i = 0; i < this.widthBoard; i++) {
            this.fillColumn(i, direction === 'up', direction === 'down');
        }
    }
    movingRow(direction) {
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            if (i % 4 === 0) {
                this.fillRow(i, direction === 'left', direction === 'right');
            }
        }
    }
    fillRow(rowIndex, isLeft) {
        const row = [];
    
        for (let i = 0; i < this.widthBoard; i++) {
            row.push(this.squares[rowIndex + i].getValue());
        }
    
        let filteredRow = row.filter(num => num);
        let emptyCellInRowSize = this.widthBoard - filteredRow.length;
    
        let newRow = this.makeNewSequence(filteredRow, emptyCellInRowSize, isLeft);
    
        newRow.forEach((value, i) => {
            this.squares[rowIndex + i].setValue(value);
        });
    }
    fillColumn(indexColumn, isUp) {
        const column = [];
    
        for (let i = 0; i < this.widthBoard; i++) {
            column.push(this.squares[indexColumn + this.widthBoard * i ].getValue());
        }
    
        let filteredColumn = column.filter(num => num);
        let emptyCellInColumnSize = this.widthBoard - filteredColumn.length;
    
        let newColumn = this.makeNewSequence(filteredColumn, emptyCellInColumnSize, isUp);
    
        newColumn.forEach((value, i) => {
            this.squares[indexColumn + (this.widthBoard * i)].setValue(value);
        });
    }
    makeNewSequence(numbers, emptySequensSize, isReverse) {
        let emptySequence = Array(emptySequensSize).fill('');
    
        return isReverse ? numbers.concat(emptySequence) : emptySequence.concat(numbers);
    }
    combineColumn() {
        for (let i = 15; i >= 4; i--) {
            if ((this.squares[i].getValue() === this.squares[i - this.widthBoard].getValue()) && this.squares[i].getValue() !== '') {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - this.widthBoard].getValue());
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - this.widthBoard].setValue('');
            }
        }
        
        // проверить на выигрыш
    }
    combineRow() {
        for (let i = 15; i > 1; i--) {
            if ((this.squares[i].getValue() === this.squares[i - 1].getValue()) && this.squares[i].getValue() !== '' && i % 4 !== 0) {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - 1].getValue())
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - 1].setValue('');
            }
        }
        
        // проверить на выигрыш
    }
}

