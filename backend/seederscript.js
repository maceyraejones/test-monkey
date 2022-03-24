const Cards = require('./models/animals');
const connectDB = require("./connect/db");

const animal = require("./data/data")
// call the function connectDB to access database
connectDB();

// importData function delete everything in our database and insert the items
// async function because we work with the database
const importData = async() =>{
try{

await Cards.collection.deleteMany({});

await Cards.collection.insertMany(animal);


console.log("Data import Completed");

process.exit();

}catch(error){

console.error("Error data import");
process.exit(1);

}

};

// call the function
importData();