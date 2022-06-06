import React, { Component } from 'react';

class CoureseList extends Component {

  state = {
    isEdit : false
  }
  // render course
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={()=> {this.toggleState()}}>Edite Course</button>
        <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
      </li>
    )

  };

  //updatePutton 
  updatePutton = (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();

  }

  // render update form
  renderUpdateForm = () =>{
    return(
    <form onSubmit={this.updatePutton}>
      <input type="text"  ref={(v) =>{this.input = v}} defaultValue={this.props.details.name}/>
      <button>Update Course</button>
    </form>
    )
  };



  // toggleState
  toggleState = () =>{
    let {isEdit} = this.state
    this.setState({
      isEdit : !isEdit
    })
  }


  render() {
    let {isEdit} = this.state
    return (
      <React.Fragment>
        {isEdit ? this.renderUpdateForm(): this.renderCourse()}
      </React.Fragment>
    );
  }

};

export default CoureseList;
