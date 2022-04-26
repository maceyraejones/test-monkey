
// require express because we using express framework
const express = require('express')
// declare the express function above
const app = express()
const cors = require('cors');
const connectDB = require("./connect/db");
const animalroutes = require("./routes/animalroutes");
// this is for the engine to figure out the path of the ejs file wchich is in the views folder
var path = require('path');
// this is the session for express
const session = require('express-session');

const bodyParser = require('body-parser');
// connecting to db this reference to connect folder db.js file
connectDB();


// setting the session to use in the route crud.js
app.use(session({

    secret: "my secrey key",
    saveUninitialized: true,
    resave: false,
    
    }))
    
    app.use((req,res, next)=>{
    
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
    });
app.use(express.static("uploads"));

// set engine to view the the path of the folder views at localhost:5001
// _dirname is your directory you can do console.log(__dirname to see what your directory is)
// path.join is a function where you join your directory to the folder that need to be view
// it should be something like backend/views


// app.use(express.static(path.join(__dirname, './react-frontend/build')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './react-frontend/build/index.html'))
// })
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// this so it wont say cross origin
app.use(cors());

// this is middleware to parse json data to http
app.use(bodyParser.urlencoded({

    extended: true
    
    }));
    app.use(bodyParser.json());
// middleware for responding and requesting json file
app.use(express.json());
//  routing file use is a middleware for post, get, put, delete  request
app.use("", require("./routes/Crud"));
app.use("/api/animal",  animalroutes);


if(process.env.NODE_env === 'production'){

app.use(express.static(path.join(__dirname, './react-frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './react-frontend/build/index.html'))
})

}
// connect to port for this server
const PORT = process.env.PORT || 5001;

//Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));

