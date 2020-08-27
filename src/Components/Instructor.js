import React from 'react'


class Instructor extends React.Component {
    
    instructorClickHandler=() => {
        this.props.appClickHandler(this.props.instructor) 
    }
    
    render(){
        console.log(this.props)
        console.log(this.props.instructor.name)
     return (
     <p onClick={this.instructorClickHandler}> {this.props.instructor.name}</p>
    // <h3>Name</h3>

        )
    }

}


export default Instructor