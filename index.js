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
