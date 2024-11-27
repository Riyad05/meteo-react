import React, { useState } from 'react'

function AfficheurTexte() {
    const [isVisible,setIsVisible] = useState(false);
    function handleClick(){
        setIsVisible(!isVisible)
    }
  return (
    <div>
        <button onClick={handleClick}>{isVisible ? 'Masquer':'Afficher'}</button>
        <h1>{isVisible ? 'Bonjour, React':''}</h1>    
    </div>
  )
}

export default AfficheurTexte
