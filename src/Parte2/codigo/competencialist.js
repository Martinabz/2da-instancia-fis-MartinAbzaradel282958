export class CompetenciaList {
  competencias;

  constructor() {
    this.competencias = [];
  }

  add(competencia) {
    let competenciaInList = this.competencias.some(
      (m) => m.getNombre() == competencia.getNombre(),
    );
    if (!competenciaInList && competencia.isValid()) {
      this.competencias.push(competencia);
    } else {
      throw new Error(
        `No se pudo agregar. ${competencia.getNombre()} ya está en la lista.`,
      );
    }
  }

  getCompetencias() {
    return this.competencias;
  }

  getCompetenciaPorNombre(unNombre) {
    for (const competencia of this.competencias) {
      if (competencia.getNombre() == unNombre) {
        return competencia;
      }
    }
  }
}
