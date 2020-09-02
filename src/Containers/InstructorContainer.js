import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'
import Search from '../Components/Search'

class InstructorContainer extends React. Component{

    state={
        instructors:[{id:1,name:"Steven", mod:3}, {id:2, name:"Caryn", mod:1}, {id:3, name:"Greg", mod:2}, {id:4, name: "Tashwan", mod:4}],

        filteredInstructors:[{id:1,name:"Steven", mod:3}, {id:2, name:"Caryn", mod:1}, {id:3, name:"Greg", mod:2}, {id:4, name: "Tashwan", mod:4}],

        searchValue: ""
    }

    searchHandler=(e)=>{
        console.log(e.target.value)
        this.setState({searchValue:e.target.value})
    }

    componentDidMount(){
        fetch("")
        .then()
        .then(data => this.setState({instructors:data})
        )}
    
    filteredInstructors=()=>{
        return this.state.filteredInstructors.filter((inst)=>inst.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))   
    }

    submitHandler =(obj)=>{
        let newArray =[...this.state.instructors, obj]
        // console.log("old state", (newArray))

        this.setState({instructors: newArray})
    }

    render(){
    
        return(
        <>
            {this.state.instructors.length===0? <h1>LOADING</h1> :
           <>
                <Switch>
                    <Route path='instuctors/:id' render={({match})=> {
                        let id= parseInt(match.params.id)
                        let foundInstructor = this.state.instructor.find((instructor)=>instructor.id ===id)
                        return <Instructor instructor={foundInstructor} appClickHandler={this.props.appClickHandler}/>
                    }}/>

                        <Route path='/instructors/' render={()=>{
                            let instructors = this.filteredInstructors().map((instructorObj)=> <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={this.props.appClickHandler}/>)
                        
                            return(
                            <>

                                {this.state.instructors.length === 0? <h1>Loading Instructors</h1>:
                                <>
                                    <Form submitHandler ={this.submitHandler}/>
                                    <br/>
                                    <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
                                    {instructors}
                                </>
                                 }
                            </>
                            )             
                        }}/>
                </Switch>
                    
           </>
            }

        </>
        )
    }
}

export default InstructorContainer