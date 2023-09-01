const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmstand')
.then(() => {
    console.log("mongo connection open")
})
.catch(err => {
    console.log("oh no mongo error")
    console.log(err)
})

const seedProducts = [
    {
        name: 'kale',
        price: 1.94,
        category: 'vegetable'

    },
    {
        name: 'broccoli',
        price: 1.71,
        category: 'vegetable'

    },
    {
        name: 'mandarine',
        price: 1.75,
        category: 'fruit'
    },
    {
        name: 'banana',
        price: 1.67,
        category: 'fruit'
    },
    {
        name: 'whole milk',
        price: 3.99,
        category: 'dairy'
    }

] 

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})
// const p = new product({
//     name: 'ruby tubtubious',
//     price: 1.69,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })