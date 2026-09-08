import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Display from './Display'
import Formhandling from './Formhandling'
import Hooks from './Hooks'

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("Aman");
  const [theme,setTheme] = useState("light");
  const [student,setStudent] = useState({name:"Sakssham",age:20});
  const [fruits,setFruits] = useState(["Apple","Banana","Mango"]);
  function handleClick() {
    setCount((prev) => prev + 1); // Increments cleanly by 1
  }

  function handleName() {
    setName((prev) => (prev === "Aman" ? "Sakssham" : "Aman"));
  }

  function handleTheme(){
    setTheme(theme == "light"?"dark":"light");
  }

  function handleLastName(){
    setStudent({...student,lastname:"Prabhakar"});
  }

  function handleFruits(){
    setFruits([...fruits,"Grapes","Orange"]);
  }

  return (
    <>
    <div className={theme==="light"?"light":"dark"}  style={{border:"2px solid maroon"}}>
      <button onClick={handleTheme}>{theme=="light"?"Dark":"Light"}</button>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Add</button>
      
      {/* Ensure Display is imported or defined */}
      <Display count={count} />

      <h1>Name: <span className={name==="Aman"?"red":"green"}>{name}</span></h1>
      {/* Passed as a reference without parentheses */}
      <button onClick={handleName}>Change name</button>

      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.lastname?student.lastname:"We dont have last Name."}</p>
      <button onClick={handleLastName}>Add last name</button>

      <ul>
        {fruits.map((fruit)=>{
          return <li key={fruit}>{fruit}</li>}
        )}
      </ul>
      <button onClick={handleFruits}>Add fruits</button>

      <Formhandling/>
      <Hooks/>
      </div>
    </>
  );
}
export default App