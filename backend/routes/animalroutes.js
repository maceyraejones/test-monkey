const router = require("express").Router();


const Cards = require("../models/animals");

// const{getcard}= require("../controller/anamials")




router.get("/", async (req,res) =>{
try{
 const card = await Cards.find({}) 
 res.json(card);

 console.log('able to to Find the product object');
 
 }catch(error){
 
 console.error(error);
 
 res.status(500).json({message: "server error"});
 }
})

router.post("/", async (req,res) =>{




    try{
        const card = new Cards({

            like: req.body.like,
           
            

                });

                card.save()
    }catch(err){
        console.error(err);

        res.status(500).json({message: "server error"});
    }
    })
module.exports = router;