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
    //console.log(event.target.name + ", " + event.target.value);
  }

  //this is where the call to the database will be made
  handleSubmit(event) {
    //pop up
   // alert('This was submitted: ' + this.state.name + this.state.category);
    //prevents default values being used
    event.preventDefault();

    //send post request to server
    axios.post("http://localhost:3001/create",
    {
      category : this.state.category,
      type : this.state.type,
      name : this.state.name,
      born : this.state.born,
      died : this.state.died,
      nationality : this.state.nationality,
      knownFor : this.state.knownFor,
      notableWork : this.state.notableWork,
      about : this.state.about
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
                 value={this.state.category} 
                 onChange={this.handleChange}
                 name="category" />
        </label>
        <br></br>

        <label>
          Type:
          <input type="text" 
                 value={this.state.type} 
                 onChange={this.handleChange}
                 name="type" />
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
        
        <label>
          Born:
          <input type="text" 
                 value={this.state.born} 
                 onChange={this.handleChange}
                 name="born" />
        </label>
        <br></br>
        
        <label>
          Died:
          <input type="text" 
                 value={this.state.died} 
                 onChange={this.handleChange}
                 name="died" />
        </label>
        <br></br>
        
        <label>
          Nationality:
          <input type="text" 
                 value={this.state.nationality} 
                 onChange={this.handleChange}
                 name="nationality" />
        </label>
        <br></br>
        
        <label>
          Known for:
          <input type="text" 
                 value={this.state.knownFor} 
                 onChange={this.handleChange}
                 name="knownFor" />
        </label>
        <br></br>
        
        <label>
          Notable work:
          <input type="text" 
                 value={this.state.notableWork} 
                 onChange={this.handleChange}
                 name="notableWork" />
        </label>
        <br></br>
        
        <label>
          About:
          <input type="text" 
                 value={this.state.about} 
                 onChange={this.handleChange}
                 name="about" />
        </label>
        <br></br>

  
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Create