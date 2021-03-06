//require mongoose
var mongoose=require("mongoose");
//Create Schema class
var Schema=mongoose.Schema;

//Create article Schema
var ArticleSchema=new Schema({
	//title is a required string
	title:{
		type:String,
		required:true
	},
	//date is required
	date:{
		type:Date,
		required:true
	},
	//url is a required string
	url:{
		type:String,
		required:true
	}
});

//Create the Article model with the ArticleSchema
var Article=mongoose.model("Article",ArticleSchema);

//Export the Article model
module.exports=Article;