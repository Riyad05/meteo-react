import React,{useState} from 'react'

const Formulaire=()=>{
    const[nom,setnom]=useState('')
    const[prenom,setprenom]=useState('')
    const[salaire,setsalaire]=useState('')
    const[message,setmessage]=useState('')

    function handlclick(e) {
        e.preventDefault();
        setmessage(`nom: ${nom} , prenom: ${prenom} , salaire: ${salaire} DH`)
    }
return(
    <div>
        <form>
        nom: <input type="text" onChange={(e)=>setnom(e.target.value)}  name="nom" value={nom}/><br/>
        prenom: <input type="text"  onChange={(e)=>setprenom(e.target.value)}  name="prenom" value={prenom}/><br/>
        salaire: <input type="number"  onChange={(e)=>setsalaire(e.target.value)}  name="prenom" value={salaire} /><br/>
        <input type="submit" onClick={handlclick} value="afficher"/><br/>
        {message}
        </form>
    </div>
)
}
 export default Formulaire;