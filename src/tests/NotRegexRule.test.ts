import { NotRegex } from "../rules/NotRegex";

describe("RegexRule", () => {
  const rule = new NotRegex();
  const pattern = /bad/;

  it("passes when pattern does not match", () => {
    expect(rule.validate("good", pattern)).toBe(true);
  });

  it("fails when pattern matches", () => {
    expect(rule.validate("this is bad", pattern)).toBe(false);
  });
});
