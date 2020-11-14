import { useState } from 'react';

export function Input() {

    const [ inputValue, setInputValue ] = useState("");

    return (
        <div>
            {inputValue && 
            <h1>{inputValue}</h1>
            }
            <input 
            value={inputValue} 
            // onChange={ (e) => setInputValue(e.target.value)}/>
            onChange={ (e) => {
                if(!e.target.value.toLowerCase().includes("y")) {
                    setInputValue(e.target.value)}
                }
            }/>
        </div>
    )
}