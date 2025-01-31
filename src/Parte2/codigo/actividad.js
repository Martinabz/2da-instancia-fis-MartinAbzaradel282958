export class Actividad {
  unTipo;
  unTema;
  unaDuracion;

  constructor(unTipo, unTema, unaDuracion) {
    this.unTipo = unTipo;
    this.unTema = unTema;
    this.unaDuracion = unaDuracion;
  }
  getTipoActividad() {
    return this.unTipo;
  }
  esValida(aComparar) {
    return aComparar == "noValido";
  }
}
