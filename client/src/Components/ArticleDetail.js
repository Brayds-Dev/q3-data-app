//import React, {useState, useEffect} from 'react'
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useParams,} from 'react-router-dom'

//first - test getting the id from the parent component into a prop here.
//now working

//second, make sure its formatted correctly
//formatting correct - had to get read of that sneaky '}'

//check axios is returning data to me 
//yea that bits working too

//so the data returned is an object - how to view all the fields?
//article.<fieldname>. Duh

//how to iterate each field and display them nicely?

function ArticleDetail(props)  {
  //useParams allows the component to see the URL parameter passed through the route -
  //This is the ID of the article we want to get via Axios.
  const {articleID} = useParams();

  //useState hooks is to set the article object we get back from axios.
  const [article, setArticle] = useState([]);

  //this webhook performs this function immediately upon loading.
  useEffect(()=> {
    //Ask Axios politely to get just the article with this ID number.
    Axios.get(`http://localhost:3001/read/${articleID}`).then((response)=> {
      //assign the result to the the article variable
      //have checked and this IS getting a response
      setArticle(response.data);
      //Should probably have some try-catch thingy going on here.
    });
  }, []);

    return (
      <div>
        <h1>Article Details:</h1>
        <h2>{article.category}</h2>
        <h2>{article.name}</h2>
        <h2>{article.type}</h2>
        <p>{article.about}</p>
      </div>
    );
  }
export default ArticleDetail