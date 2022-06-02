// класс Cell отвечает за отдельную ячейку, её значение, цвет и ссылку на DOM элемент.

export default class Cell {
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