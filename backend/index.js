
const express = require('express')
const app = express()
const cors = require('cors');
const connectDB = require("./connect/db");
const animalroutes = require("./routes/animalroutes");
var path = require('path');
const session = require('express-session');
const crud = require('./routes/Crud')



const bodyparser = require('body-parser');
// connecting to db this reference to connect folder db.js file
connectDB();

app.use(bodyparser.urlencoded({

extended: true

}));
app.use(bodyparser.json());

// setting the session
app.use(session({

secret: "my secrey key",
saveUninitialized: true,
resave: false,

}))

app.use((req,res, next)=>{

res.locals.message = req.session.message;
delete req.session.message;
next();

})

// set engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// this so it wont say cross origin
app.use(cors());

// middleware for responding and requesting json file
app.use(express.json());

// routing to the speficic path

app.use("/api/animal",  animalroutes);
app.use('/', crud);
// connecting nodejs to a port number make sure choose the one that isnt running

const PORT = 5001;

//Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));

