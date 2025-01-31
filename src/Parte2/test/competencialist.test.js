import { CompetenciaList } from "../codigo/competencialist";
import { Competencia } from "../codigo/competencia";

describe("CompetenciaList", () => {
  let competenciaList;
  let competencia1;
  let competencia2;

  beforeEach(() => {
    competenciaList = new CompetenciaList();
    competencia1 = new Competencia("Competencia 1");
    competencia2 = new Competencia("Competencia 2");
  });

  test("should create an instance of CompetenciaList", () => {
    expect(competenciaList).toBeInstanceOf(CompetenciaList);
  });

  test("should add a valid competencia", () => {
    competenciaList.add(competencia1);
    expect(competenciaList.getCompetencias()).toContain(competencia1);
  });

  test("should not add an invalid competencia", () => {
    const invalidCompetencia = new Competencia("");
    expect(() => competenciaList.add(invalidCompetencia)).toThrow(
      "El titulo de la competencia no puede ser vacío",
    );
  });

  test("should not add a duplicate competencia", () => {
    competenciaList.add(competencia1);
    expect(() => competenciaList.add(competencia1)).toThrow(
      "No se pudo agregar. Competencia 1 ya está en la lista.",
    );
  });

  test("should return competencias", () => {
    competenciaList.add(competencia1);
    competenciaList.add(competencia2);
    expect(competenciaList.getCompetencias()).toEqual([
      competencia1,
      competencia2,
    ]);
  });

  test("should return competencia by name", () => {
    competenciaList.add(competencia1);
    competenciaList.add(competencia2);
    expect(competenciaList.getCompetenciaPorNombre("Competencia 1")).toBe(
      competencia1,
    );
    expect(competenciaList.getCompetenciaPorNombre("Competencia 2")).toBe(
      competencia2,
    );
  });

  test("should return undefined for non-existent competencia", () => {
    expect(
      competenciaList.getCompetenciaPorNombre("Non-existent"),
    ).toBeUndefined();
  });
});
