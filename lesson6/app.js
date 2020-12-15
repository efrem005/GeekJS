const text = document.querySelector(".text");

const object = [
  {
    id: 0,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-49.jpg",
    title: "Mango People T-shirt",
    price: 32.0,
  },
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-50.jpg",
    title: "Mango People T-shirt",
    price: 54.0,
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-47.jpg",
    title: "Mango People T-shirt",
    price: 64.0,
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-45.jpg",
    title: "Mango People T-shirt",
    price: 76.0,
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-44.jpg",
    title: "Mango People T-shirt",
    price: 82.0,
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-3.jpg",
    title: "Mango People T-shirt",
    price: 94.0,
  },
];


text.innerHTML = "";

const cart = document.createElement("div")
cart.id = "cart"
const googs = document.createElement("div")
googs.id = "goods"

const alertEl = document.createElement("div")
alertEl.classList.add("alert")

text.appendChild(cart);
text.appendChild(googs);
text.appendChild(alertEl);

const alert = document.querySelector(".alert")

class IdManager {
  constructor() {
    this.currentId = 0;
  }

  getIdPlus() {
    return this.currentId++;
  }
}

class Good {
  constructor(id, name, price, img) {
    this.img = img;
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getElement(listener) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", this.img);
    imgEl.classList.add("imgPrice");

    imgEl.addEventListener("click", () => listener.img(this.id));

    const headerEl = document.createElement("h2");
    headerEl.classList.add("itemH2");
    headerEl.textContent = this.name;

    const priceEl = document.createElement("p");
    priceEl.classList.add("price");
    priceEl.textContent = this.price;

    const btnEl = document.createElement("button");
    btnEl.classList.add("btnPrice");
    btnEl.textContent = "Купить";

    cardEl.appendChild(imgEl);
    cardEl.appendChild(headerEl);
    cardEl.appendChild(priceEl);
    cardEl.appendChild(btnEl);

    btnEl.addEventListener("click", () => listener.buy(this.id));
    return cardEl;
  }
}

class Goods {
  constructor(goodsList) {
    this._store = goodsList;
    this.cart = new Cart();
    this.idManager = new IdManager();
    this.render();
  }

  buy(id) {
    const good = this._store.find((el) => el.id === id);
    if (good) {
      this.cart.add(
        new Good(this.idManager.getIdPlus, good.name, good.price)
      );
    }
  }

  img(id) {
    const good = this._store.find((el) => el.id === id)
    alert.style.display = 'flex'
    const div = document.createElement("img")
    div.classList.add("img_alert")
    div.setAttribute('src', good.img)

    alert.addEventListener('click', () => this.alertDel());
    alert.appendChild(div);
  }

  alertDel() {
    alert.style.display = 'none'
    alert.innerHTML = ''
  }

  render() {
    const goodsEl = document.querySelector("#goods");
    this._store.forEach((good) => {
      goodsEl.appendChild(good.getElement(this));
    });
  }
}

class Cart {
  constructor(state = []) {
    this._store = state;
    this.cartEl = document.querySelector("#cart");
    this.idManager = new IdManager();
    this.render();
  }

  add(good) {
    this._store.push({id: this.idManager.getIdPlus(), ...good});
    this.localSave()
    this.render();
  }

  localSave(){
    localStorage.setItem('lesson6', JSON.stringify(this._store))
  }

  delete(id) {
    this._store = this._store.filter((el) => el.id !== id);
    this.render();
  }

  getPrice() {
    return this._store.reduce((total, good) => total + good.price, 0);
  }

  vPrice() {
    return `В корзине ${this._store.length} товаров, на сумму ${this.getPrice(
      this._store
    )}`;
  }

  render() {
    this.cartEl.textContent = "";
    const totalEl = document.createElement("p");
    totalEl.textContent = this.vPrice();
    this.cartEl.appendChild(totalEl);
  }
}


new Goods(object.map((el) => new Good(el.id, el.title, el.price, el.img)));

if(localStorage.getItem('lesson6') != undefined){
  const localLode = JSON.parse(localStorage.getItem('lesson6'))
  new Cart(localLode)
}


const cartIn = document.querySelector('#cart')

document.onscroll = () =>{
  if(window.pageYOffset > 367){
    cartIn.style.position = 'sticky'
  }else if(window.pageYOffset < 376) {
    cartIn.style.position = 'inherit'
  }
}