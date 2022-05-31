// // Нажимаем кнопку страт или новая игра
// // В поле появляется цифры две цифры одинаковые;
// // с помощью нажатием кнопки (право и влево, вверх и вниз) перемещаем цифры в поле игры;
// // одинаковые цифры суммируя свои значения превращается в одну;
// // Если в игровой поле невозможно совершить ход то тогда игра закончиться с поражением и выйдет окно с сообщением что Вы проиграли!

const scoreDisplay = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
const colorCell = [
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

function clickControl(event) {
    console.log(event.key);
    if(event.key === 'ArrowUp') {
        console.log('нажата кнопка стрелка вверх');
    } else if(event.key === 'ArrowDown') {
        console.log('нажата кнопка стрелка вниз');
    } else if(event.key === 'ArrowRight') {
        console.log('нажата кнопка стрелка направо');
    } else if(event.key === 'ArrowLeft') {
        console.log('нажата кнопка стрелка налево');
    }
}

document.addEventListener('keyup', clickControl);

// GameManager отвечает за общую игровую логику, начать игру, проследить не окончена ли игра, есть ли победитель и подобная логика
class GameManager {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
        this.board = null;
    }
    init() {
        this.board = new Board();
        this.board.init();

        this.board.generateNewCell();
        this.board.generateNewCell();
        
        document.addEventListener('keyup', clickControl);
    }
    checkIsGameOver() {
    }

}

// класс отвечает за отдельную ячейку, её значение, цвет и ссылку на DOM элемент.
class Cell {
    constructor() {
        this.value = '';
        this.dom = null;
    }
    getValue() { 
        return this.value;
    }
    setValue(value) {
        this.dom.textContent = value;
        this.value = value;
    }
    getNewElement() {
        let square = document.createElement('div');
        square.innerHTML = '';
        square.className = 'cell';
        this.dom = square;
        return square;
    }
}

// класс отвечает за игровое поле, создание новых ячеек на поле, логику объединения ячеек при клике на клавиши.
class Board {
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


const gameStart = new GameManager();
gameStart.init();

















