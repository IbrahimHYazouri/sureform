"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numeric_1 = require("../rules/Numeric");
describe("NumericRule", () => {
    const r = new Numeric_1.Numeric();
    it("passes numeric values", () => {
        expect(r.validate("123")).toBe(true);
        expect(r.validate(3.14)).toBe(true);
    });
    it("fails non-numeric", () => {
        expect(r.validate("hello")).toBe(false);
        expect(r.validate("12a")).toBe(false);
    });
});
//# sourceMappingURL=Numeric.test.js.map