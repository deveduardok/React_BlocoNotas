import React, { Component } from 'react';
import "./estilo.css";

//vou criar a lista com ul, e o input para nova categ, 
//preciso colocar uma tag section para ter um pai comum aos dois

//no input colocarei o 'onKeyUp' qd soltar a tecla, irá efetivar o evento. Vou criar o metodo(_handleEventoInput) pois estou trab com classe
//5.1 criando o componentDidMount ( MONTAGEM criacao de um component)
class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] };
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }
//5.3
    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    //vou abrir o meu estado e add as categorias
    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    // assim como fizemos na listadenotas, vamos iterar sobre o array categorias para ir aumentando automatic, usaremos MAP
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}

                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Add categoria"
                    onKeyUp={this._handleEventoInput.bind(this)} />

            </section>
        );
    }
}

export default ListaDeCategorias;