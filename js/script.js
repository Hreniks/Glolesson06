'use strict';
const number = 50;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function bot(a){

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
    let attempts = a;

    if (attempts !== 0){
    if (PersonNumber === 0 || PersonNumber === null) return alert('Игра окончена!');
    else if (PersonNumber > number) {
        alert('Загаданное число больше, осталось попыток: ' + attempts);
        return bot(attempts--);
       
    }
    else if (PersonNumber < number){
        alert('Загаданное число меньше, осталось попыток: ' + attempts);
        attempts--;
        return bot(attempts--);
       
    }
    else if (PersonNumber === number){
        let personConfirm = confirm('Поздравляю, вы угадали!!! Хотите сыграть еще?');
        if (personConfirm === false) return alert('Игра окончена!');
        return bot(10);
        
    }
} else { 
    let end = confirm('Попытки закончились, хотите сыграть еще?');
    if (!end) return alert('Игра окончена!');
    else return bot();

}
}
bot(10);