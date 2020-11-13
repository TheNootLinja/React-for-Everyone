import { useState } from 'react';

export function Accordion() {

    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <div>
            { isOpen ? 
                <h3>Show Me</h3>
                : null
            }
            {/* { isOpen && 
                <h3>Show Me</h3>
            } */}
            <button
                onClick={ () => setIsOpen(!isOpen) }
            >Toggle</button>
        </div>
    )
}