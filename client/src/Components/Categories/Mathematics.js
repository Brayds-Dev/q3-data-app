import React, {useState, useEffect} from 'react'
import Axios from 'axios';

function Mathematics() {

    const [mathsArticleList, setMathsArticleList] = useState([]);

    // Using Axios send an http request to one of our custom routes created in the server index.js file
    useEffect(()=> {
        Axios.get("http://localhost:3001/read/mathematics").then((response)=> {
          setMathsArticleList(response.data);
        });
      }, []);
  return (

    
    <div>
        <h1>Mathematics page...</h1>

        {mathsArticleList.map((value, key)=> {
        return (
            <div key={key}>
                <h3>{value.name}</h3>
            </div>
        )
})}
    </div>
    
  )
}

export default Mathematics