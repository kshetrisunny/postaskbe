const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
    }
})

mongoose.model('Table', tableSchema);
