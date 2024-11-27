import React,{useState} from 'react'

export default function ListeTaches() {
    const [tasks,setTasks]= useState([]);
    const [newtask,setnewTask]= useState('');
    function HandelTask (e){
        setnewTask(e.target.value)
    }
    function HandeleAjouter(){
        if(newtask.trim()===""){
            alert("saisir une tache")
            return 
        }
        setTasks([...tasks,newtask])
    }
    function Handledelete(index){
            let newtasks=tasks.filter((element,_index)=>_index !== index)
            setTasks(newtasks)
    }

    
  return (
    <div>
        <input type="text" value={newtask} onChange={HandelTask} />
        <button onClick={HandeleAjouter}>Ajouter</button>
        <ul>
            {
                tasks.map((element,index)=><li key={index}>{element}
                <button onClick={()=>Handledelete(index)}>Supprimer</button></li>)
            }
        </ul>
    </div>
  )
}