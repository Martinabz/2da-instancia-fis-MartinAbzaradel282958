import { Profesores } from "../codigo/profesores";

describe("Profesores", () => {
  test("should create an instance of Profesores with correct properties", () => {
    const profesor = new Profesores(
      "Juan Perez",
      "12345678",
      "Calle Falsa 123",
      "2023-01-01",
    );

    expect(profesor.unNombre).toBe("Juan Perez");
    expect(profesor.unaCedula).toBe("12345678");
    expect(profesor.unaDireccion).toBe("Calle Falsa 123");
    expect(profesor.unIngreso).toBe("2023-01-01");
  });

  test("should update the properties of Profesores instance", () => {
    const profesor = new Profesores(
      "Juan Perez",
      "12345678",
      "Calle Falsa 123",
      "2023-01-01",
    );

    profesor.unNombre = "Maria Lopez";
    profesor.unaCedula = "87654321";
    profesor.unaDireccion = "Avenida Siempre Viva 742";
    profesor.unIngreso = "2023-02-01";

    expect(profesor.unNombre).toBe("Maria Lopez");
    expect(profesor.unaCedula).toBe("87654321");
    expect(profesor.unaDireccion).toBe("Avenida Siempre Viva 742");
    expect(profesor.unIngreso).toBe("2023-02-01");
  });
});
