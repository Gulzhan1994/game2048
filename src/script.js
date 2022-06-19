// // Нажимаем кнопку страт или новая игра
// // В поле появляется цифры две цифры одинаковые;
// // с помощью нажатием кнопки (право и влево, вверх и вниз) перемещаем цифры в поле игры;
// // одинаковые цифры суммируя свои значения превращается в одну;
// // Если в игровой поле невозможно совершить ход то тогда игра закончиться с поражением и выйдет окно с сообщением что Вы проиграли!

// eslint-disable-next-line import/extensions
import Board from './board.js';

// GameManager отвечает за общую игровую логику, начать игру, проследить не окончена ли игра, есть ли победитель и подобная логика
class GameManager {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
        this.board = null;
    }

    init() {
        // eslint-disable-next-line no-use-before-define
        this.board = importBoard;
        this.board.init();
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl.bind(this));
    }

    checkIsGameOver() {
    }

    clickControl(event) {
        if (event.key === 'ArrowUp') {
            this.board.movingColumn('up');
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowDown') {
            this.board.movingColumn('down');
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowRight') {
            this.board.movingRow('right');
            this.board.combineRow();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowLeft') {
            this.board.movingRow('left');
            this.board.combineRow();
            this.board.generateNewCell();
        }
    }
}

const importBoard = new Board();

const gameStart = new GameManager();
gameStart.init();
