// Нажимаем кнопку страт или новая игра
// В поле появляется цифры две цифры одинаковые;
// с помощью нажатием кнопки (право и влево, вверх и вниз) перемещаем цифры в поле игры;
// одинаковые цифры суммируя свои значения превращается в одну;
// Если в игровой поле невозможно совершить ход то тогда игра закончиться с поражением и выйдет окно с сообщением что Вы проиграли!

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
    } else {
        console.log('нажата кнопка стрелка налево');
    }
}


document.addEventListener('keyup', clickControl);

class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.wrapper');
    }
    init() {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < this.width * this.weidth; i++) {
            let square = document.createElement('div');
            square.innerHTML = '';
            square.className = 'cell';
            fragment.appendChild(square);
            squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }
    generateNewCell() {

    }
    addColours() {
        this.squares.forEach(function(square) {
            square[i].style.backgroundColor = colorCell[i];
        })
    }
    
}

class GameManager {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
        this.board = null;
    }
    init() {
        this.board = new Board();
        document.addEventListener('keyup', clickControl);
    }
    checkIsGameOver() {
        console.log(checkIsGameOver());
    }
}

const gameStart = new GameManager();
gameStart.init();


class Cell {
    constructor() {
        this.value = '';
        this.dom = null;
    }
    getValue() { 
        return this.value;
    }
    setValue() {
        console.log(setValue());
    }
    getNewElement() {
        console.log(getNewElement());
    }
}