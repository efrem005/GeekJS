document.querySelector('.Page1').addEventListener('click', catalogRender)

document.querySelector('.Page2').addEventListener('click', CartDelivery)

document.querySelector('.Page3').addEventListener('click', cartRender)

document.querySelector('.cartBody').addEventListener('click', cartRender)

const text = document.querySelector(".text");
const BodyCart = document.querySelector('.cartBody_Price')

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

let id = 0
let priceIn = []

if(localStorage.getItem('state') !== undefined)
  priceIn = JSON.parse(localStorage.getItem('state'))

function cartId() {
  return id = id + 1
}

function catalogRender() {
  text.innerHTML = ''

  const block = document.createElement('div')
  block.classList.add('lessonSeven')
  text.appendChild(block)

  object.forEach((el) => {
    block.appendChild(Catalog(el))
  })
}

function cartRender() {
  text.innerHTML = ''

  const block = document.createElement('div')
  block.classList.add('lessonSeven')
  text.appendChild(block)

  const priceCart = document.createElement('div')
  priceCart.classList.add('lessonPrice')
  priceCart.innerHTML = CartZinaPrice(priceIn)
  text.appendChild(priceCart)

  priceIn.forEach((el) => {
    block.appendChild(CartZina(el))
  })
}

function CartZinaDelete(task) {
  priceIn = priceIn.filter((el) => el.id !== task.id)
  saveLocalStorage()
  cartRender()
}

function CarZinaPush(task) {
  task.id = cartId();
  priceIn.push({id: task.id, title: task.title, img: task.img, price: task.price})
  saveLocalStorage()
  BodyRender()
}

function Catalog(task) {

  let items = document.createElement('div');
  items.classList.add('catalog_items');

  let title = document.createElement('h3');
  title.classList.add('catalog_title');
  title.innerHTML = task.title

  let img = document.createElement('img');
  img.setAttribute('src', task.img)
  img.classList.add('catalog_img');
  items.addEventListener('click', () => {
    CarZinaPush(task)
  })

  let price = document.createElement('span');
  price.classList.add('catalog_price');
  price.innerHTML = task.price

  items.appendChild(img)
  items.appendChild(title)
  items.appendChild(price)
  return items
}


function CartZina(task) {

  let items = document.createElement('div');
  items.classList.add('cart_items');

  let title = document.createElement('h3');
  title.classList.add('cart_title');
  title.innerHTML = task.title

  let img = document.createElement('img');
  img.setAttribute('src', task.img)
  img.classList.add('cart_img');
  img.addEventListener('click', () => {
    imgZoom(task)
  })

  let price = document.createElement('span');
  price.classList.add('cart_price');
  price.innerHTML = task.price

  let deleteBtn = document.createElement('button')
  deleteBtn.classList.add('cart_btn')
  deleteBtn.textContent = "x"
  deleteBtn.addEventListener('click', () => {
    CartZinaDelete(task)
  })


  items.appendChild(img)
  items.appendChild(title)
  items.appendChild(price)
  items.appendChild(deleteBtn)
  return items
}

function CartZinaPrice(price){
  console.log(price)
  BodyRender()
  if(price.length !== 0){
    let sumPrice = price.reduce((acc, el) => acc + el.price,0)
    return `В корзине: ${price.length} на сумму ${sumPrice} $`
  } else {
    return `Корзина пуста`
  }
}

function CartDelivery(){
  let count = 1
  text.innerHTML = ""

  let items = document.createElement('div');
  items.classList.add('delivery_cart');

  let address = document.createElement('h3');
  address.classList.add('sector');
  address.classList.add('delivery_address');

  let h3 = document.createElement('h3');
  h3.textContent = 'Адрес доставки'

  let input = document.createElement('input');
  input.classList.add('delivery_input');
  input.setAttribute('type', 'text')

  let commit = document.createElement('h3');
  commit.classList.add('sector');
  commit.classList.add('delivery_commit');

  let comCom = document.createElement('h3');
  comCom.textContent = 'Комминтарий'

  let textarea = document.createElement('textarea');

  address.appendChild(h3)
  address.appendChild(input)

  commit.appendChild(comCom)
  commit.appendChild(textarea)

  items.appendChild(address)
  items.appendChild(commit)

  let deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delivery_btn')
  deleteBtn.textContent = "Дальше"

  text.appendChild(items)
  text.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', () => {
    const sectors = document.querySelectorAll('.sector')
    for(let sector of sectors){
      sector.style.display = 'none'
    }
    if(count < 2){
      sectors[count++].style.display = 'block'
    } else {
      items.innerHTML = 'Спасибо за ваш заказ'
      priceIn = []
      count = 1
      id = 0
      document.querySelector('.delivery_btn').remove()
      BodyRender()
      saveLocalStorage()
    }
  })
}

function imgZoom(zoom){
  const body = document.querySelector('body')

  const div = document.createElement('div')
  div.classList.add('body_block')
  div.addEventListener('click', () => {
    div.remove()
  })

  const imgZoom = document.createElement('img')
  imgZoom.setAttribute('src', zoom.img)

  div.appendChild(imgZoom)
  body.appendChild(div)
}

function saveLocalStorage(){
  localStorage.removeItem('state')
  localStorage.setItem('state', JSON.stringify(priceIn))
}

function BodyRender(){
  const countCart = priceIn.length

  if(countCart === 0) BodyCart.innerHTML = `${countCart}`
  else if(countCart > 9) BodyCart.innerHTML = `+9`
  else {
    BodyCart.innerHTML = `+${countCart}`
  }
}

BodyRender()





