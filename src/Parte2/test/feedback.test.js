import { Feedback } from "../codigo/feedback";

describe("Feedback", () => {
  let feedback;

  beforeEach(() => {
    feedback = new Feedback("feedback 1");
  });

  test("should create an instance of feedback", () => {
    expect(feedback).toBeInstanceOf(Feedback);
  });

  test("should set the text correctly", () => {
    expect(feedback.getDevolucion()).toBe("feedback 1");
  });

  test("should throw an error if it is empty", () => {
    feedback.devolucion = "";
    expect(() => feedback.isValid()).toThrow(
      "El feedback no puede estar vacío",
    );
  });

  test("should throw an error if it contains only spaces", () => {
    feedback.devolucion = "     "; // Solo espacios
    expect(() => feedback.isValid()).toThrow(
      "El feedback no puede estar vacío",
    );
  });

  test("should be valid if feedback is non-empty", () => {
    feedback.devolucion = "Some valid feedback";
    expect(feedback.isValid()).toBe(true);
  });
});
