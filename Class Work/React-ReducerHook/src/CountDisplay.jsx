import { useContext } from "react"
import { ReducerContext } from "./Context/ReducerContext"
function CountDisplay(){
    const {count,dispatch} = useContext(ReducerContext);
    return(
        <>
            <h1>Count Display</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch({type:"double"})}> Double the count</button>
            <button onClick={()=>dispatch({type:"half"})}> Half the count</button>
        </>
    )
}

export default CountDisplay