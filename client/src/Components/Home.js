import React, {useState, useEffect} from 'react'
import Axios from 'axios';

function Home() {
    
    const [articleList, setArticleList] = useState([]);

    const [textSearch, setTextSearch] = useState('');
  
    console.log(textSearch);

    // Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=> {
          setArticleList(response.data);
        });
      }, []);

  return (
    <div>
        <h1>Article List</h1>
        <input type="search" name='searchTerm' placeholder='search title...' onChange={(event)=>{setTextSearch(event.target.value)}} />
      
        {articleList.filter(({name})=>name.includes(textSearch)).map((value, key) => {
            return (
                <div key={key}>
                    <h3>{value.name}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Home