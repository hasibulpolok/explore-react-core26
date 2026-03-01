import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  

//   return (
//     <>
//       <h2>Welcome to react</h2>
//     </>
//   )
// }

// export default App


// function Apps (){
//   return(
//   <>

//   dui number
//   </>
//   )
// }

// export default Apps;

const Apps = ()=>{
 
  return(
    <>
<Person/>
    </>
  )
}

const Person = ()=>{
  
  const age = 28;
  const name = "Polok";
  return(
    <>
       <p>I'm {name}. I'm {age} years old</p>
    </>
  )
}

export default Apps;