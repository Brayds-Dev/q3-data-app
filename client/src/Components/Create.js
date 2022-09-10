import React from 'react'
import axios, { Axios } from 'axios';

//We use a class based component to create the form

//The form that allows users to enter information into the article collection
class Create extends React.Component {
  //Class object constructor method sets up the variable for the different states of the articles.
  constructor(props) {
    super(props);
    //note - these have to match the 'name' fields on the form.
    this.state = {
                  category: '',
                  type: '',
                  name: '',
                  born: '',
                  died: '',
                  nationality: '',
                  knownFor: '',
                  notableWork: '',
                  about: ''
                  };
    //sets the handlers for event changers.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
    console.log(event.target.name + ", " + event.target.value);
  }

  //this is where the call to the database will be made
  handleSubmit(event) {
    //pop up
    alert('This was submitted: ' + this.state.name + this.state.category);
    //prevents default values being used
    event.preventDefault();

    //send post request to server
    axios.post("http://localhost:3001/create",
    {
      category : this.state.category,
      name : this.state.name
    });

    //state reset for the fields.
    this.setState({
      category: '',
      type: '',
      name: '',
      born: '',
      died: '',
      nationality: '',
      knownFor: '',
      notableWork: '',
      about: ''
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label>
          Category:
          <input type="text" 
                 //defaultValue={"i.e 'Technology'"}
                 value={this.state.category} 
                 onChange={this.handleChange}
                 name="category" />
        </label>

        <br></br>

        <label>
          Name:
          <input type="text" 
                 value={this.state.name} 
                 onChange={this.handleChange}
                 name="name" />
        </label>
        <br></br>
        
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Create




// import React, { useState } from "react";
// import { useNavigate } from "react-router";
 
// export default function Create() {
//  const [form, setForm] = useState({
//    name: "",
//    position: "",
//    level: "",
//  });
//  const navigate = useNavigate();
 
//  // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }
 
//  // This function will handle the submission.
//  async function onSubmit(e) {
//    e.preventDefault();
 
//    // When a post request is sent to the create url, we'll add a new record to the database.
//    const newPerson = { ...form };
 
//    await fetch("http://localhost:3000/record/add", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });
 
//    setForm({ name: "", position: "", level: "" });
//    navigate("/");
//  }
 
//  // This following section will display the form that takes the input from the user.
//  return (
//    <div>
//      <h3>Create New Record</h3>
//      <form onSubmit={onSubmit}>
//        <div className="form-group">
//          <label htmlFor="name">Name</label>
//          <input
//            type="text"
//            className="form-control"
//            id="name"
//            value={form.name}
//            onChange={(e) => updateForm({ name: e.target.value })}
//          />
//        </div>


//        <div className="form-group">
//          <label htmlFor="position">Position</label>
//          <input
//            type="text"
//            className="form-control"
//            id="position"
//            value={form.position}
//            onChange={(e) => updateForm({ position: e.target.value })}
//          />
//        </div>
       
//        <div className="form-group">
//          <input
//            type="submit"
//            value="Create person"
//            className="btn btn-primary"
//          />
//        </div>
//      </form>
//    </div>
//  );
// }