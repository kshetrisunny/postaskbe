const mongoose = require('mongoose');


const productPriceSchema = new mongoose.Schema({
    price: {
        type: Number,
    }
})

mongoose.model('ProductPrice', productPriceSchema);
