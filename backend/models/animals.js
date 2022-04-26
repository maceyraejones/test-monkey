const mongoose = require("mongoose");


const CardSchema = mongoose.Schema({


name: {type: String,
    require: true


},
age: {type: Number,
    require: true,

},
image: {

    // data:Buffer,
    // contentType: String
    type: String,
},
like:{

    type: Number,

}



})
const Cards = mongoose.model('Cards', CardSchema);
module.exports = Cards;
