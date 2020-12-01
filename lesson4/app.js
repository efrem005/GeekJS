const textOne = `Написать функцию, преобразующую число в объект. \n Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. \n Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. \n Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.`;

const textTwo = `Продолжить работу с интернет-магазином: \n
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? \n
b. Реализуйте такие объекты. \n
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.`;

const textThree = `Подумать над глобальными сущностями. \n К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. \n Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.`;

document.querySelector(".one").addEventListener("click", one);
document.querySelector(".two").addEventListener("click", two);

// задание 1

function oneResult(n) {
  if (0 <= n && n <= 999) {
    var number = {
      единицы: n % 10,
      десятки: ((n % 100) - (n % 10)) / 10,
      сотни: Math.floor(n / 100), // Округление результата
    };
    inner();
    return number;
  } else {
    inner();
    return {};
  }
}

function one() {
  alert(textOne);
  const numb = +prompt("Введите число от 0 до 999");
  console.log(oneResult(numb));
}

// задание 2

// массив с объектами

const object = [
  {
    img: "images.jpg",
    title: "Mango People T-shirt",
    price: 28.0,
  },
  {
    img: "images.jpg",
    title: "Mango People T-shirt",
    price: 34.0,
  },
  {
    img: "images.jpg",
    title: "Mango People T-shirt",
    price: 43.0,
  },
  {
    img: "images.jpg",
    title: "Mango People T-shirt",
    price: 52.0,
  },
  {
    img: "images.jpg",
    title: "Mango People T-shirt",
    price: 68.0,
  },
];

const mass = new Basket(object);

function two() {
  alert(textTwo);
  console.log(mass);
  inner("Итого: " + mass.sum());
}

function Basket(obj) {
  this.img = massImg(obj);
  this.price = massCent(obj);
  this.title = massTitle(obj);
  this.arr = obj;

  // суммируем корзину
  this.sum = function back() {
    return this.price.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
  };

  // картинки в массив
  function massImg(mass) {
    return mass.map((elem) => {
      return elem.img;
    });
  }

  // прайс в массив
  function massCent(mass) {
    return mass.map((elem) => {
      return elem.price;
    });
  }

  // title в массив
  function massTitle(mass) {
    return mass.map((elem) => {
      return elem.title;
    });
  }
}

// Ввывод результата

function inner(x = "Результат в консоле") {
  const text = document.querySelector(".text");
  text.innerHTML = "";
  text.insertAdjacentHTML("beforeend", x);
}
