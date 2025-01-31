import { Actividad } from "../codigo/actividad";

describe("Actividad", () => {
  let actividad;

  beforeEach(() => {
    actividad = new Actividad("Deporte", "Fútbol", 90);
  });

  test("should create an instance of Actividad", () => {
    expect(actividad).toBeInstanceOf(Actividad);
  });

  test("should set the correct properties", () => {
    expect(actividad.unTipo).toBe("Deporte");
    expect(actividad.unTema).toBe("Fútbol");
    expect(actividad.unaDuracion).toBe(90);
  });

  test("getTipoActividad should return the correct type", () => {
    expect(actividad.getTipoActividad()).toBe("Deporte");
  });

  test('esValida should return true for "noValido"', () => {
    expect(actividad.esValida("noValido")).toBe(true);
  });

  test("esValida should return false for other values", () => {
    expect(actividad.esValida("valido")).toBe(false);
    expect(actividad.esValida("")).toBe(false);
    expect(actividad.esValida(null)).toBe(false);
  });
});
