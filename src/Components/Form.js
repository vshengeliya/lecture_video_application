import React from 'react'




class Form extends React.Component {

    state ={
        name: "",
        mod: ""
    }

    changeHandler =(e)=>{

        this.setState({ [e.target.name]:e.target.value})
        
        // if (e.target.name === 'name'){
            
        //     this.setState({name:e.target.value}, )
        // }else{
        //     this.setState({mod:e.target.value})
        // }
    }
    render(){


        return(
             <form onSubmit={(e)=>{
        
                     e.preventDefault()
                     this.props.submitHandler({name:e.target[0].value})
                     this.setState({name:"", mod:""})
        
                     }}>
                     <input type="text" name="name" placeholder="enter instuctor name" value={this.state.name} onChange={this.changeHandler}/>
                     <input type="number" name="mod" placeholder="enter mod number" value={this.state.mod} onChange={this.changeHandler}/>
                     <input type="submit" value="create instructor" />
            </form>
        )
    }   
}
            
export default Form

// function Form (props){ 
    
    //     return(
        //         <form onSubmit={(e)=>{
            
            //             e.preventDefault()
            //             props.submitHandler({name:e.target[0].value})
            
            //             // console.log(e.target[0].value)
            //             }}>
            //             <input type="text" placeholder="enter instuctor name" />
            //             <input type="submit" value="create instructor" />
            //         </form>
            //     )
            // } --> uncontrolled component - single source of truth is the DOM