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
        for(let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            let square = document.createElement('div');
            square.innerHTML = '';
            square.className = 'grid-cell';
            fragment.appendChild(square);
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
        
    }
    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length);

        if (this.squares[randomNumber].innerHTML === '') {
            this.squares[randomNumber].innerHTML = 2;
            addColours();
            // проверить на GameOver
        } 
    }
    addColours() {
        for (let i = 0; i < this.squares; i++) {
            this.squares[i].style.backgroundColor = colorCell[Math.trunc(Math.sqrt(this.squares[i].innerHTML))];
        }
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














