import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import './Home.css';
import {Link,} from 'react-router-dom';

function Home() {
    
    const [articleList, setArticleList] = useState([]);
    const [textSearch, setTextSearch] = useState('');

    //console.log(textSearch);

    //Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=> {
          setArticleList(response.data);
        });
      }, []);

  return (
    <div>
        <h1>Article List</h1>
        <input type="search" 
               name='searchTerm' 
               placeholder='title keyword....' 
               onChange={(event)=>{
                setTextSearch(event.target.value)}} />
        
        {articleList.filter(({name})=>name.toLowerCase().includes(textSearch.toLowerCase())).map((value, key) => {
            return (
                <div key={key}>
                    <h3><Link to={{pathname: `${value._id}`}}>{value.name}</Link></h3>
                </div>
            )
        })}
    </div>
  )
}

export default Home