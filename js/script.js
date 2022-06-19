let a = ''; //Перше число
let b = ''; // Друге число
let sign = ''; // Знак операції
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

//get screen
const out = document.querySelector('.calc__screen p');

//AC - clear all
function clearAll() {
  a = ''; //Перше число
  b = ''; // Друге число
  sign = ''; // Знак операції
  finish = false;
  out.textContent = 0;
}
// задаємо подію для кнопки АС
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  // нажата кнопка АС
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //отримую кнопку (отримую і вивожу необхідну операцію або число)
  const key = event.target.textContent;
  //Чи нажата цифрова кнопка 0-9
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }

  //Чи нажата кнопка дії
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  // ЧИ нажато =
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case '+':
        a = +a + +b;
        break;
      case '-':
        a = +a - +b;
        break;
      case 'x':
        a = +a * +b;
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Error';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
