import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Apps = () => {

  return (
    <>
      <Person />
      <Student />
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
  return (
    <>
      <p>I'm {name}. I'm {age} years old</p>
    </>
  )
}

export default Apps;