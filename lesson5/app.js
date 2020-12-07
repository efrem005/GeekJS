document.querySelector(".appChess").addEventListener("click", Chess);
document.querySelector(".newTask").addEventListener("click", Task);
document.querySelector(".newProd").addEventListener("click", Prod);

const object = [
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-49.jpg",
    title: "Mango People T-shirt",
    price: 32.0,
  },
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-50.jpg",
    title: "Mango People T-shirt",
    price: 54.0,
  },
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-47.jpg",
    title: "Mango People T-shirt",
    price: 64.0,
  },
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-45.jpg",
    title: "Mango People T-shirt",
    price: 76.0,
  },
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-44.jpg",
    title: "Mango People T-shirt",
    price: 82.0,
  },
  {
    img: "https://raw.githubusercontent.com/efrem005/Geekbrains/Geekbrains/img/layer-3.jpg",
    title: "Mango People T-shirt",
    price: 94.0,
  },
];

const text = document.querySelector('.text')

let cont = 1

function Chess() {
      text.innerHTML = ""
      const textChess = document.createElement('p')
      textChess.classList.add('textChess')

      const dom = document.createElement('div')
      dom.classList.add('chess')

      const sumbUp = document.createElement('div')
      sumbUp.classList.add('chess__sumbol-up')
      const centerDiv = document.createElement('div')
      centerDiv.classList.add('chess_center')

      const numbLeft = document.createElement('div')
      numbLeft.classList.add('chess__number-left')
      const deskChess = document.createElement('div')
      deskChess.classList.add('chess__desk')
      const numbRigth = document.createElement('div')
      numbRigth.classList.add('chess__number-right')

      centerDiv.appendChild(numbLeft)
      centerDiv.appendChild(deskChess)
      centerDiv.appendChild(numbRigth)

      const sumbDown = document.createElement('div')
      sumbDown.classList.add('chess__sumbol-down')

      dom.appendChild(sumbUp)
      dom.appendChild(centerDiv)
      dom.appendChild(sumbDown)

      console.dir(dom)

      text.appendChild(textChess)
      text.appendChild(dom)

      const textChessContent = document.querySelector('.textChess')

      textChessContent.innerHTML = `Щёлкаем по шахмотной доске и радуемся  <i class="far fa-smile-beam"></i>`;


      const chessSumbolUp = document.querySelector('.chess__sumbol-up')
      const chessNumberLeft = document.querySelector('.chess__number-left')
      const chessSumbolDown = document.querySelector('.chess__sumbol-down')
      const chessNumberRight = document.querySelector('.chess__number-right')

      const arrSumbol = ['A','B','C','D','E','F','G','H']
      const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8]


      function appFunction(arr, child) {
        arr.map((el) => {
          const result = document.createElement('div')
          result.textContent = el
          child.appendChild(result)
        })
      }

      appFunction(arrNumber,chessNumberLeft);
      appFunction(arrSumbol,chessSumbolUp);
      appFunction(arrNumber,chessNumberRight);
      appFunction(arrSumbol,chessSumbolDown);


      const arrChess = {
        0: [
          '<i class="fas fa-chess-rook black"></i>',
          '<i class="fas fa-chess-knight black"></i>',
          '<i class="fas fa-chess-bishop black"></i>',
          '<i class="fas fa-chess-queen black"></i>',
          '<i class="fas fa-chess-king black"></i>',
          '<i class="fas fa-chess-bishop black"></i>',
          '<i class="fas fa-chess-knight black"></i>',
          '<i class="fas fa-chess-rook black"></i>',
        ],
        1: [
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
        ],
        6: [
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
        ],
        7: [
          '<i class="fas fa-chess-rook white"></i>',
          '<i class="fas fa-chess-knight white"></i>',
          '<i class="fas fa-chess-bishop white"></i>',
          '<i class="fas fa-chess-queen white"></i>',
          '<i class="fas fa-chess-king white"></i>',
          '<i class="fas fa-chess-bishop white"></i>',
          '<i class="fas fa-chess-knight white"></i>',
          '<i class="fas fa-chess-rook white"></i>',
        ]
      };

      const chessBlock = document.querySelector(".chess__desk");
      chessBlock.innerHTML = "";
      const chessDiv = document.createElement("div");
      chessBlock.appendChild(chessDiv);
      chessDiv.classList.add('fieldBlock');
      const blockMenu = document.querySelector(".fieldBlock");
      let block;
      let switchOn = false;

      for (let i = 0; i < 8; i++) {
        for (let a = 0; a < 8; a++) {
          if (a === 0) {
            switchOn = !switchOn;
          }
          block = document.createElement("div");
          block.classList.add('blockChess');
          if (arrChess[i] !== undefined && arrChess[i][a] !== undefined) {
            block.innerHTML = arrChess[i][a];
          }
          if (switchOn) {
            block.classList.add('fieldChessBlack');
          } else {
            block.classList.add('fieldChessWhite');
          }

          block.addEventListener('click', () => {
            const arrRevers = [8,7,6,5,4,3,2,1]
            console.log(`столбец ${arrSumbol[a]} строка ${arrRevers[i]}`)
            textChessContent.innerHTML = `столбец ${arrSumbol[a]} строка ${arrRevers[i]}`;
          })
          blockMenu.appendChild(block);
          switchOn = !switchOn;
        }
      }
      cont--
}

//Задание №2
function Task() {
  function Cart(list){
    this._state = list
    this.price = function () {
      return this._state.reduce((acc, el) => acc + el.price, 0)
    }
    this.sum = function () {
      return `В корзине: ${this._state.length} товаров на сумму ${this.price()} рублей`
    }
    this.render = () => {
      if(this._state.length !== 0) {
        text.textContent = this.sum()
      } else {
        text.textContent = 'Корзина пуста'
      }
    }
    console.log(this)
  }
  new Cart(object).render()
}

// Задание №3
function Prod() {
  text.textContent = 'Товары на странице через Javascript'
  let block = document.createElement("div");
  block.id = "product";
  text.appendChild(block)

  function Product(img, title, price) {
    this.img = img
    this.title = title
    this.price = price
    this.render = () => {
      block.appendChild(this.addProduct())
    }
    this.addProduct = () => {
        let item = document.createElement("div");
        item.className = "item";

        let imag = document.createElement("img");
        imag.setAttribute("src", this.img);

        let title = document.createElement("h2");
        title.textContent = this.title;

        let cent = document.createElement("h4");
        cent.textContent = this.price;

        item.appendChild(imag);
        item.appendChild(title);
        item.appendChild(cent);
        return item;
    }
    this.on = this.render()
  }
  object.map((el) => {new Product(el.img, el.title, el.price)})
}

