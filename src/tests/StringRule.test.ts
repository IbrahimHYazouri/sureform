import { StringRule } from "../rules/StringRule";

describe("StringRule", () => {
  const r = new StringRule();

  it("passes strings", () => {
    expect(r.validate("hello")).toBe(true);
  });

  it("skip null values", () => {
    expect(r.validate(null)).toBe(true);
  });

  it("fails non-strings", () => {
    expect(r.validate(123)).toBe(false);
  });
});
