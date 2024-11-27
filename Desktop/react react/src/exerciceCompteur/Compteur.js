import React from "react";

class Compteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: 0 }; 
  }
incrementer=()=>{
    this.setState({nombre : this.state.nombre+1})
}
decrementer=()=>{
    this.setState({nombre : this.state.nombre-1})
}
initial=()=>{
    this.setState({nombre:this.state.nombre=0})
}
  render() {
    return (
      <div style={{border: '2px solid black', width:'500px', textAlign:"center",color:"red"}}>
        <h1>{this.state.nombre}</h1> 
        <button onClick={this.incrementer}>incrementer</button>
        <button onClick={this.decrementer}>decrementer</button>
        <button onClick={this.initial}>retour a l'etat initial</button>
        

        
      </div>
    );
  }
}

export default Compteur;
