import './App.css';
import CountDisplay from './CountDisplay';
import { useReducer } from 'react';
import { reducer } from './Reducer';
import { ReducerContext } from './Context/ReducerContext';
function App() {

  const [count, dispatch ] = useReducer(reducer,0);

  return (
    <>
    <ReducerContext.Provider value ={{count,dispatch}}>
      <h1>App Component</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type:"data",payload:5})}> Increase By 5 </button>
      <button onClick={()=>dispatch({type:"increment"})}> Increase </button>
      <button onClick={()=>dispatch({type:"decrement"})}> Decrease </button>
      <CountDisplay/>
    </ReducerContext.Provider>
      
    </>
  );
}

export default App