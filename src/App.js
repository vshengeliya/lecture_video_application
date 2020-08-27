import React from 'react';
import logo from './logo.svg';
import Header from'./Components/Header';
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer'
import Count from './Count'
import './App.css';


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
    <InstructorContainer appClickHandler = {this.appClickHandler} />
    <AnimeContainer instructor= {this.state.instructor}/>
    </>)
  }

}

//function way
//class way

export default App;
