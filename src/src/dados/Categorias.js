export default class Categorias {
    //vou precisar de um array que guarde qm ela tem que modificar, 
    //terá um array de inscritos(qd ocorrer alguma mudanca entre classes e entidad do sist, vao notificar)
    //qd tem '_' eh propried privada, por convençao!
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    //asfuncoes podem ser passadas por parametro
    //o metodo inscrever, add alguma coisa nos meus 
    //meu inscrito vai ser uma funcao

    inscrever(func) {
        this._inscritos.push(func);
    }
//5.3 criar o desinscrever, com filter, vou filtrar tds que nao sao dessa funcao do parametro, devolve tds que sao diferentes da funcao
    desinscrever(func){
        console.log(this._inscritos.length);
        this.inscritos = this._inscritos.filter(f=> f!== func);
        console.log(this._inscritos.length);
    } 

//notificar eh uma funcao e vai ser exec qd ocorrer uma mudança, 
//se tenho um array de incritos, para cada inscrito, vou exec a funcao passada por parametro, iterar sobre o array.
//p/ cada foreach eu to passando uma func anonima, recebe como parametro uma funcao e exec essa funcao
    notificar(){
        this._inscritos.forEach(func => func(this.categorias));
    }

    //vou comentar/trocar o adicionarCategoria do App.js para cá
    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }

}