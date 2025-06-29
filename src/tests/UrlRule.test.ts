import { Url } from "../rules/Url";

describe("UrlRule", () => {
  const r = new Url();

  it("passes valid URLs", () => {
    expect(r.validate("http://example.com")).toBe(true);
    expect(r.validate("https://sub.domain/path")).toBe(true);
  });
  it("fails invalid URLs", () => {
    expect(r.validate("notaurl")).toBe(false);
    expect(r.validate("ftp://example.com")).toBe(false);
  });
  it("passes empty/null", () => {
    expect(r.validate("")).toBe(true);
    expect(r.validate(null)).toBe(true);
  });
});
