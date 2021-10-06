const express = require("express");
const cors = require('cors');
const bd = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const mainRoute = require('./routes/mainRoute');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bd.urlencoded({
    extended: false
}))

app.use(bd.json());

app.use(mainRoute);

mongoose.connect('mongodb+srv://Haris:p2kist2n@newsappplus.8otuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

})

mongoose.connection.on("connected", () => {
    console.log("Database Connected");
})

mongoose.connection.on("error", () => {
    console.log("Database Not Connected");
})

app.get('/', (req,res) => {
    res.send("Hello World to first API");
})

app.listen(port, () => {
    console.log("Server is Running!");
})