import React from 'react'



class Count extends React.Component{

    // state={count:0}
    constructor() {
        super()
        this.state = {
          count: 0
        }
      }
    
    increment = ()=>{
        console.log(this.state)
        const newCount = this.state.count+1
        
        this.setState({count:newCount})
        console.log(newCount)
    }

    render(){


        return(
              <div>
                <h2 onClick={this.increment}>{this.state.count}</h2>
              </div>
         )
    }
}


export default Count