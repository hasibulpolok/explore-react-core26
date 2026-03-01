import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Apps = () => {

  return (
    <>
      <Person />
      <Student />
      <Developer name="Polok"  tech="JS"/>
      <Developer name="Ridu"  tech="Laravel"/>
      <Developer name="Tanjil" tech="Laravel" />
    </>
  )
}

const Student = () => {
  return (
    <div className='student'>
      <h2>  name:</h2>
      <h2> department:</h2>
    </div>
  )
};
const Person = () => {

  const age = 28;
  const name = "Polok";
  const personStyle ={
    color:'red',
    fontSize:'50px'
  }
  return (
    <>
      <p style={personStyle}>I'm {name}. I'm {age} years old</p>
    </>
  )
}

const Developer =(props)=>{
   const {name,tech} = props;
  return(
   <>
  <div style={{ border: '2px solid green', margin: '10px 10px 10px 10px' , padding:'0 10px 0 10px' , borderRadius:'20px' }}>
     <h2>Developer {name}</h2>
   <h2>Technology {tech}</h2>
  </div>
   </>
  )
}

export default Apps;