import { Competencia } from "../codigo/competencia";

describe("Competencia", () => {
  let competencia;

  beforeEach(() => {
    competencia = new Competencia("Competencia 1");
  });

  test("should create an instance of Competencia", () => {
    expect(competencia).toBeInstanceOf(Competencia);
  });

  test("should set the title correctly", () => {
    expect(competencia.getNombre()).toBe("Competencia 1");
  });

  test("should add an article correctly", () => {
    competencia.addArticulo("Articulo 1");
    expect(competencia.unArticulo).toContain("Articulo 1");
  });

  test("should throw an error if the title is empty", () => {
    competencia.unTitulo = "";
    expect(() => competencia.isValid()).toThrow(
      "El titulo de la competencia no puede ser vacío",
    );
  });

  test("should throw an error if the articles array is empty", () => {
    competencia.unArticulo = "";
    expect(() => competencia.isValid()).toThrow(
      "La descripción no puede ser vacía",
    );
  });

  test("should return true if the title and articles are valid", () => {
    competencia.addArticulo("Articulo 1");
    expect(competencia.isValid()).toBe(true);
  });
});
