const goods = {
    1:{                //Код товара
        name: 'dress',         //Наименование
        description: 'Beautiful dress',   //Описание
        sizes: ['s', 'xs', 'l', 'xl',],         //массив возможных размеров
        price: 2500,        //цена товара
        available: true    //Признак доступности для продажи
    }, 
    2:{                //Код товара
        name: 'shirt',         //Наименование
        description: 'Beautiful shirt',   //Описание
        sizes: ['s', 'xs', 'l', 'xl',],         //массив возможных размеров
        price: 1200,        //цена товара
        available: true    //Признак доступности для продажи
    }, 
    3:{                //Код товара
        name: 'pants',         //Наименование
        description: 'Beautiful dress',   //Описание
        sizes: ['s', 'xs', 'l', 'xl',],         //массив возможных размеров
        price: 2500,        //цена товара
        available: false   //Признак доступности для продажи
    }, 
    4:{                //Код товара
        name: 'dress',         //Наименование
        description: 'Beautiful dress',   //Описание
        sizes: ['s', 'xs', 'l', 'xl',],         //массив возможных размеров
        price: 2500,        //цена товара
        available: true    //Признак доступности для продажи
    }, 
    5:{                //Код товара
        name: 'dress',         //Наименование
        description: 'Beautiful dress',   //Описание
        sizes: ['s', 'xs', 'l', 'xl',],         //массив возможных размеров
        price: 2500,        //цена товара
        available: true    //Признак доступности для продажи
    }, 
    
}


const basket = [
    {
        item: 1,
        size: 's',
        amount: 3 ,
    },
    {
        item: 2,
        size: 'xs',
        amount: 5 ,
    },
    {
        item: 4,
        size: 'l',
        amount: 1 ,
    },
]


indexGoods = []

for (let i = 1; i <= Object.keys(goods).length; i++) {
    indexGoods.push(goods[i])
}



function inBasket(itemId, itemSize) {
    for (let i = 0; i < Object.keys(basket).length; i++) {
        if (basket[i].item == itemId && basket[i].size == itemSize) {
            return i;
        } 
    }
    return false
}
        

        

function addToBasket(itemId, itemSize, itemAmount) {
    if (goods[itemId].available) {

        if (inBasket(itemId, itemSize)) {
            basket[inBasket(itemId, itemSize)].amount += itemAmount
            console.log ("Количество заказанного товара увеличенно на ", basket[inBasket(itemId, itemSize)].amount)
            return 'Amount in basket is succesfully changed'

        } else {
            basket.push({item: itemId, size: itemSize, amount: itemAmount})
            return 'Succesfully added to basket'
        }

    }  else {
        console.log ("Указанный товар недоступен, состав корзины не изменился")
        return
    }
}



function removeGoodBasket(goodId, goodSize) {
   if (inBasket(goodId, goodSize) !== undefined) {
    basket.splice(inBasket(goodId, goodSize), 1)
    console.log ("Товар: Наименование-", goods[goodId].name, "размер-", goodSize, "удален из корзины")
   } else {
    console.log ("Указанного товара, id=", goodId, "размер-", goodSize, "в корзине нет, состав корзины не изменился")
   }
}
 

function clearBasket() {
    basket.length = 0;
    return console.log ("Корзина полностью очищена")
}


function checkSumm() {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let good of basket) {
        if (good) {
            totalAmount += 1;
            totalSumm = totalSumm + (good.amount * indexGoods[good.item].price)
        }
    }
    return {"totalAmount": totalAmount, "totalSumm": totalSumm}
}


console.log(checkSumm())


console.log(removeGoodBasket(1, 's'))

console.log(checkSumm())

console.log(addToBasket(1, 'xl', 1))
console.log(addToBasket(3, 's', 2))
console.log(checkSumm())

console.log(clearBasket())
console.log(checkSumm())

