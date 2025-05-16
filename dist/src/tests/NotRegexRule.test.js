"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotRegex_1 = require("../rules/NotRegex");
describe("RegexRule", () => {
    const rule = new NotRegex_1.NotRegex();
    const pattern = /bad/;
    it("passes when pattern does not match", () => {
        expect(rule.validate("good", pattern)).toBe(true);
    });
    it("fails when pattern matches", () => {
        expect(rule.validate("this is bad", pattern)).toBe(false);
    });
});
//# sourceMappingURL=NotRegexRule.test.js.map