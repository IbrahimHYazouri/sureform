import { Numeric } from "../rules/Numeric";

describe("NumericRule", () => {
  const r = new Numeric();

  it("passes numeric values", () => {
    expect(r.validate("123")).toBe(true);
    expect(r.validate(3.14)).toBe(true);
  });
  it("fails non-numeric", () => {
    expect(r.validate("hello")).toBe(false);
    expect(r.validate("12a")).toBe(false);
  });
});
