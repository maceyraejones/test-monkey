const express = require('express');
const router = require("express").Router();
const Cards = require('../models/animals')
const multer = require("multer");
const fs = require('fs');
const { LogTimings } = require('concurrently');

// file upload from directory 

var storage = multer.diskStorage({

// take three arguement
destination : function(req, file, cb){

// take two arguement
// second argument is where the directory folder upload is 
cb(null,  'backend/uploads');
},

// give file name to upload

filename: function(req,file,cb){

    cb(null, file.originalname);


}
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype == "image/jpg") {
      cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
  };
var uploads = multer({

storage: storage,limits:{
    fileSize: 1024 * 1024 * 5 


}
// this imgage is the name image from the html look at add_animals in the view folder for reference
});



// insert record to the database you need to use post


// reference to the add_animals in the view folder the route need to match with the action in the form
router.post('/create', uploads.single('image'), (req, res) =>{
   

    const card = new Cards({

name: req.body.name,
image: req.file.path,
age: req.body.age,






    });



    // res.end(JSON.stringify(card)); 
    console.log(req.file);
    card.save((err)=>{

if (err){

res.json({message: err.message, type: "danger"});

}else{


    req.session.message = {

type: "success",
message: "Added Succesfully!",


};
 res.redirect('/');



}
    });
    
  

});


router.get('/', (req, res) =>{
    
 Cards.find().exec((err,cards) => {

if (err){

    res.json({message:err.message})
}else{

    res.render('index',{

        title: 'Home Page',
        cards: cards

    })

}

})

    
    
});
router.get('/create', (req, res) =>{

    
    res.render("add_animals", {title:"add animals"});
    
    
})

//update users


router.get("/edit/:id", (req, res) =>{

    
//    let id = req.params.id;
   Cards.findById(req.params.id, (err, card) =>{

    if (err){

    res.redirect('/');

    }else{

        if (card == null){
        res.redirect('/');

        }else{

        res.render("view",{

        title: "Edit User",
        card: card,

        });

    }
}


   });

    
});


router.post('/update/:id', uploads.single('image'), (req, res) =>{

    
   let id = req.params.id;
   let new_image = '';

   if (req.file){

    new_image = req.file.filename;
    try{
        fs.unlinkSync('./uploads' + req.body.old_image);
    }catch(error){

 console.log(err)

    }

   }else{

new_image = req.body.old_image;

   }
    
    Cards.findByIdAndUpdate(id, {
     name: req.body.name,
     age: req.body.age,


    }, (err, result) =>{

      if(err){
res.json({message: err.message, type: 'Something wrong'})

      }  else{

        req.session.message ={

            type:'Success',
            message: 'Database updated'
        };
        res.redirect('/')
      }
    })
});

router.get('/delete/:id', (req, res) =>{

    let id = req.params.id;
Cards.findByIdAndRemove(id, (err, result) =>{

if (result.image != ''){

try{
fs.unlinkSync('./uploads/' + result.image);


}catch(err){

console.log(err);

}


}

if(err){



    res.json({Message:err.message});
}else{


    req.session.message ={


        type: 'sucess',
        message: 'Data Deleted',
    };
    res.redirect('/');
}

})
   });
    
    



module.exports = router;