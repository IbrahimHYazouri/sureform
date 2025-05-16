"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinRule_1 = require("../rules/MinRule");
describe("MinRule", function () {
    it("passes when string length >= min", function () {
        var r = new MinRule_1.MinRule();
        expect(r.validate("abcd", 3)).toBe(true);
    });
    it("fails when string length < min", function () {
        var r = new MinRule_1.MinRule();
        expect(r.validate("abc", 5)).toBe(false);
    });
    it("passes when numeric ≥ min", function () {
        var r = new MinRule_1.MinRule();
        expect(r.validate(15, 10)).toBe(true);
    });
    it("fails when numeric < min", function () {
        var r = new MinRule_1.MinRule();
        expect(r.validate(5, 10)).toBe(false);
    });
    it("passes null/undefined", function () {
        var r = new MinRule_1.MinRule();
        expect(r.validate(null, 1)).toBe(true);
    });
});
