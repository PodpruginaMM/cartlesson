//3. Некая сеть фастфуда предлагает несколько видов гамбургеров:
//Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.
class Hamburger {
    constructor(size, stuffing, topping) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
    }
    addTopping(topping) {
        this.topping = topping;
        }
    removeTopping(topping) {
        this.topping = [];
    }
    getToppings(topping) {   
        return this.topping;
    }
    getSize() {
        return this.size;
    }
    getStuffing() {
        return this.stuffing;
    }
    calculatePrice(qty) {
        return this.price*qty;    
    }
    calculateCalories() {
        return this.calories*qty
    }
  }
  