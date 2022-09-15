//import React, {useState, useEffect} from 'react'
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useParams,} from 'react-router-dom'

function ArticleDetail(props)  {
  //useParams allows the component to see the URL parameter passed through the route -
  //This is the ID of the article we want to get via Axios.
  const {articleID} = useParams();

  //useState hooks is to set the article object we get back from axios.
  const [article, setArticle] = useState([]);

  const showArticleFields = (article) => {
      return(
        <div>
          <h1>Article Details: </h1>
          {/* Links to a page that updates the current article, passing the article obj as a property. */}
          <button><Link to={{pathname: `/update/${article._id}`}}>Update Article</Link></button>
          {/* 👇️ iterate object KEYS */}
          {Object.keys(article).map((key, index) => {
            //Returns everything except the id and an odd field sometimes present called __v
            if(!(key === "_id" || key === "__v")){
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
      })}
        </div>
      )
  }

  //this webhook performs this function immediately upon loading.
  useEffect(()=> {
    //Ask Axios politely to get just the article with this ID number.
    Axios.get(`http://localhost:3001/read/${articleID}`).then((response)=> {
      //assign the result to the the article variable
      setArticle(response.data);
    });
  }, []);

    return (
      showArticleFields(article)
    );
  }
export default ArticleDetail