import React from "react";

function ChercherBar({handleCategorieChange}) {
    return (
    <div className="ChercherBar">
      <h2>Composant ChercherBar</h2>
      <select id="categorie" onChange={(event) => handleCategorieChange(event.target.value)}>
          <option value="" key="">Choisir une catégorie</option> 
          <option value="fruit" key="fruit">fruit</option>
          <option value="légume" key="légume">légume</option>       
      </select>
  </div>
  );
}

export default ChercherBar;
