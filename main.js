//завд 1 

function countLetter(str, letter) {
    let count = 0;
    let target = letter.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === target) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter = 'a') {
    let count1 = countLetter(firstRow, letter);
    let count2 = countLetter(secondRow, letter);

    if (count1 > count2) {
        return firstRow;
    } else {
        return secondRow;
    }
}

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';
console.log('--- Завдання 1 ---');
console.log('Результат getRow:', getRow(firstRow, secondRow));

function runTask1() {
    let str1 = prompt('Введіть перший рядок:', firstRow);
    if (!str1) return;

    let str2 = prompt('Введіть другий рядок:', secondRow);
    if (!str2) return;

    let char = prompt('Введіть літеру для пошуку:', 'a');
    if (!char) char = 'a';

    let winner = getRow(str1, str2, char);
    let c1 = countLetter(str1, char);
    let c2 = countLetter(str2, char);

    alert(`Рядок 1 містить '${char}': ${c1}\nРядок 2 містить '${char}': ${c2}\n\nРядок з більшою кількістю:\n"${winner}"`);
}


//завд 2 

function formattedPhone(phone) {
    if (typeof phone !== 'string') {
        return 'Неправильний формат';
    }

    let digits = phone.replace(/\D/g, '');
    let num = '';

    if (digits.length === 12 && digits.startsWith('380')) {
        num = digits.slice(3);
    } else if (digits.length === 11 && digits.startsWith('80')) {
        num = digits.slice(2);
    } else if (digits.length === 10 && digits.startsWith('0')) {
        num = digits.slice(1);
    } else {
        return 'Неправильний формат';
    }

    let code = num.slice(0, 3);
    let part1 = num.slice(3, 6);
    let part2 = num.slice(6, 8);
    let part3 = num.slice(8, 10);

    return `+38 (${code}) ${part1}-${part2}-${part3}`;
}

console.log('--- Завдання 2 ---');
console.log(formattedPhone('+380664567890'));
console.log(formattedPhone('80971234567'));
console.log(formattedPhone('0671234567'));

function runTask2() {
    let input = prompt('Введіть номер телефону:', '+380664567890');
    if (input) {
        let result = formattedPhone(input);
        alert(`Відформатований номер:\n${result}`);
    }
}