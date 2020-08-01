const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
    paymentMode: {
        type: String,
    },
    status: {
        type: String,
    }
})

mongoose.model('Payment', paymentSchema);
