"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MinRule_1 = require("../rules/MinRule");
describe("MinRule", () => {
    it("passes when string length >= min", () => {
        const r = new MinRule_1.MinRule();
        expect(r.validate("abcd", 3)).toBe(true);
    });
    it("fails when string length < min", () => {
        const r = new MinRule_1.MinRule();
        expect(r.validate("abc", 5)).toBe(false);
    });
    it("passes when numeric ≥ min", () => {
        const r = new MinRule_1.MinRule();
        expect(r.validate(15, 10)).toBe(true);
    });
    it("fails when numeric < min", () => {
        const r = new MinRule_1.MinRule();
        expect(r.validate(5, 10)).toBe(false);
    });
    it("passes null/undefined", () => {
        const r = new MinRule_1.MinRule();
        expect(r.validate(null, 1)).toBe(true);
    });
});
//# sourceMappingURL=MinRule.test.js.map