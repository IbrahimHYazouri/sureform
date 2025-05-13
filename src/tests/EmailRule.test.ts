import { Email } from "../rules/Email";

describe("EmailRule", () => {
  const r = new Email();

  it("passes valid emails", () => {
    expect(r.validate("user@example.com")).toBe(true);
    expect(r.validate("a@b.co")).toBe(true);
  });
  it("fails invalid emails", () => {
    expect(r.validate("not-an-email")).toBe(false);
    expect(r.validate("maybe@.com")).toBe(false);
  });
  it("passes empty/null values", () => {
    expect(r.validate("")).toBe(false);
    expect(r.validate(null)).toBe(false);
  });
});
