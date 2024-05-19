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

// let login = prompt("Введіть логін");
// if (login) {
//     login = login.trim();
// }

// if (login === "Admin") {
//     const password = prompt("Введіть пароль");
//     if (password === "Password") {
//        alert("Вітаю");
//     } else {
//        alert("Невірний пароль!") ;
//     }
// } else if(!login){
// // } else if(login === null || login === ""){

//     alert("Canceled");
// } else {
//     alert("Я вас не знаю");
// }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let firstNumb = prompt("Введіть число");

// let total = 0;

// while (firstNumb !== null) {
//   total = total + Number(firstNumb);
//   firstNumb = prompt("Введіть число");
// }
// alert(`Загальна сума введених чисел дорівнює ${total}`);
/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const userValues = Object.keys(user);
// for (const item of userValues) {
//   console.log(`${item} : ${user[item]}`);
// }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function callTotalSalery(object) {
//   let total = 0;
//   for (const value of Object.values(object)) {
//     total += value;
//   }
//   return total;
// }

// console.log(callTotalSalery(someObj));

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */
//const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {
//   for (const { name, price, quantity } of someStones) {
//     if (name === stoneName) {
//       return price * quantity;
//     }
//   }
//   return "нема";
// }

// console.log(calcTotalPrice(stones, "Сапфир"));

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)
// const arr = ["best", "the", "foo", "is", "js"];

// function deletaElement(array, element) {
//   const copiArr = [...array];
//   const idx = copiArr.indexOf(element);
//   console.log(idx);
//   if (idx !== -1) {
//     copiArr.splice(idx, 1);

//   }
//   copiArr.reverse();

//   return copiArr.join(" ");
// }

// console.log(deletaElement(arr, "adf"));
// console.log(arr);
// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// Напиши функцію, яка приймає два масиви і повертає массив спільних значень
// const arr1 = [1, 2, 3, 7, 5];
// const arr2 = [3, 5, 4, 2, 9];

// function arrey(arrey1, arrey2) {
//   let comanArrey = [];
//   for (const number of arrey1) {
//     if (arrey2.includes(number)) {
//       comanArrey.push(number);
//     }
//   }
//   return comanArrey;
// }

// console.log(arrey(arr1, arr2));
///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];
// function makeDiscount(array) {
//   const newFruits = [];
//   let id = 1;
//   for (const fruit of array) {
//     const newFruit = {
//       ...fruit,
//       price: fruit.price * 0.8,
//       id: id++,
//     };
//     newFruits.push(newFruit);
//   }
//   return newFruits;
// }
// console.log(makeDiscount(fruits));
//======================================================================================================
/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;
// console.log(checkBrackets(someFn));
