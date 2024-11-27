import React from "react";

function ResultatList({ items }) {
  return (
    <div className="ResultatList">
      <h2>Composant ResultatList</h2>
      {items.length === 0 ? 
          <p>Aucun élément trouvé pour cette catégorie.</p> : 
          <ul>
              {items.map((item) => (
                  <li key={item.id}>{item.nom}</li>
              ))}
          </ul>
      }
  </div>   
  );
}
export default ResultatList;
