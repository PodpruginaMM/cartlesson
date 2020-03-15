'use strict'

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list = [{id: 1, title: 'Товар', price: 1000}]) => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList;
};

renderProducts();
renderProducts(products);

class MenuItem {
    constructor(color, name) {
      this.color = color;
      this.name = name;
    }
    makeRed() {
      this.color = 'red';
    }
  }
  
class MainMenuItem extends MenuItem {
    makeBlue() {
    this.color = 'blue';
    }
}


class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
  }

  
class GoodsList {
    constructor() {
      this.goods = [];
    }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  //2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  getWholeSum() {
      let wholeSum = 0;
      goods.price.forEach(function(item, i, arr){
        wholeSum += item;
      }); 
  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();

//1 Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
class Cart {
    constructor(title, qty, price) {
      this.title = title;
      this.qty = qty;
      this.price = price;
  }
  addToCart(){
  }
}
//1 Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
class CartItem {
    constructor(title, qty, price) {
      this.title = title;
      this.qty = qty;
      this.price = price;
  }
  deleteFromCart(){     
}
}