import React,{useState} from 'react'

const Compteur=()=> {
  const [count, setCount] = useState(0);
    function incrementer()
     {
      setCount(count+1)  
    }
    function decrementer() {
        setCount(count-1)
    }
return(
  <div>
    <button onClick={incrementer}>incrementer</button>
    <button onClick={decrementer}>decrementer</button>
    {count}
  </div>
)
}

export default Compteur