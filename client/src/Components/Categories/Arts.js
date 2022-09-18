/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * This component renders all articles available in the 'Arts' category.
 * It sends a custom Axios request to the back end that returns only articles 
 * matching this criteria.
 */

import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Arts() {
  //defines and sets the list of articles
  const [artsArticleList, setArtsArticleList] = useState([]);

  // On load, use Axios to send an http request to one of our custom routes created in the server index.js file
  useEffect(()=> {
      Axios.get("http://localhost:3001/read/arts").then((response)=> {
        setArtsArticleList(response.data);
      });
    }, []);

  //What is rendered to browser.
  return (
    <div>
        <h1>Arts page:</h1>
        {/**Display each article by name */}
        {artsArticleList.map((value, key)=> {
          return (
            <div key={key}>
              {/**Applies a link to the article name connecting to it's detail page. */}
                <h3><Link to={{pathname: `${value._id}`}}>{value.name}</Link></h3>
            </div>
          )
        })}
    </div>
  )
}
export default Arts