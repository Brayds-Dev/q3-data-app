import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {
    //Class object constructor method sets up the variable for the different states of the articles.
    constructor(props) {
      super(props);
      //note - these have to match the 'name' fields on the form.
    //   this.state = {
    //                 category: '',
    //                 type: '',
    //                 name: '',
    //                 born: '',
    //                 died: '',
    //                 nationality: '',
    //                 knownFor: '',
    //                 notableWork: '',
    //                 about: ''
    //                 };
    //   //sets the handlers for event changers.
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <div>
                <h1>Update existing article</h1>
            </div>
        )
    }
}