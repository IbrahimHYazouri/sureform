"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Regex_1 = require("../rules/Regex");
describe("RegexRule", () => {
    const rule = new Regex_1.Regex();
    const pattern = /^[A-Z]{3}$/;
    it("passes when pattern matches", () => {
        expect(rule.validate("ABC", pattern)).toBe(true);
    });
    it("fails when pattern does not match", () => {
        expect(rule.validate("ABCD", pattern)).toBe(false);
        expect(rule.validate("abc", pattern)).toBe(false);
    });
    it("skips null/empty", () => {
        expect(rule.validate("", pattern)).toBe(false);
        expect(rule.validate(null, pattern)).toBe(false);
    });
});
//# sourceMappingURL=RegexRule.test.js.map