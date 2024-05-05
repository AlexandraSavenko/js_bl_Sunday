/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
const question = prompt("Яка офіційна назва JavaScript?").trim().toLowerCase();
if (question === "ecmascript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}



/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
const max = 50;
const min = 23;
