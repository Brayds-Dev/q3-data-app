/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * This is the article details component. It is a function that uses a webhook to get
 * the article id from the URL parameter, then pass that id to axios to get the 
 * correct article from the database.
 * With the article object, it iterates over all the fields of the article as key:value pairs,
 * for example 'Category: Mathematics' and displays them to the browser
 * This avoids hard coding all possible fields some of which will not have data to display.
 */

import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useParams,} from 'react-router-dom'

function ArticleDetail(props)  {
  //useParams allows the component to see the URL parameter passed through the route -
  //This is the ID of the article we want to get via Axios.
  const {articleID} = useParams();

  //useState hooks is to set the article object we get back from axios.
  const [article, setArticle] = useState([]);

  //Define functionality for component.
  const showArticleFields = (article) => {
    return(
      <div>
        {/*Iterate object KEYS */}
        {Object.keys(article).map((key, index) => {
          //Returns everything except the id and a version field sometimes present called __v
          if(!(key === "_id" || key === "__v")){
            //Formats all sections with an h5 tag
            if(!(key === "about")){
              return (
                <div key={index}>
                  <h5>
                    {key.toUpperCase()}: {article[key]}
                  </h5>
                </div>
              );
            }
            //Formats only the "About" section with a <p> tag
            else{
              return (
                <div key={index}>
                  <p>
                    {key.toUpperCase()}: {article[key]}
                  </p>
                </div>
              );
            }
          }
          //Added to make sure something is returned in all cases.
          else{ 
            return null
          }   
        })}
      </div>
    )
  }

  //Function for deleting an article based on article id.
  const deleteArticle = (id) => {
    //Make a delete request via axios
    Axios.delete(`http://localhost:3001/delete/${id}`);
    alert('Article Deleted')
    document.location.href="/";
  };

  //this webhook performs this function immediately upon loading.
  useEffect(()=> {
    //Ask Axios politely to get just the article with this ID number.
    Axios.get(`http://localhost:3001/read/${articleID}`).then((response)=> {
      //assign the result to the the article variable
      setArticle(response.data);
    });
  });

  //Defines what the component renders to the page.
  return (
    <div>
      <h1>Article Details: </h1>
      {/* Links to a page that updates the current article, passing the article obj as a property. */}
      <button><Link to={{pathname: `/update/${articleID}`}}>Update Article</Link></button>
      {/**Button that deletes the article when clicked */}
      <button onClick={() => deleteArticle(articleID)}>Delete</button>
      {/**Calls the method that shows all article details. */}
      {showArticleFields(article)}
    </div>
  );
}

export default ArticleDetail