import React, { useState } from 'react'

function ToggleText() {
    const [isVisible,setIsVisible] = useState(true);
    const [text, setText] = useState('')
    function handleClick(){
        setIsVisible(!isVisible)
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Saisier un text' value={text} onChange={handleText} />
        <button onClick={handleClick}>{isVisible ? 'Masquer':'Afficher'}</button>
        <h1>{isVisible ? text:''}</h1>    
    </div>
  )
}

export default ToggleText
