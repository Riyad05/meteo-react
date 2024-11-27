import React,{useState} from 'react'

export default function SuiviClics() {
    const [clickbtn1,setClickbtn1] = useState(0)
    const [clickbtn2,setClickbtn2] = useState(0)
  return (
    <div>
      <button onClick={()=>setClickbtn1(clickbtn1 + 1)}>button 1</button>
      <button onClick={()=>setClickbtn2(clickbtn2 + 1)}>button 2</button>
      <p>Nombre click btn1 : {clickbtn1}</p><br/>
      <p>Nombre click btn2 : {clickbtn2}</p>
    </div>
  )
}
