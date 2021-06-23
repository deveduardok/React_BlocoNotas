import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

//crio o metodo apagar, para deletar a nota certa usando indice!

class CardNota extends Component {
  apagar(){
    const indice= this.props.indice;
    this.props.apagarNota(indice);
  }

  //3.2 vou criar a tag h4 para aparecer a categoria no card salvo
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
