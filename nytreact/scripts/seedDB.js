const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "When the Revolution came for Amy Cuddy",
    url: "https://www.nytimes.com/2017/10/18/magazine/when-the-revolution-came-for-amy-cuddy.html?action=click&module=TrendingGrid&region=TrendingTop&pgtype=collection",
    date: new Date(Date.now())
  },
  {
    title: "Trump, Trade, and Tantrums",
    url: "https://www.nytimes.com/2017/10/19/opinion/trump-trade-and-tantrums.html?action=click&module=TrendingGrid&region=TrendingTop&pgtype=collection", 
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });