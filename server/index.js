const cors = require("cors");
const express = require("express");
var bodyParser = require('body-parser')
require("dotenv").config();

const app = express();

// Middlewares here 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes here 
app.get("/", (req, res) => {
    res.send("Hello World");
});

const route = require('./src/routes/index');
app.use('/api', route);


// Listen 
app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
}); 