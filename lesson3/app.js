document.querySelector(".whileNum").addEventListener("click", whileNum);
document.querySelector(".forNum").addEventListener("click", forNum);
document.querySelector(".pyramid").addEventListener("click", pyramid);
document.querySelector(".basket").addEventListener("click", countBasketPrice);

const basket = [
  {
    id: 1,
    title: "Mango People T-shirt",
    price: 28.0,
  },
  {
    id: 2,
    title: "Mango People T-shirt",
    price: 34.0,
  },
  {
    id: 3,
    title: "Mango People T-shirt",
    price: 43.0,
  },
  {
    id: 4,
    title: "Mango People T-shirt",
    price: 52.0,
  },
  {
    id: 5,
    title: "Mango People T-shirt",
    price: 68.0,
  },
];

function whileNum() {
  let arr = [];
  let num = +prompt(
    "С помощью цикла while вывести все простые числа в промежутке от 0 до 100 \n Введите число?"
  );
  let i = 2;
  while (i <= num) {
    if (Check(i)) {
      arr.push(i);
    }
    i++;
  }
  console.log(arr);
  inner();
}

function Check(num) {
  let i = 2;
  let max = Math.sqrt(num);
  while (i <= max) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return num > 1;
}

function forNum() {
  let arr = [];
  let num = +prompt(
    "Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. \n Введите число?"
  );
  for (let i = 0; i < num + 1; i++, arr.push(i - 1)) {}
  console.log(arr);
  inner();
}

function pyramid() {
  let result = "";
  let num = +prompt(
    `Нарисовать пирамиду с помощью console.log \n Сколько уровней будет у пирамиды?`
  );
  for (let i = 1; i <= num; i++) {
    result += "X";
    console.log(result);
  }
  inner();
}

function countBasketPrice() {
  alert("В корзине находиться массив с 5 товароми");
  const summ = basket.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);
  inner(`На сумму: ${summ} \n Массив в консоле`);
  console.log(basket);
}

function inner(x = "Результат в консоле") {
  const text = document.querySelector(".text");
  text.innerHTML = "";
  text.insertAdjacentHTML("beforeend", x);
}
