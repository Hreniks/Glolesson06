'use strict';
const number = 50;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function bot(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      const botNumber = getRandomInt(100);
      
      let attempts = 10;

      function enterNumber(){
        if (attempts !== -1){
        let personEnter = prompt('Угадай число от 1 до 100',botNumber);
        console.log('personEnter: ', personEnter);
        let personEnterNumber = Number(personEnter);
        if (personEnter === null) { alert('Игра окончена!'); return 0;}
        else if (personEnter === '' || !isNumber(personEnterNumber)) { alert('Введи число!'); enterNumber();} 
        else if (personEnterNumber > botNumber) { alert('Загаданное число меньше, осталось попыток: ' + attempts); --attempts; enterNumber();}
        else if (personEnterNumber < botNumber) { alert('Загаданное число больше, осталось попыток: ' + attempts); --attempts; enterNumber();}
        else if (personEnterNumber === botNumber) { alert('Поздравляю, вы угадали!'); return 0;}
        }
        else if (attempts === -1){
            let restart = confirm('Попытки закончились, хотите сыграть еще?');
            if (restart){ attempts = 10; enterNumber();}
            else { alert('Игра окончена!'); return 0;}
        }
    }
    return enterNumber();
}

bot();