"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayRule_1 = require("../rules/ArrayRule");
describe("ArrayRule", () => {
    const r = new ArrayRule_1.ArrayRule();
    it("passes arrays", () => {
        expect(r.validate([1, 2, 3])).toBe(true);
    });
    it("fails non-arrays", () => {
        expect(r.validate("not array")).toBe(false);
        expect(r.validate(null)).toBe(false);
    });
});
//# sourceMappingURL=ArrayRule.test.js.map