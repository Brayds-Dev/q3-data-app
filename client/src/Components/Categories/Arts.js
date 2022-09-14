import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

function Arts() {
    const [artsArticleList, setArtsArticleList] = useState([]);

    // Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read/arts").then((response)=> {
          setArtsArticleList(response.data);
        });
      }, []);

  return (
    <>
    <NavBar/>
    <div>
        <h1>Arts page...</h1>

        {artsArticleList.map((value, key)=> {
        return (
            <div key={key}>
                <h3><Link to={{pathname: `${value._id}`}}>{value.name}</Link></h3>
            </div>
        )
})}
    </div>
    </>
    
  )
}

export default Arts