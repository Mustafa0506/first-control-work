let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*
// 2. Сохранить самый дешевый товар в переменную`min`*
// 3. Сохранить общую цену без скидок в переменную`total`*
// 4. Сохранить общую цену со скидкой в переменную`totalSale`*
// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*
// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
// * Писать весь код в функции setup()*
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    // Задания 1 

    max = arr.reduce((a, b) => {
        if (a.price > b.price) {
            return a
        } else {
            return b
        }
    }, 0)

    // Задания 2

    min = arr.reduce((a, b) => {
        if (a.price < b.price) {
            return a
        } else {
            return b
        }
    }, 0)

    // Задания 3

    total = arr.reduce((a, b) => {
        return a + b.price
    }, 0)


    // Задания 4

    totalSale = Math.round(total - (total * discount / 100))

    // Задания 5

    arr_sale = arr.map((item) => {
        let a = item.price - (item.price * discount / 100)
        return item = {
            name: item.name,
            price: a
        }
    })

    // Задания 6    

    average = Math.round(total / arr.length)

}




setup()

console.log('Задания 1 =>', max);
console.log('Задания 2 =>', min);
console.log('Задания 3 =>', total);
console.log('Задания 4 =>', totalSale);
console.log('Задания 5 =>', arr_sale);
console.log('Задания 6 =>', average);