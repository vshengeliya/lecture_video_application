import React from 'react';
import Header from'./Components/Header';
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer'
import Count from './Count'
import './App.css';
import Welcome from './Components/Welcome'
import { Route , Switch} from 'react-router-dom'


class App extends React.Component {

  state={instructor: {}}

  appClickHandler =(instructor_obj)=>{
    // console.log("%c In App", 'color:red', instructor_obj)
    this.setState({instructor: instructor_obj})
  }

  render(){

    return (
    <>
    <Header />
    <Switch>
    <Route path="/welcome" component={Welcome}/>
    <Route path="/anime" render={()=><AnimeContainer instructor= {this.state.instructor}/>}/>
    <Route path="/instructors" render={()=> <InstructorContainer appClickHandler = {this.appClickHandler} />}/>

    </Switch>
    </>
    );
    
 }
}

//function way
//class way

export default App;
