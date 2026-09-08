import { useState } from 'react';
function Counter(){
        // let count = 0;
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <>
            <h1>Count :{count}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;