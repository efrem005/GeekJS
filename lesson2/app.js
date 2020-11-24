const text = `если a и b положительные, вывести их разность; n\
если а и b отрицательные, вывести их произведение; n\
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.`;
const arif = `В зависимости от переданного значения операции выполнить одну из арифметических операций.`;
const step = `С помощью рекурсии организовать функцию возведения числа в степень. `;
const inter = `Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.`;
const arifmetText = `Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.`;

document.querySelector(".calculator").addEventListener("click", summ);
document.querySelector(".positive").addEventListener("click", positive);
document.querySelector(".interval").addEventListener("click", interval);
document.querySelector(".degree").addEventListener("click", degree);
document.querySelector(".arifmet").addEventListener("click", arifmet);

function summ() {
  alert(arif);
  const a = +prompt(`Ведите первое число`);
  const b = +prompt(`Ведите второе число`);
  const y = prompt(`Вычитание '-' Сложения '+' Деление '/' Умножение '*'`);
  inner(mathOperation(a, b, y));
}

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return "Результат сложения: " + (arg1 + arg2);
    case "-":
      return "Результат вычитание: " + (arg1 - arg2);
    case "*":
      return "Результат умножение: " + arg1 * arg2;
    case "/":
      return "Результат деление: " + arg1 / arg2;
  }
}
//
function arifmet() {
  alert(arifmetText);
  const a = +prompt(`Ведите первое число`);
  const b = +prompt(`Ведите второе число`);
  let summ = summ1(a, b);
  let vid = vid1(a, b);
  let umno = umno1(a, b);
  let del = del1(a, b);
  let result = `Cложение: ${summ} Вычитание: ${vid} Умножение: ${umno} Деление: ${del}`;

  inner(result);
}

function summ1(a, b) {
  return a + b;
}
function vid1(a, b) {
  return a - b;
}
function del1(a, b) {
  return a / b;
}
function umno1(a, b) {
  return a * b;
}

//
function positive() {
  alert(text);
  const a = +prompt(`Ведите первое число a`);
  const b = +prompt(`Ведите второе число b`);
  inner(decision(a, b));
}

function decision(a, b) {
  if (a > 0 && b > 0) {
    return "Разность ровна: " + (a - b);
  } else if (a < 0 && b < 0) {
    return "Произведение ровна: " + a * b;
  } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    return "Сумма ровна: " + (a + b);
  }
}

//
function interval() {
  alert(inter);
  let a = +prompt("Введите число от 0 до 15");
  inner(`Результат смотреть в консоле`);
  switch (a) {
    case a:
      SwitchCase(a);
  }
}
function SwitchCase(a) {
  for (a; a <= 15; a++) {
    console.log(a);
  }
}

//
function degree() {
  alert(step);
  let val = +prompt("Введите основание степенной функции");
  let pow = +prompt("Введите максимальную степень");
  inner("Cтепень: " + power(val, pow));
}
function power(val, pow) {
  if (pow == 0) {
    return 1;
  } else {
    return val * power(val, pow - 1);
  }
}

function inner(x) {
  const text = document.querySelector(".text");
  text.innerHTML = "";
  text.insertAdjacentHTML("beforeend", x);
}
