"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Regex_1 = require("../rules/Regex");
describe("RegexRule", () => {
    const rule = new Regex_1.Regex();
    const pattern = /^[A-Z]{3}$/;
    it("passes when pattern matches", () => {
        expect(rule.validate("ABC", /^[A-Z]{3}$/)).toBe(true);
    });
    it("fails when pattern does not match", () => {
        expect(rule.validate("ABCD", /^[A-Z]{3}$/)).toBe(false);
        expect(rule.validate("abc", /^[A-Z]{3}$/)).toBe(false);
    });
    it("skips null/empty", () => {
        expect(rule.validate("", /^[A-Z]{3}$/)).toBe(false);
        expect(rule.validate(null, /^[A-Z]{3}$/)).toBe(false);
    });
});
//# sourceMappingURL=RegexRule.test%20copy.js.map