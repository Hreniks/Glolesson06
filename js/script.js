'use strict';
const number = 50;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function bot(){

    function ask(){
        let answer = +prompt('Угадай число от 1 до 100');
        if (!isNumber(answer)) {
            alert('Введи число!');
            ask();
        }
        console.log('answer: ', answer);
        return answer;
    }


    const PersonNumber = ask();

    if (PersonNumber === 0 || PersonNumber === null) return alert('Игра окончена!');
    else if (PersonNumber > number) {
        alert('Загаданное число больше');
        return bot();
       
    }
    else if (PersonNumber < number){
        alert('Загаданное число меньше');
        return bot();
       
    }
    else if (PersonNumber === number){
        return alert('Поздравляю, вы угадали!');
    }

}

bot();