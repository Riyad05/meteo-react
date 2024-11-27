import React,{useState,useEffect} from "react";

const Inscription=()=>{
    const[nom,setnom]=useState('')
    const[prenom,setprenom]=useState('')
    const[age,setage]=useState('')
    const[message,setmassage]=useState('')
function handlafficher() {
    setmassage(`nom : ${nom}, prenom : ${prenom}, age : ${age}`)
}
useEffect(function(){
    document.title=nom+' '+prenom;
},[nom,prenom])
return (
    <div>
        nom: <input type="text" value={nom} onChange={(event)=>setnom(event.target.value)} /><br/>
        prenom: <input type="text" value={prenom} onChange={(event)=>setprenom(event.target.value)} /><br/>
        age: <input type="text" value={age} onChange={(event)=>setage(event.target.value)} /><br/>
        <button onClick={handlafficher}>afficher</button>{message}
    </div>
)
}
export default Inscription;
