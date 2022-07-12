// // Нажимаем кнопку страт или новая игра
// // В поле появляется цифры две цифры одинаковые;
// // с помощью нажатием кнопки (право и влево, вверх и вниз) перемещаем цифры в поле игры;
// // одинаковые цифры суммируя свои значения превращается в одну;
// // Если в игровой поле невозможно совершить ход то тогда игра закончиться с поражением и выйдет окно с сообщением что Вы проиграли!

import Board from './board.js';

export const scoreDisplay = document.querySelector('.score');
export const resultDisplay = document.querySelector('.result');

// GameManager отвечает за общую игровую логику, начать игру, проследить не окончена ли игра, есть ли победитель и подобная логика
class GameManager {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
        this.board = null;
    }

    init() {
        // eslint-disable-next-line no-use-before-define
        this.board = new Board();
        this.board.init();
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl.bind(this));
    }

    clickControl(event) {
        if (event.key === 'up') {
            this.board.movingColumn();
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'down') {
            this.board.movingColumn('down');
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'right') {
            this.board.movingRow('right');
            this.board.combineRow();
            this.board.generateNewCell();
        } else if (event.key === 'left') {
            this.board.movingRow();
            this.board.combineRow();
            this.board.generateNewCell();
        }
    }

    checkForGameOver() {
        const zeros = 0;
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i].getValue() == 8) {
                alert('You win!');
                document.removeEventListener('keyup', this.clickControl.bind(this));
            }

            if (zeros === 0) {
                resultDisplay.innerHTML = 'You lose!';
                document.removeEventListener('keyup', this.clickControl.bind(this));
            }
        }
    }
}

const gameStart = new GameManager();
gameStart.init();
