"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BetweenRule_1 = require("../rules/BetweenRule");
describe("BetweenRule", function () {
    var r = new BetweenRule_1.BetweenRule();
    it("passes when string length in range", function () {
        expect(r.validate("foobar", 5, 10)).toBe(true); // length 6
    });
    it("fails when string length out of range", function () {
        expect(r.validate("foo", 5, 10)).toBe(false); // length 3
        expect(r.validate("loremipsumdolor", 5, 10)).toBe(false);
    });
    it("passes when numeric in range", function () {
        expect(r.validate(7, 5, 10)).toBe(true);
    });
    it("fails when numeric out of range", function () {
        expect(r.validate(4, 5, 10)).toBe(false);
        expect(r.validate(11, 5, 10)).toBe(false);
    });
});
