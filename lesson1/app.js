const text = `1000 + "108" 1000 это число, а "108" строка, при сложении произойдет склеивание получится 1000108`;
const async = `async первым выполнится тот скрипт, который загрузился первым.`;
const defer = `defer скрипты загружаются по порядку, не зависемо от того кто загрузился быстрее`;
const regular = /[A-Za-z-А-Яа-я]/;

document.querySelector(".temp").addEventListener("click", function temp() {
  const numb = prompt("Введите температуру по Цельсию: ");
  if (!isNaN(numb) && numb != "" && numb != null) {
    const farn = (9 / 5) * numb + 32;
    alert("Температура по Фаренгейту равна: " + farn + " °F");
  } else if (numb == null) {
    alert("Возвращайтесь мы вас ждем");
  } else if (numb == "") {
    alert("Вы не чего не ввели");
  } else {
    alert("Вы ввели не число");
  }
});

document.querySelector(".name").addEventListener("click", function name() {
  const name = prompt("Введите имя: ");
  const admin = name;
  if (admin != null && regular.test(admin) && admin != "") {
    alert(admin);
  } else if (admin == null) {
    alert("Возвращайтесь мы вас ждем");
  } else if (admin == "") {
    alert("Вы не чего не ввели");
  } else {
    alert("Вы ввели число");
  }
});

document
  .querySelector(".expression")
  .addEventListener("click", () => inner(text));
document.querySelector(".async").addEventListener("click", () => inner(async));
document.querySelector(".defer").addEventListener("click", () => inner(defer));

function inner(x) {
  const text = document.querySelector(".text");
  text.innerHTML = "";
  text.insertAdjacentHTML("beforeend", x);
}
