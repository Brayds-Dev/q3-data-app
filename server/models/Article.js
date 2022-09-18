/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * Defines the schema for creating new article documents, and which collection to
 * put them into in the Mongo database. Requires the Mongoose library.
 * 
 * All fields are strings, and the only required field is category when creating a new entry.
 */

const mongoose = require('mongoose');

//Define the article schema including all fields.
const ArticleSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    born: {
        type: String,
    },
    died: {
        type: String,
    },
    nationality: {
        type: String
    },
    knownFor: {
        type: String
    },
    notableWork: {
        type: String
    },
    about: {
        type: String
    }
});

//define the model and collection in the mongo database.
const Article = mongoose.model("schooldb", ArticleSchema, 'articles');
module.exports = Article;