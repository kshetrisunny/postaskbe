const mongoose = require('mongoose');


const subCatecorySchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

mongoose.model('SubCatecory', subCatecorySchema);
