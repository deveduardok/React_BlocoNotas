export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    //vou comentar/trocar o adicionarNota do App.js para cá
    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    //vou comentar/trocar o adicionarNota do App.js para cá
    apagarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func);
    }
//notificar eh uma funcao e vai ser exec qd ocorrer uma mudança, 
//se tenho um array de incritos, para cada inscrito, vou exec a funcao passada por parametro, iterar sobre o array.
//p/ cada foreach eu to passando uma func anonima, recebe como parametro uma funcao e exec essa funcao
    notificar(){
        this._inscritos.forEach(func => func(this.notas));
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }

}