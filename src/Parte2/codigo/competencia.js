export class Competencia {
  unTitulo;
  unArticulo;

  constructor(tituloComp) {
    this.unTitulo = tituloComp;
    this.unArticulo = [];
  }

  getNombre() {
    return this.unTitulo;
  }

  addArticulo(bArticulo) {
    this.unArticulo.push(bArticulo);
  }

  isValid() {
    if (
      this.unTitulo === undefined ||
      this.unTitulo === null ||
      this.unTitulo === ""
    ) {
      throw new Error("El titulo de la competencia no puede ser vacío");
    }
    if (
      this.unArticulo === undefined ||
      this.unArticulo === null ||
      this.unArticulo === ""
    ) {
      throw new Error("La descripción no puede ser vacía");
    }
    return true;
  }
}
