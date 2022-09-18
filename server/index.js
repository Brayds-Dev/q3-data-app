/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * Main server file that deals with connecting to the Mongo database and all the API calls that axios uses
 * for CRUD operations.
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "./environment/.env"});
const app = express();

app.use(express.json());
app.use(cors());

const ArticleModel = require("./models/Article.js");

//Assign our chosen port address from our .env file to a new variable
const { API_PORT } = process.env;
const port = API_PORT;

//Assign a MongoDB connection string from our .env file to a new variable
const { MONGO_URI } = process.env;
const mongoString = MONGO_URI;


//Connect to the MongoDB database using the connection string specified inside the .env file
mongoose.connect(
  mongoString,
  {
    useNewUrlParser: true,
  }
);

// API to retrieve all data from the database
app.get("/read", async (req, res) => {
  ArticleModel.find({}, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
});

// API to retrieve all documents with the category type 'ARTS'
app.get("/read/arts", async (req, res) => {
  ArticleModel.find({ category: "Arts" }, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
});

// API to retrieve all documents with the category type 'Mathematics'
app.get("/read/mathematics", async (req, res) => {
  ArticleModel.find({ category: "Mathematics" }, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });

});

// API to retrieve all documents with the category type 'Technology'
app.get("/read/technology", async (req, res) => {
  ArticleModel.find({ category: "Technology" }, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
});

//API to get an article by ID
app.get('/read/:id', async (req, res) => {
    ArticleModel.findById(req.params.id, (error, result) => {
        if (error){
            return res.send(error);
        }
        return res.send(result);
        });
});

// API to create a new article (POST)
app.post("/create", async (req, res) => {
  //gets the data from the front end form
  const category = req.body.category;
  const type = req.body.type;
  const name = req.body.name;
  const born = req.body.born;
  const died = req.body.died;
  const nationality = req.body.nationality;
  const knownFor = req.body.knownFor;
  const notableWork = req.body.notableWork;
  const about = req.body.about;

  //creates a new article with the above data
  const article = new ArticleModel({
    category: category,
    type: type,
    name: name,
    born: born,
    died: died,
    nationality: nationality,
    knownFor: knownFor,
    notableWork: notableWork,
    about: about,
  });

  //uses try-catch to attempt to save the data to the db, logging any errors.
  try {
    await article.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
    return err;
  }
});

//API call to update a single article
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  //all fields can be updated
  const newArticleCategory = req.body.category;
  const newArticleType = req.body.type;
  const newArticleName = req.body.name;
  const newArticleBorn = req.body.born;
  const newArticleDied = req.body.died;
  const newArticleNationality = req.body.nationality;
  const newArticleKnownFor = req.body.knownFor;
  const newArticleNotableWork = req.body.notableWork;
  const newArticleAbout = req.body.about;
  
  try{
    await ArticleModel.findById(id, (err, updatedArticle) => {
      updatedArticle.category = newArticleCategory;
      updatedArticle.type = newArticleType;
      updatedArticle.name = newArticleName;
      updatedArticle.born = newArticleBorn;
      updatedArticle.died = newArticleDied;
      updatedArticle.nationality = newArticleNationality;
      updatedArticle.knownFor = newArticleKnownFor;
      updatedArticle.notableWork= newArticleNotableWork;
      updatedArticle.about = newArticleAbout;
      //save the changes.
      updatedArticle.save();
      res.send("updated");
    });
  }
  catch(err){
    console.log(err)
  }
});

//API call to delete a single article
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  //given the id of the article, remove it from DB.
  await ArticleModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

// Set port from local host to run backend server on
app.listen(port, () => {
  console.log("Server running on port 3001....");
  console.log("ctrl 'C' to stop the server");
});
