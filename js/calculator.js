const resultHeading = document.querySelector('#result')
const str = document.querySelector('#input')

const ac = document.querySelector('#ac')
const c = document.querySelector('#c')
const percent = document.querySelector('#percent')
const divide = document.querySelector('#divide')
const mult = document.querySelector('#mult')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const dot = document.querySelector('#dot')
const calc = document.querySelector('#calc')

const number0 = document.querySelector('#number0')
const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const number3 = document.querySelector('#number3')
const number4 = document.querySelector('#number4')
const number5 = document.querySelector('#number5')
const number6 = document.querySelector('#number6')
const number7 = document.querySelector('#number7')
const number8 = document.querySelector('#number8')
const number9 = document.querySelector('#number9')

const numbersArr = [number0, number1, number2, number3, number4, number5 ,number6, number7 ,number8, number9]



function calculate(fn) {
    return new Function('return ' + fn) ()
}

function allClear() {
    if (str.value === '') {
        resultHeading.innerHTML = 'Result is: '
    }
    return str.value = ''
}

function clear() {
    return str.value = str.value.substr(0, str.value.length - 1)
}

function getPercent() {
    return str.value = str.value / 100
}

function inputNumbers(number) {
    return str.value += number
}

function inputDivide() {
    return str.value += '/'
}

function inputMult() {
    return str.value += '*'
}

function inputMinus() {
    return str.value += '-'
}

function inputPlus() {
    return str.value += '+'
}

function inputDot() {
    return str.value += '.'
}

function getResult() {
    let string = document.querySelector('#input').value
    let result = ''
    if (isNaN(string[string.length - 1])) {
        result = 'Error: check the expression'
    } else {
        result = 'Result is: ' + calculate(string)
    }
    return resultHeading.innerHTML = result
}


// Clicks

ac.addEventListener('click', () => allClear())

c.addEventListener('click', () => clear())

percent.addEventListener('click', () => getPercent())

numbersArr.map((item, i) => item.addEventListener('click', () => inputNumbers(i)))

divide.addEventListener('click', () => inputDivide())

mult.addEventListener('click', () => inputMult())

minus.addEventListener('click', () => inputMinus())

plus.addEventListener('click', () => inputPlus())

dot.addEventListener('click', () => inputDot())

calc.addEventListener('click', () => getResult())


// Keydown Enter

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        getResult()
    }  
})

// Keydowns Digits

document.addEventListener('keydown', (key) => {
    switch (key.keyCode) {
        case 48:
            inputNumbers('0')
            break
        case 49:
            inputNumbers('1')
            break
        case 50:
            inputNumbers('2')
            break
        case 51:
            inputNumbers('3')
            break
        case 52:
            inputNumbers('4')
            break
        case 53:
            inputNumbers('5')
            break
        case 54:
            inputNumbers('6')
            break
        case 55:
            inputNumbers('7')
            break
        case 56:
            inputNumbers('8')
            break
        case 57:
            inputNumbers('9')
            break
    }
})

// Keydowns Numpad

document.addEventListener('keydown', (key) => {
    switch (key.keyCode) {
        case 96:
            inputNumbers('0')
            break
        case 97:
            inputNumbers('1')
            break
        case 98:
            inputNumbers('2')
            break
        case 99:
            inputNumbers('3')
            break
        case 100:
            inputNumbers('4')
            break
        case 101:
            inputNumbers('5')
            break
        case 102:
            inputNumbers('6')
            break
        case 103:
            inputNumbers('7')
            break
        case 104:
            inputNumbers('8')
            break
        case 105:
            inputNumbers('9')
            break
    }
})

// Keydowns Operators and clear

document.addEventListener('keydown', (key) => {
    switch (key.keyCode) {
        case 189:
            inputMinus()
            break
        case 187:
            inputPlus()
            break
        case 56:
            inputMult()
            break
        case 191:
            inputDivide()
            break
        case 190:
            inputDot()
            break
        case 107:
            inputPlus()
            break
        case 109:
            inputMinus()
            break
        case 111:
            inputDivide()
            break
        case 106:
            inputMult()
            break
        case 110:
            inputDot()
            break
        case 8:
            clear()
            break
        case 27:
            allClear()
            break
    }
})