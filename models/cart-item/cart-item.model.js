const mongoose = require('mongoose');


const cartItemSchema = new mongoose.Schema({
    qty: {
        type: Number,
    },
    price: {
        type: Number,
    },
    cartTotal: {
        type: Number,
    }
})

mongoose.model('CartItem', cartItemSchema);
