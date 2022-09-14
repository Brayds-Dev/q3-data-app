import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import NavBar from '../NavBar';

function Technology() {

    const [techArticleList, setTechArticleList] = useState([]);

    // Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read/technology").then((response)=> {
          setTechArticleList(response.data);
        });
      }, []);

  return (
    <>
    <NavBar />
    <div>
        <h1>Technology page...</h1>

        {techArticleList.map((value, key)=> {
        return (
            <div key={key}>
                <h3>{value.name}</h3>
            </div>
        )
})}
    </div>
    </>
  )
}

export default Technology