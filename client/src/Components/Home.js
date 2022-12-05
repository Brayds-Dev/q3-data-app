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
    

    const [articleList, setArticleList] = useState([]);
    const [textSearch, setTextSearch] = useState('');

    // Atempt to set token from local storage to header and add to request
    // const token = localStorage.getItem('token');
    // const headers = { Authorization: `Bearer ${token}`};

    //console.log(textSearch);

    //Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read", {
            headers: {
              "x-access-token": window.localStorage.getItem("token"),
            },
          } ).then((response)=> {
          setArticleList(response.data);
        })
        .catch((error)=>{
          console.log(error);
          alert("Not authenticated")
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
            <div className='article-list'>
              <Link to={{pathname: `${value._id}`}}>
                <h3>{value.name}</h3>
              </Link>
            </div>
            
          </div>
        )
      })}

    </div>
  );
}
export default Home;
