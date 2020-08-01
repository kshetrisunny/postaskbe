const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    qty: {
        type: Number,
    },
    cartTotal: {
        type: Number,
    },
    status: {
        type: String,
    }
})

mongoose.model('Order', orderSchema);
