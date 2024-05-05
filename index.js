// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */
// const question = prompt("Яка офіційна назва JavaScript?").trim().toLowerCase();
// if (question === "ecmascript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }



// /**
//  *? Напишіть цикл, який виводить у консоль
//  *? всі непарні числа  від max до min  за спаданням
//  */
// let max = 50;
// const min = 23;

// if (max % 2 === 0) {
//   max -= 1;
// }
// for (let i = max; i >= min; i-= 2) 
//    {
//     console.log(i);
//   }


/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
*/

// const time = prompt("Введіть число");
// // const time = 65;
// const hours = String (Math.floor (time / 60)).padStart(2, 0);
// const minets =String (time % 60).padStart(2, 0);

// console.log(`${hours}:${minets}`);
// // console.log(minets);


/**
*? Напишіть код, який питає
*? логін за допомогою prompt та логує результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "Вітаю"
*? інакше виводить рядок "Невірний пароль!"
 */

let login = prompt("Введіть логін");
if (login) {
    login = login.trim();
}

if (login === "Admin") {
    const password = prompt("Введіть пароль");
    if (password === "Password") {
       alert("Вітаю");
    } else {
       alert("Невірний пароль!") ;
    }
} else if(!login){
// } else if(login === null || login === ""){

    alert("Canceled");
} else {
    alert("Я вас не знаю");
}

