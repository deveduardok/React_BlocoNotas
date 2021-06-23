import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
//5.2 fazendo o msm dos outros components...
constructor(){
  super();
  this.state= {notas:[]};
  this._novasNotas= this._novasNotas.bind(this);
}
componentDidMount(){
  this.props.notas.inscrever(this._novasNotas);
}
//5.3
componentWillUnmount(){
  this.props.notas.desinscrever(this._novasNotas);
}

_novasNotas(notas){
  this.setState({...this.state,notas})
}

  //no cardnota, vou passar o index para saber qual nota deletar
  //3.2 vou passar 'categoria' p/ dentro do cardnota, usando nota.categoria ele vincula junto ao array 'nota'
   render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
              indice={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo} 
              text={nota.texto}
              categoria={nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
