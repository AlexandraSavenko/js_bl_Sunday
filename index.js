//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const btnEl = document.querySelector("#alertButton");
const inputEl = document.querySelector("#alertInput");
btnEl.addEventListener("click", handlerClick);
function handlerClick() {
  alert(inputEl.value);
  inputEl.value = "";
}

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapButtonEl = document.querySelector("#swapButton");
const leftSwapInputEl = document.querySelector("#leftSwapInput");
const rightSwapInputEl = document.querySelector("#rightSwapInput");
swapButtonEl.addEventListener("click", handlerSwapBtnClick);
function handlerSwapBtnClick() {
  const valueEl = leftSwapInputEl.value;
  leftSwapInputEl.value = rightSwapInputEl.value;
  rightSwapInputEl.value = valueEl;
}
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordButtonEl = document.querySelector("#passwordButton");
const passwordInputEl = document.querySelector("#passwordInput");

passwordButtonEl.addEventListener("click", handlerpasswordButtonClick);

function handlerpasswordButtonClick() {
  if (passwordInputEl.getAttribute("type") === "text") {
    passwordInputEl.setAttribute("type", "password");
    passwordButtonEl.textContent = "Розкрити";
  } else {
    passwordInputEl.setAttribute("type", "text");
    passwordButtonEl.textContent = "Приховати";
  }
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxEl = document.querySelector("#box")
const decreaseBtnEl = document.querySelector("#decrease")
const increaseBtnEl = document.querySelector("#increase")


decreaseBtnEl.addEventListener("click", () => {

  const currentSize = parseInt(getComputedStyle(boxEl).width)
  boxEl.style.width = currentSize - 10 + "px" ;
  boxEl.style.height = currentSize - 10 + "px" ;


} )

increaseBtnEl.addEventListener("click", () => {

  const currentSize = parseInt(getComputedStyle(boxEl).width)
  boxEl.style.width = currentSize + 10 + "px" ;
  boxEl.style.height = currentSize + 10 + "px" ;

} )


//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/


const placeEl = document.querySelector('#place');
addEventListener('click', (evt) => {
  if (evt.target === placeEl) {
    console.log(true)
  }else{
    console.log(false)
  }
})


//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const listItemsEl = document.querySelectorAll(".listItem");
const doubleBtnEl = document.querySelector("#double");
doubleBtnEl.addEventListener("click", () =>
  listItemsEl.forEach(item => item.textContent = BigInt(item.textContent) ** 2n)
)

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
