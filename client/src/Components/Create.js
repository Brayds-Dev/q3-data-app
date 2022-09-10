import React from 'react'

//We use a class based component to create the form

//The form that allows users to enter information into the article collection
class Create extends React.Component {
  //Class object constructor method sets up the variable for the different states of the articles.
  constructor(props) {
    super(props);
    //note - these have to match the name fields.
    this.state = {
                  name: '',
                  category: ''};
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
    //state reset
    this.setState({
      name: '',
      category: ''});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" 
                 value={this.state.name} 
                 onChange={this.handleChange}
                 name="name" />
        </label>
        <br></br>
        <label>
          Categories:
          <input type="text" 
                 value={this.state.category} 
                 onChange={this.handleChange}
                 name="category" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Create