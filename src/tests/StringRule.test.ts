import { StringRule } from "../rules/StringRule";

describe("StringRule", () => {
  const r = new StringRule();

  it("passes strings", () => {
    expect(r.validate("hello")).toBe(true);
  });
  it("fails non-strings", () => {
    expect(r.validate(123)).toBe(false);
    expect(r.validate(null)).toBe(false);
  });
});
