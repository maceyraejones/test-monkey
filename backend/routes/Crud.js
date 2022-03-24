const express = require('express');
const router = require("express").Router();
const cards = require('../models/animals')
const multer = require("multer");



// file upload from directory 

var storage = multer.diskStorage({

// take three arguement
destination : function(req, file, cb){

// take two arguement
// second argument is where the directory folder upload is 
cb(null, './uploads');
},

// give file name to upload

filename: function(req,file,cb){

    cb(null, file.fieldname + '_' + Date.now().toISOString()
    + file.originalname);


}
})
var uploads = multer({

storage: storage,
// this imgage is the name image from the html look at add_animals in the view folder for reference
});


router.get('/view', (req, res) =>{
    
    
    res.render("view", {title:"view"});
    
    
})
// insert record to the database you need to use post

// reference to the add_animals in the view folder the route need to match with the action in the form
router.post('/create', uploads.single('image'), (req, res) =>{


cards.collection.insertMany({

    name:req.body.name,
    age:req.body.age
});
// const cards = Cards.collection.insertOne ({
// name: req.body.name,
// image: req.file.filename,
// age: req.body.age,


// });


// cards.save((cards) =>{

// if(err){

// res.json({message: err.message, type: "there is error man :("});


// }else{

// req.session.message = {

// type: "success",
// message: "Added Succesfully!",


// };
//  res.redirect('/view');


// // window.location.assign('/view')
// };

// }); 

});

    



router.get('/', (req, res) =>{
    
    
    res.render("index", {title: "home page"});
    
    
});
router.get('/create', (req, res) =>{

    
    res.render("add_animals", {title:"add animals"});
    
    
})




module.exports = router;