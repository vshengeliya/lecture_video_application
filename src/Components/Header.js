import React from 'react'


// function Header(props){
//     console.log(props)
    // let instuctors = props.instructors.map(function(instructor_name){return <Bline name={instructor_name}/>})
//     return(
//          <div>
//              <h2>Welcome to our App</h2>
//              {instuctors}
//          </div>
//     )

// } --> use function method to create Components as a primary, if nessesary - use Class method

class Header extends React.Component{

    // constructor(props){
        //     super (props)
        //     this.state={color: "red"}
        
        // } --> for ES4, ES5, Labs
        //We set initial state in the constructor because it runs first

    state={color:"black"}
    //use state to manage info that is privat for this singular Component
    //for ES6
    //state used only with Class components unless usintg Hooks


    clickHandler = ()=>{
        //don't invoke () the function inside of out click in return.
        //we don't want it to be invoked the moment it's been created, we want it to be invoked when the event happens (on Click)
        console.log("been clicked")

        //setState method in React that takes an objec and compare what is our current object state
        if (this.state.color =="black"){
            this.setState({ color: "blue" })
        } else {
            this.setState({color: "black"})
        }
    }

    render(){

        return(
              <div>
                  <h1 onClick={this.clickHandler} style={{"border-style": "dashed", "border-color":`${this.state.color}` }}>Welcome to our App</h1>
              </div>
         )
    }
}


export default Header



