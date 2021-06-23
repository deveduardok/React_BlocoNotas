import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {

  constructor() {
    super();
    //instanciar os elementos para poder passar pro render
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }


    /* VOU APAGAR OS METODOS E OS STATES PQ COLOQUEI TUDO DENTRO DA PASTA DADOS (notas e o categorias)

    this.state = {
      notas: [],
     // categorias: ['games','movies'],
    }*/
 
//3.2 toda nota tem que ter 'categoria' tb, coloco na novaNota e como parametro em cima no criarNota para pegar a info do form.
 /* criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.setState(novoEstado)
  }

*/
  //os '...' são spread operator, pegam o array 'categorias' e add o nomeCategorias formando um novo array.
  
 /* adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado= {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }
*/

  //deletarNota vai receber o index
 /*
  deletarNota(index) {
    //to trazendo o array 'notas' e trazendo para a var arrayNotas, splice = deletar um item
    //o setState notas... eh pra atualizar a lista depois, elemento notas irá receber o array atualizado
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
  }
*/

  //a tag ListaDeCategorias, criei uma propried 'categorias', além disso preciso passar a funcao de addcategoria
  ///vou add propried categorias para dentro do formulario, associar dinamicamente
  //colocar o bind para este elemento estar associado a este(ex: categorias... bind(this.categorias))
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias}
        adicionarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />

          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas} />
        </main>

      </section>
    );
  }
}

export default App;
