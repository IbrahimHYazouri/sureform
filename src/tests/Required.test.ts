import { Required } from "../rules/Required";

describe("RequiredRule", () => {
  const rule = new Required();

  it("should pass when value is not empty", () => {
    expect(rule.validate("hello")).toBe(true);
    expect(rule.validate(123)).toBe(true);
  });

  it("should fail when value is empty", () => {
    expect(rule.validate("")).toBe(false);
    expect(rule.validate(null)).toBe(false);
    expect(rule.validate(undefined)).toBe(false);
  });
});
