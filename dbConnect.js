require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://ashokbishowkarma:ashokbishowkarma@cluster0.yuyh3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("[error]", err);
  }
});

exports.mongoClient = client;
