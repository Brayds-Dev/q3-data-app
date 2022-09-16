const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(cors());


const ArticleModel = require("./models/Article.js");
const UserModel = require("./models/User");

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

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ArticleModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

// User API's

// Register
app.post("/register", async (req, res) => {
  try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
      console.log(password);
      // Validate user input
      if (!(email && password && first_name && last_name)) {
          res.status(400).send("All input is required");
      }

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await UserModel.findOne({ email });

      if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
      }

      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await UserModel.create({
          first_name,
          last_name,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
      });

      // Create token
      // const token = jwt.sign(
      //     { user_id: user._id, email },
      //     process.env.TOKEN_KEY,
      //     {
      //     expiresIn: "2h",
      //     }
      // );
      // // save user token
      // user.token = token;

      // return new user
      return res.status(201).json(user);
      // res.send('User added successfully');
  } catch (error) {
      console.log(error);
  }
});

// Login

app.post("/login", async (req, res) => {
  // our login logic goes here
  try {
      const {email, password} = req.body;

      //validate user input
      if(!(email && password)){
          res.status(400).send("All input is required");
      }

      //validate if user exist in our database
      const user = await UserModel.findOne({email});

      if(user && ( await bcrypt.compare(password, user.password))){
          
          // Create token
          const token = jwt.sign(
              {user_id: user._id, email},
              process.env.TOKEN_KEY,
              {
                  expiresIn: "2h",
              }
          );
          
          // save user token
          user.token = token;
          
          //user
          return res.status(200).json(user);
          // res.status(200).send(user);
          // res.status(200).send("logged in successfully");
      }

      res.status(400).send("Invalid Credentials");

  } catch (error) {
      console.log(error);
  }
});

// Set port from local host to run backend server on
app.listen(3001, () => {
  console.log("Server running on port 3001....");
  console.log("ctrl 'C' to stop the server");
});
