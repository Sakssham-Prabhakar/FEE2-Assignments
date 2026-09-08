import { useState } from "react";
function Formhandling(){
    const [form,setForm] = useState({})
    
    const [name,setName] = useState();
    const [lastName,setLastName] = useState();

    function handleChange(e){
        setName(e.target.value);
    }
    function handleLN(e){
        setlastName(e.target.value);
    }
    return(
        <>
        <input type="text" placeholder="Enter Name:" onChange={handleChange} value ={name}></input>
        <input type="text" placeholder="Enter Last Name:" onChange={handleLN} value ={lastName}></input>
        </>
    )
}
export default Formhandling;