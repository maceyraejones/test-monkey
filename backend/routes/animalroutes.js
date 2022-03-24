const router = require("express").Router();


const { restart } = require("nodemon");
const Cards = require("../models/animals");

// const{getcard}= require("../controller/anamials")
router.post("/", async (req,res) =>{

const newCard = new Cards(req.body);

try{

    const savedCard = await newCard.save();
    res.status(200).json(savedCard);

}catch(error){
restart.status(500).json(error);

}


});



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

module.exports = router;