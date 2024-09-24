function checkNumber(promptInput) {

    let number = +promptInput;

    if (typeof number === 'number' && !isNaN(number)) {
        if (number % 2 === 0) {
            console.log('Чётное число');
        } else {
            console.log('Нечётное число');
        }
    } else {
        console.log('Упс, кажется, вы ошиблись');
    }
}

let input = prompt('Введите значение:');
checkNumber(input);