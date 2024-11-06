const mongoose = require('mongoose')

module.exports=mongoose.model('Shoe',{
    name: String,
    brand: String,
    type: String,
})


