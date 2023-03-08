const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRoute = require("./routes/users")

app.use("/users", userRoute)

mongoose.connect(
    process.env.ATLAS_URI,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    },
    (err)=>{
        if(err){
            console.log(process.env.ATLAS_URI)
            console.log(err,"err")
            console.log("Error connecting the database")
        }
        else{
            console.log("Database successfully connected")
        }
    }
)

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`The server is up and running on ${port}!`)
})
