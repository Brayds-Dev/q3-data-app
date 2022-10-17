import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

//Displays a form similar to the 'Create' page that allows the fields of an article to be updated.
//We want to be able to add missing fields as well as update current ones.
function Update() {
  const { articleID } = useParams(); //get the article id from the url
  const [article, setArticle] = useState([]); //set the article object, based on id above.

  //Axios call when component first loads to get the article.
  useEffect(() => {
    //Ask Axios politely to get just the article with this ID number.
    Axios.get(`http://localhost:3001/read/${articleID}`).then((response) => {
      //assign the result to the the article variable
      setArticle(response.data);
    });
  });

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //call axios, pass in all the fields of the article object (except id and vers.)
    Axios.put(`http://localhost:3001/update/${articleID}`, {
      //send all article object fields.
      category: article.category,
      type: article.type,
      name: article.name,
      born: article.born,
      died: article.died,
      nationality: article.nationality,
      knownFor: article.knownFor,
      notableWork: article.notableWork,
      about: article.about,
    }).then(function (response) {
      console.log(response);
      alert("Article Updated"); //pop up
      document.location.href = "/"; //return home
    });
  };

  return (
    <div>
      {/**Title */}
      <div>
        <h1>Update existing article: </h1>
      </div>

      {/**Form for updating each component. */}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/**Each input is a different possible field for the article. */}
        {/**Currently testing updates on only two fields. */}
        {/**Each change directly modifies the fields of the article object.*/}
        <label>
          {"New category: "}
          <input
            type="text"
            placeholder={article.category}
            onChange={(e) => {
              article.category = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Type: "}
          <input
            type="text"
            placeholder={article.type}
            onChange={(e) => {
              article.type = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Name: "}
          <input
            type="text"
            placeholder={article.name}
            onChange={(e) => {
              article.name = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Birth Date: "}
          <input
            type="text"
            placeholder={article.born}
            onChange={(e) => {
              article.born = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Death Date: "}
          <input
            type="text"
            placeholder={article.died}
            onChange={(e) => {
              article.died = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Nationality: "}
          <input
            type="text"
            placeholder={article.nationality}
            onChange={(e) => {
              article.nationality = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Known For: "}
          <input
            type="text"
            placeholder={article.knownFor}
            onChange={(e) => {
              article.knownFor = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New Notable Work: "}
          <input
            type="text"
            placeholder={article.notableWork}
            onChange={(e) => {
              article.notableWork = e.target.value;
            }}
          />
        </label>
        <br></br>

        <label>
          {"New About: "}
          <textarea
            rows="5"
            cols="100"
            type="text"
            placeholder={article.about}
            onChange={(e) => {
              article.about = e.target.value;
            }}
            name="about"
          />
        </label>
        <br></br>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Update;
