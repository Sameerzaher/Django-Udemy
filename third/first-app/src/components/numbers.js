import React, { useState } from 'react';
const Numbers = () => {
    const [numbers,setNumbers] = useState(['one','two','three']);

    const addNumber = () =>{
        setNumbers([...numbers, 'four'])
    }
    return (
        <div>
            <h1>Numbers</h1>
            {   numbers.map( num =>{
                return <h4>{num}</h4>
            })}
            <button onClick={addNumber}>add a number</button>
        </div>
    )
    
    
}
export default Numbers;