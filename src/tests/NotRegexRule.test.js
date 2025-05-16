"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotRegex_1 = require("../rules/NotRegex");
describe("RegexRule", function () {
    var rule = new NotRegex_1.NotRegex();
    var pattern = /bad/;
    it("passes when pattern does not match", function () {
        expect(rule.validate("good", pattern)).toBe(true);
    });
    it("fails when pattern matches", function () {
        expect(rule.validate("this is bad", pattern)).toBe(false);
    });
});
