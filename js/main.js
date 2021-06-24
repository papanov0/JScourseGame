 "use strict";

 let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 




let guessNumber = function(){
    const randomNumber =  Math.ceil(Math.random()*100);
    
    let number = prompt('Угадай число от 1 до 100');
    
    const getRandomNumber = function() {
        if(Number(number) === randomNumber) {
            alert('Поздравляю, Вы угадали!!!');
            return false;
        } else {
                if (Number(number) > randomNumber) {
                    number = prompt('Загаданное число меньше! Попробуй еще!');
                } else if (Number(number) < randomNumber) {
                    number = prompt('Загаданное число больше! Попробуй еще!');
                }


    };

    return getRandomNumber();
    };

    if (number === null) {
        alert('Игра окончена!');
    } else if (isNumber(number) === true) {
        return getRandomNumber();
    }
    else {
        alert('Введи число!');
        return guessNumber();
    }

    
};

guessNumber();