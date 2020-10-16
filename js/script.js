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
      
      

      function enterNumber(){
        let personEnter = prompt('Угадай число от 1 до 100',botNumber);
        console.log('personEnter: ', personEnter);
        let personEnterNumber = Number(personEnter);
        if (personEnter === null) { alert('Игра окончена!'); return 0;}
        else if (personEnter === '' || !isNumber(personEnterNumber)) { alert('Введи число!'); enterNumber();} 
        else if (personEnterNumber > botNumber) { alert('Загаданное число меньше'); enterNumber();}
        else if (personEnterNumber < botNumber) { alert('Загаданное число больше'); enterNumber();}
        else if (personEnterNumber === botNumber) { alert('Поздравляю, вы угадали!'); return 0;}
    }
    return enterNumber();
}

bot();
































// function bot(){

//     function ask(){
//         let answer = prompt('Угадай число от 1 до 100');
//         if (answer === '') {
//             alert('Введи число!');
//             ask();
//         }
//         else if (!isNumber(+answer)){
//             alert('Введи число!');
//             ask();
//         }
//         console.log('answer: ', answer);
//         return answer;
//     }


//     let PersonNumber = ask();

//     if (PersonNumber === null || PersonNumber === '') return alert('Игра окончена!');
//     else if (+PersonNumber > number) {
//         alert('Загаданное число меньше');
//         return bot();
       
//     }
//     else if (+PersonNumber < number){
//         alert('Загаданное число больше');
//         return bot();
       
//     }
//     else if (+PersonNumber === number){
//         return alert('Поздравляю, вы угадали!');
//     }

// }

// bot();