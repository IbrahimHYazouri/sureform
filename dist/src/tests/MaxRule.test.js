"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxRule_1 = require("../rules/MaxRule");
describe('MaxRule', () => {
    it("passes when string length ≤ max", () => {
        const r = new MaxRule_1.MaxRule();
        expect(r.validate("test", 4)).toBe(true);
    });
    it("fails when string length > max", () => {
        const r = new MaxRule_1.MaxRule();
        expect(r.validate("hello", 2)).toBe(false);
    });
    it("passes when numeric ≤ max", () => {
        const r = new MaxRule_1.MaxRule();
        expect(r.validate(50, 100)).toBe(true);
    });
    it("fails when numeric > max", () => {
        const r = new MaxRule_1.MaxRule();
        expect(r.validate(20, 10)).toBe(false);
    });
});
//# sourceMappingURL=MaxRule.test.js.map