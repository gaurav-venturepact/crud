require('dotenv').config();

var express             =       require('express');
var bodyParser          =       require('body-parser');
var http                =       require('http');
var path                =       require('path');
var mongoose            =       require('mongoose');

//init app
var app                 =       express();
var server              =       http.createServer(app);

const cors              =       require('cors');

mongoose.Promise        =       global.Promise;

//Connect to DB

console.log(process.env.mongodbConnectionString);

mongoose.connect(process.env.mongodbConnectionString, function(err){
    if (err) console.log(err);
    else console.log("Connected");
});

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({limit: "50mb",parameterLimit:50000, extended: false }));
app.use(bodyParser.json({limit: "50mb"}));

//Use CORS
app.use(cors());
app.use(cors({origin: 'https://admin.picubed.io'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

// Custom dependencies
var routes = require('./routes/index');
var apiRoutes = require('./routes/api');

// // Routes setup
app.use('/api',apiRoutes);
app.use('/',routes);

app.listen(process.env.PORT, function(){
    console.log("Server running on localhost:" + process.env.PORT);
})