import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams,} from 'react-router-dom'

//Displays a form similar to the 'Create' page that allows the fields of an article to be updated.
//We want to be able to add missing fields as well as update current ones.
function Update() {

  const {articleID} = useParams(); //get the article id from the url
  const [article, setArticle] = useState([]); //set the article object, based on id above.

  //Axios call when component first loads to get the article.
  useEffect(()=> {
      //Ask Axios politely to get just the article with this ID number.
      Axios.get(`http://localhost:3001/read/${articleID}`).then((response)=> {
        //assign the result to the the article variable
        setArticle(response.data);
      });
    }, []);

  
  //Handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      
      //call axios, pass in all the fields of the article object (except id and vers.)
      Axios.put(`http://localhost:3001/update/${articleID}`, 
      {
        //send all article object fields.
        category : article.category,
        type : article.type
      })
      .then(function (response) 
      {
        console.log(response);
        alert('Article created'); //pop up
        document.location.href="/"; //return home
      })
    }

  return(
    <div>
        {/**Title */}
        <div>
            <h1>Update existing article: </h1>
        </div>
        
        {/**Form for updating each component. */}
        <form onSubmit={e => { handleSubmit(e) }}> 
            {/**Each input is a different possible field for the article. */}
            {/**Currently testing updates on only two fields. */}
            {/**Each change directly modifies the fields of the article object.*/}
            <label>
              {"New category: "} 
              <input type="text" 
              placeholder={article.category}
              //onchange updates the article category
              onChange={e => {article.category = e.target.value;}}
              />
            </label>
            <br></br>

              <label>
              {"New Type: "} 
              <input type="text" 
              placeholder={article.type}
              //onchange updates the article type
              onChange={e => {article.type = e.target.value;}}
              />
            </label>
            <br></br> 

        <input type="submit" value="Submit" />
      </form>
    </div>
      
  )
}
export default Update