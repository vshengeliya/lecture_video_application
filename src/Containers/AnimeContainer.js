import React from 'react'
import Instructor from '../Components/Instructor'

function AnimeContainer(props){

    // console.log("Props in amine", props)

    // let instructors = props.instuctors.map((instructorObj)=><Instructor instructor ={instructorObj}/>)

    //reusing Instuctor components

    console.log(props)
return(

    <>
        <h2>Amine Container</h2>
        <Instructor instructor={props.instructor}/>  
    </>
    )
}

export default AnimeContainer