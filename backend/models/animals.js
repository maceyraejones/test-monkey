const mongoose = require("mongoose");


const CardSchema = mongoose.Schema({


name: {type: String,
    require: false


},
age: {type: Number,
    require: false,

    description: "must be a Number"
},
image: {

    type:String
}




})
const Cards = mongoose.model('Cards', CardSchema);
module.exports = Cards;
