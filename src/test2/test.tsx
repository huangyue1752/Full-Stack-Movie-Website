import {useRef, useState} from 'react';
import React from 'react';

interface DemoProps{}

export default function Demo({}:DemoProps) {
const [count,setCount]=useState(0);
const countRef=useRef(0);

const handleIncrement=()=>{
    countRef.current++;
    console.log('Ref:',countRef.current);

};
return (
    <div className='tutorial'>
    Count: {countRef.current}
    <button onClick={handleIncrement}>Increment</button>

    </div>

);
    
}