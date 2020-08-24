import React from 'react';
import logo from './logo.svg';
import Header from'./Header';
import './App.css';


function App() {
  const instructor_names = ["Steven", "Caryn", "Greg"]
  return (
  <Header instructors = {instructor_names}/>
  );
}

//function way
//class way

export default App;
