import React,{ Component } from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';



class App extends Component { 
  state = {
    courses : [
      {name :'HTML'},
      {name :'CSS'},
      {name :'JQUERY'},
      {name :'JAVA'}
        
    ],
    current : ''
    
  };

  //UpdateValue
  Updatevalue = (e) => {
    this.setState({
      current : e.target.value
    })
  }

  

  //AddValue

  AddValue = (e) =>{
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    courses.push(
      {name : current}
    )
    this.setState({
      courses,
      current : ''
    })
  }

  //deletecoure
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  };

  //edit course 
  editeCourse = (index,value) => { 
    let {courses} = this.state
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  };

  render(){
    const {courses} = this.state;
    const courselist = courses.map( (course, index) => {
      return <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse = {this.editeCourse}/>
    })

    return (
      <section className="App">
         <h2>Add Courses</h2>

         <CourseForm  Updatevalue= {this.Updatevalue} Addvalue={this.AddValue} current={this.state.current}/>
         <ul>
         {courselist}
         </ul>
         

      </section>
    );
  }
  
}

export default App;
