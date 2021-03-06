const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes=require("./routes");
//const articles = require("./routes/api/articles.js");
//const index=require("./routes/api/index.js");
const Article=require("./models/Article.js");
const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

/////////////////
var databaseUrl='mongodb://localhost/week18day3mongoose';

if(process.env.MONGODB_URI)
{
	mongoose.connect(process.env.MONGODB_URI);
}
else
{
	mongoose.connect(databaseUrl);
}
var db=mongoose.connection;

db.on('error',function(err){
	console.log('Mongoose Error: ',err);
});

db.once('open',function(){
	console.log('Mongoose connection successful');
});
/////////////////

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});