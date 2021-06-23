import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = { categorias: [] };
    this.novasCategorias = this._novasCategorias.bind(this);
  }

  //5.2 criamos o didmount e o metodo _novasCategorias
  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias);
  }
  //5.3 chamando o componentWillUnmount ( DESMONTAGEM destruir um component)
  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }

  //3.2 criar o metodo handle da categoria
  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
    console.log(this.texto);
  }

  //3.2 passar a categoria no this
  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("Uma nova nota criada! " + this.titulo + " " + this.texto);
    this.props.adicionarNota(this.titulo, this.texto, this.categoria);
  }
  //3.1 vou add um campo de SELECT(opcao de escolha) para pegar uma das categorias. Vou iterar sobre o array categorias, usando map.
  //retorno usando uma option. Coloquei uma option 'Sem categoria' assim ela vem por padrao, como opcao
  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}      >

        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className='form-cadastro_input'>

          <option>Sem categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}

        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
