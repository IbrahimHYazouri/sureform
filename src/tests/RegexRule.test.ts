import { Regex } from "../rules/Regex";

describe("RegexRule", () => {
  const rule = new Regex();
  const pattern = /^[A-Z]{3}$/;

  it("passes when pattern matches", () => {
    expect(rule.validate("ABC", pattern)).toBe(true);
  });

  it("fails when pattern does not match", () => {
    expect(rule.validate("ABCD", pattern)).toBe(false);
    expect(rule.validate("abc", pattern)).toBe(false);
  });

  it("skips null/empty", () => {
    expect(rule.validate("", pattern)).toBe(true);
    expect(rule.validate(null, pattern)).toBe(true);
  });
});
