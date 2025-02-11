export class Actividad {
  unTipo;
  unTema;
  unaDuracion;

  constructor(unTipo, unTema, unaDuracion) {
    this.unTipo = unTipo;
    this.unTema = unTema;
    this.unaDuracion = unaDuracion;
  }

  setTema(unTema){
    this.unTema=unTema;
  }

  toString(){
    return"Tipo: " + this.unTipo +", tema: " + this.unTema + ", descripcion: " + this.unaDuracion
  }

  getTipoActividad() {
    return this.unTipo;
  }
  esValida(aComparar) {
    return aComparar == "noValido";
  }
}