"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Regex_1 = require("../rules/Regex");
describe("RegexRule", function () {
    var rule = new Regex_1.Regex();
    var pattern = /^[A-Z]{3}$/;
    it("passes when pattern matches", function () {
        expect(rule.validate("ABC", pattern)).toBe(true);
    });
    it("fails when pattern does not match", function () {
        expect(rule.validate("ABCD", pattern)).toBe(false);
        expect(rule.validate("abc", pattern)).toBe(false);
    });
    it("skips null/empty", function () {
        expect(rule.validate("", pattern)).toBe(false);
        expect(rule.validate(null, pattern)).toBe(false);
    });
});
