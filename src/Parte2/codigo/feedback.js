export class Feedback {
    devolucion;
    //fecha
  
    constructor(unaDevolucion) {
      this.devolucion = unaDevolucion;
    }
    getDevolucion() {
      return this.devolucion;
    }
    esValida(aComparar) {
      return aComparar == "noValido";
    }
  }
  