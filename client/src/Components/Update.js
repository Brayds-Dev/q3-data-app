import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams,} from 'react-router-dom'

//Displays a form similar to the 'Create' page that allows the fields of an article to be updated.
//We want to be able to add missing fields as well as update current ones.
function Update() {

    //Constants for the specific article
    const {articleID} = useParams();
    const [article, setArticle] = useState([]);

    //constants for possible update values.
    const [category, setCategory] = useState();
    const [type, setType] = useState();
    //const [name, setName] = useState();

    //Axios call when component first loads to get the article.
    useEffect(()=> {
        //Ask Axios politely to get just the article with this ID number.
        Axios.get(`http://localhost:3001/read/${articleID}`).then((response)=> {
          //assign the result to the the article variable
          setArticle(response.data);
        });
      }, []);

    //assigns all the fields to article but - 
    //???how to only update the fields that have changed if not all change???
    const assignNewArticleValues = () =>{
      article.category = category;
      article.type = type;
      //testing values get passed in properly THIS WORKS
      console.log("New category should be: " + article.category)
      console.log("New category should be: " + article.type)
    }
    //we may not need to assign the values to the article object because we already have the id
    //so we just pass in the changed fields to the axios call.

    //Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        //set the new values to article (???)
        //assignNewArticleValues();
        
        //call axios, pass in all the fields of the article object (except id and vers.)
        Axios.put(`http://localhost:3001/update/${articleID}`, 
        {
          //just give category and type now.
          category : category,
          type : type
        })
        .then(function (response) 
        {
          console.log(response);
          alert('Article created'); //pop up
          document.location.href="/"; //return to home page
        })
      }

    return(
        <div>
            {/**Title */}
            <div>
                <h1>Update existing article</h1>
            </div>
            
            {/**Form for updating each component. */}
            <form onSubmit={e => { handleSubmit(e) }}> 
                {/**Each input is a different possible field for the article. */}
                {/**Currently testing updates on only two fields. */}
                <label>
                    {"New category: "} 
                <input type="text" 
                  placeholder={article.category}
                  //onchange set the article.category not this function const category.
                  onChange={e => setCategory(e.target.value)}
                  name="category" />
                </label>
                <br></br>

                 <label>
                    {"New Type: "} 
                <input type="text" 
                  placeholder={article.type}
                  onChange={e => setType(e.target.value)}
                  name="type" />
                </label>
                <br></br> 

            <input type="submit" value="Submit" />
          </form>
        </div>
        
    )
}
export default Update