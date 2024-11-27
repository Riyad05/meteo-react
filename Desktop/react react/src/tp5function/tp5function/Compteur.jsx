import React, { useState } from 'react'

function Compteur() {
    const [count,setCount] = useState(0);
    function HandleIncrementer(){
        setCount(count+1);
    }
    function HandleInitialiser(){
        setCount(0);
    }
    function HandleDecrementer(){
        if(count>0){
            setCount(count-1);
        }
    }
  return (
    <div>
        <button onClick={HandleIncrementer}>Incrementer</button>
        <button onClick={HandleDecrementer}>decrementer</button>
        <button onClick={HandleInitialiser}>Initialiser</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Compteur