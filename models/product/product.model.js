const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    qty: {
        type: Number,
    },
    price: {
        type: Number,
    }
})

mongoose.model('Product', productSchema);
