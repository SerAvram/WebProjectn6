function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input')

const boxes = document.getElementById('boxes')
const buttons = document.querySelectorAll('#controls button')
const create = buttons[0]
const destroy = buttons[1]

create.addEventListener('click', () => {
    createBoxes(input.value)
})

destroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
    if (amount < 1 || amount > 100) {
        alert("Впишіть число від 1 до 100")
        return
    }
    destroyBoxes()
    for (let i = 0; i < amount; i++) {
        const new_elem = document.createElement('div')
        const randomColor = getRandomHexColor();
        new_elem.style.width = `${30 + (10 * i)}px`
        new_elem.style.height = `${30 + (10 * i)}px`
        new_elem.style.backgroundColor = `${randomColor}`
        boxes.append(new_elem)
    }
}

function destroyBoxes() {
    while (boxes.hasChildNodes()) {
        boxes.removeChild(boxes.firstChild)
    }
}