import React, { useState } from 'react'

function SuiviClics() {
    const [clickButton,setClickbutton]=useState({clicksButton1:0,clicksButton2:0});
  return (
    <div>
      <button>incrémentez</button>{clickButton.clicksButton1} <br />
      <button>incrémentez</button>{clickButton.clicksButton2} <br />
    </div>
  )
}

export default SuiviClics
