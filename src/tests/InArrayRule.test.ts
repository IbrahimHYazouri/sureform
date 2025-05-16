import { InArray } from "../rules/InArray";

describe("InArrayRule", () => {
  const r = new InArray();
  const list = ["foo", "bar"];

  it("passes when value is in array", () => {
    expect(r.validate("foo", list)).toBe(true);
    expect(r.validate("bar", list)).toBe(true);
  });

  it("fails when value is not in array", () => {
    expect(r.validate("", list)).toBe(false);
    expect(r.validate("john", list)).toBe(false);
  });
});
