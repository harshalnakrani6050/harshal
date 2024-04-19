const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/crud_node').then(()=>{
    console.log("mongodb connect...");
}).catch((err)=>{
    console.log('mongodb not connect...',err);
});
