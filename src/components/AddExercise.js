
import React from 'react';
import Form from 'react-bootstrap/Form';



class addExercises extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
      this.setState({title: event.target.value});    
      
    }
  
    async handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.location);
      event.preventDefault();
      let result = await fetch('http://localhost:5000/exercises', {
        method: 'post',
        // mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          "title": this.state.title
          
        })
      });
      console.log(result);
      
      this.setState({title: ''});     
      
    }
  
    render() {
      return (       
        
        <form onSubmit={this.handleSubmit}>
          <label for="name" >Enter name of the exercise: </label>
          <input  id="name" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form> 
        

      );
    }
  }

  export default addExercises;
