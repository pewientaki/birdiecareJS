import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const NoteInput = ({ counter }) => {

    const [count, setCount] = useState();
    const data = useSelector(state => state.counter)

    useEffect(() => {
        setCount(counter);
    }, [counter])

    console.log(count);
    console.log(counter);
    return (
        <div>
            {/* <input type='text' name='note' placeholder='Note' />
            <button>Add note</button>
            <hr />
            <ul>
                {notes.map((note, i) => {
                    return <li key={i}>{note.text}</li>
                })}
            </ul> */}
            <h1>Bleble: {count}, {data}</h1>
        </div>
    );
};

export default NoteInput;