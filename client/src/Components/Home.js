/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * This is the home page. The landing page for the application from which all 
 * functionality is based. Use the navigation bar to filter articles by category,
 * create a new article and log in or out. Use the search bar to look for a 
 * specific article by name.
 */

import React, {useState, useEffect} from 'react'
import {Link,} from 'react-router-dom';
import Axios from 'axios';
import './Home.css';

//The function based component holding all logic.
function Home() {
    
  //Define constants used by the search function,
  const [articleList, setArticleList] = useState([]); //List of displayed articles.
  const [textSearch, setTextSearch] = useState(''); //Input text in the search bar.

  //On loading, use this webhook to send an axios request to the index.js file.
  useEffect(()=> {
    //Make a 'read' call that returns all the files in the database to the article list.
    Axios.get("http://localhost:3001/read").then((response)=> {
      setArticleList(response.data);
    });
  }, []);

  //The return section decides what is displayed to the browser.
  return (
    <div> 
      <h1>Article List</h1>
      {/**The search bar */}
      <input type="search" 
              name='searchTerm' 
              placeholder='search by title...' 
              onChange={(event)=>{
                setTextSearch(event.target.value)}} />

      {/**Filters the articles by matching lowercase searchterm against lowercase article name. */}
      {articleList.filter(({name})=>name.toLowerCase().includes(textSearch.toLowerCase())).map((value, key) => {
        return (
          <div key={key}>
            {/*Turns the names into links to the respective article detaiil pages using the _id field as URL*/}
            <h3><Link to={{pathname: `${value._id}`}}>{value.name}</Link></h3>
          </div>
        )
      })}

    </div>
  );
}
export default Home;
