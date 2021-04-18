let express = require('express')
let apiRoutes = require("./route/routes")
let bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3030;
let cors = require('cors');
// Welcome message
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

//configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Import routes
//Use API routes in the App
app.use('/api', apiRoutes)
//import body parser

//import mongoose
let mongoose = require('mongoose');

//connect to mongoose
const dbPath = 'mongodb://localhost/rickMortyDB';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})