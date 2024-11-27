import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nom:""};
    this.state = {prenom:""};
    this.state = {salaire:""};
    this.affichage={affichage:""} ;
  }
handNom=(e)=>{
    this.setState({nom: e.targnet.value})
}
handPrenom=(e)=>{
    this.setState({prenom:e.target.value})
}
handSalaire=(e)=>{
    this.setState({salaire:e.target.value})
}
handSubmit=(e)=>{
e.preventDefault();
let {nom,prenom,salaire}=this.state
this.setState({affichage:`Votre nom est ${nom}, votre prénom est ${prenom}, et votre salaire est ${salaire}.`})

      
}
  render() {
    return (
        <div>
        <form onSubmit={this.handSubmit}>
          <label>Nom:</label>
          <input
            type="text"
            placeholder="Entrer votre nom"
            onChange={this.handNom}
          />
          <br />
          <label>Prénom:</label>
          <input
            type="text"
            placeholder="Entrer votre prénom"
            onChange={this.handPrenom}
          />
          <br />
          <label>Salaire:</label>
          <input
            type="number"
            placeholder="Entrer votre salaire"
            onChange={this.handSalaire}
          />
          <br />
          <button type="submit">S'inscrire</button>
        </form>
        <p>{this.state.affichage}</p>
      </div>
    );
  }
}

export default Input;