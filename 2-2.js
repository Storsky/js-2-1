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
    goodsIndex.push(goods[i])
}



function inBasket(itemId, itemSize) {
    for (let i = 0; i < Object.keys(basket).length; i++) {
        if (basket[i].item == itemId && basket[i].size == itemSize) {
            return i;
        } 
    }
    return false
}
        
indexGoods[itemId].available

        

function addToBasket(itemId, itemSize, itemAmount) {
    if (indexGoods[itemId].available) {

        if (inBasket(itemId, itemSize)) {
            basket[inBasket(itemId, itemSize)].amount += itemmount
            console.log ("Количество заказанного товара увеличенно на ", basket[inBasket(itemId, itemSize)].amount)
            return 'Amount in basket is succesfully changed'

        } else {
            basket.push({item: itemId, size: itemSize, amount: itemAmount})
            console.log ("Указанный товар добавлен в корзину")
            return 'Succesfully added to basket'
        }

    }  else {
        console.log ("Указанный товар недоступен, состав корзины не изменился")
        return
    }
}


function removeGoodBasket(goodId, goodSize) {
   if (isAlreadyInBasket(goodId, goodSize) !== undefined) {
    basket.splice(isAlreadyInBasket(goodId, goodSize), 1)
    console.log ("Товар: Наименование-", goods[goodId].name, "размер-", goodSize, "удален из корзины")
   } else if (isAlreadyInBasket(goodId, goodSize) == undefined) {
    console.log ("Указанного товара, id=", goodId, "размер-", goodSize, "в корзине нет, состав корзины не изменился")
   }
}
 

function clearBasket(array) {
    array.length = 0;
    console.log ("Корзина полностью очищена")
}



