import React from 'react'

const CourseForm = (props) =>{
    return(
        <form onSubmit={props.Addvalue}>
            <input type="text" onChange={props.Updatevalue} value={props.current}></input>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;