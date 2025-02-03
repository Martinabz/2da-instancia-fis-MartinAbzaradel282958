export class Feedback {
  devolucion;

  constructor(unaDevolucion) {
    this.devolucion = unaDevolucion;
  }
  getDevolucion() {
    return this.devolucion;
  }
  isValid() {
    if (!this.devolucion || this.devolucion.trim() === "") {
      throw new Error("El feedback no puede estar vacío");
    }
    return true;
  }
}
