import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
// import './Counter.jsx'

function App() {
  const [count, setCount] = useState(0);
  const name = "Sakssham";
  const age = 19;
  const flag = false;

  function greet() {
    return "Welcome";
  }

  return (
    <>
      <Navbar />
      <h1>Chitkara</h1>
      <h2>G1</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Name: {name} ({age})</p>

      <p>{greet()}</p>
      <p>{name.toUpperCase()}</p>
      <p>{flag ? "Sakssham" : "Prabhakar"}</p>

      <Home />
    </>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import Navbar from './Navbar'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const name = "Sakssham";
//   const age = 19;
//   const flag = false;
  
//   function greet(){
//     return "Welcome";
//   }
//   return (
//     <>
//     <h1> Chitkara </h1>
//     <h2> G1 </h2>
//     <p> Lorem ipsum dolor sit amet.</p>
//     <p>Name : {name} {age}</p>
//     <p className="text"></p>
//     <label htmlfor=""></label>
//     {/* use camel case  */}
//     <p>{greet()}</p>
//     <p>{name.toUpperCase}</p>
//     {/* ifelse , for loop , while loop we cant use in */}
//     <p>{flag?"Sakssham":"Prabhakar"}</p>

//     {/* <p style={{color:"red",fontSize}} */}

//     {/* <img src={h} alt=""/>
//     <a href = {url}>Google</a> */}
//     </>
//   )
// }

// export default App


