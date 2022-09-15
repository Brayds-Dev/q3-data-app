const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const ArticleModel = require("./models/Article.js");

mongoose.connect(
  "mongodb+srv://bdaw211:ZmAKUg7kKKEVltlC@teamproject.o3vp87l.mongodb.net/schooldb?retryWrites=true&w=majority",
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


// API to retrieve all documents with the category type 'Methematics'
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


// API to create a new db entry or POST
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

//API call to update a single article NB - ONLY DOES NAME FIELD FOR TESTING
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
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

      updatedArticle.save();
      res.send("updated");
    });
  }
  catch(err){
    console.log(err)
  }
});


app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ArticleModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

// Set port from local host to run backend server on
app.listen(3001, () => {
  console.log("Server running on port 3001....");
  console.log("ctrl 'C' to stop the server");
});
