import React from "react";

function ChercherBar2({handleCategorieChange}) {
    return (
    <div className="ChercherBar">
      <h2>Composant ChercherBar</h2>
      tous: <input type="radio" value="" key="" name="a" onChange={(event) => handleCategorieChange(event.target.value)}/>
      fruit: <input type="radio" value="fruit" key="fruit" name="a" onChange={(event) => handleCategorieChange(event.target.value)}/>
      legume: <input type="radio" value="légume" key="légume" name="a" onChange={(event) => handleCategorieChange(event.target.value)}/>
  </div>
  );
}

export default ChercherBar2;
