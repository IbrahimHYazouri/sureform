import { ArrayRule } from "../rules/ArrayRule";

describe("ArrayRule", () => {
  const r = new ArrayRule();

  it("passes arrays", () => {
    expect(r.validate([1, 2, 3])).toBe(true);
  });
  it("fails non-arrays", () => {
    expect(r.validate("not array")).toBe(false);
    expect(r.validate(null)).toBe(true); // empty allowed
  });
});
