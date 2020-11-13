import { useState } from 'react';

export function Counter() {

    const [ value, setCount ] = useState(0);

    return (
        <div>
            <h3>{ value }</h3>
            <button
                onClick={ () => setCount(value - 1) }
            >-</button>
            <button
                onClick={ () => setCount(value + 1) }
            >+</button>
        </div>
    )
}