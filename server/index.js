
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const ArticleModel = require('./models/Article.js');


mongoose.connect("mongodb+srv://bdaw211:ZmAKUg7kKKEVltlC@teamproject.o3vp87l.mongodb.net/schooldb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

// API to retrieve all data from the database
app.get('/read', async (req, res) => {
    ArticleModel.find({}, (error, result) => {
        if (error){
            res.send(error);
        }
        res.send(result);
    });
});

// API to retrieve all documents with the category type 'ARTS'
app.get('/read/arts', async (req, res) => {
    ArticleModel.find({category: 'Arts'}, (error, result) => {
        if (error){
            res.send(error);
        }
        res.send(result);
    });
});

// API to retrieve all documents with the category type 'Methematics'
app.get('/read/mathematics', async (req, res) => {
    ArticleModel.find({category: 'Mathematics'}, (error, result) => {
        if (error){
            res.send(error);
        }
        res.send(result);
    });
});

// API to retrieve all documents with the category type 'Technology'
app.get('/read/technology', async (req, res) => {
    ArticleModel.find({category: 'Technology'}, (error, result) => {
        if (error){
            res.send(error);
        }
        res.send(result);
    });
});

// API to create a new db entry or POST
app.post('/create', async (req, res) => {

    const category = req.body.category;
    const name = req.body.name

    const article = new ArticleModel({category: category, name: name})

    try {
        await article.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }

});

// Set port from local host to run backend server on
app.listen(3001, () => {
    console.log("Server running on port 3001....")
    console.log("ctrl 'C' to stop the server")
});