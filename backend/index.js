const express = require('express')
const apiRoutes = require("./route/routes")
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// INIT
const app = express();
const port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

// CORS
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// BODY PARSER
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// MONGOOSE
let mongoose = require('mongoose');

const dbPath = process.env.MONGODB_PATH;
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('DB connected');
}, error => {
    console.log(error, 'DB error');
})

// API ROUTER
app.use('/api', apiRoutes)