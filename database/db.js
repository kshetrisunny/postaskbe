const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Mongo Database connection successful');
    } else {
        console.log('Error in Mongo Database connection:' + JSON.stringify(err, undefined, 2));
        
    }
})

