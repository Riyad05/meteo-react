import React, { useState } from "react";
import { data } from "./data";
//import ChercherBar from "./ChercherBar";
import ResultatList from "./ResultatList";
import './styles.css';
import ChercherBar2 from "./chercherBar2";
function AppTp6() {
  const [categorie, setCategorie] = useState("");   
  const handleCategorieChange = (newcategorie) => {
    setCategorie(newcategorie);
  };
  const items = categorie
    ? data.filter((element) => element.categorie === categorie)
    : data;

  return (
    <div className="App">
      <h1>Composant App</h1>
      <ChercherBar2 handleCategorieChange={handleCategorieChange} />
      <ResultatList items={items} />
       {categorie && <h2>Catégorie choisie est : {categorie}</h2>}
    </div>
  );
}
export default AppTp6;
