import { Boolean } from "../rules/Boolean";

describe("BooleanRule", () => {
  const r = new Boolean();

  it("passes true values", () => {
    ["true", "1", 1, true, "yes", "on"].forEach((v) =>
      expect(r.validate(v)).toBe(true)
    );
  });
  it("passes false values", () => {
    ["false", "0", 0, false, "no", "off"].forEach((v) =>
      expect(r.validate(v)).toBe(true)
    );
  });
  it("fails others", () => {
    expect(r.validate("maybe")).toBe(false);
  });
});
