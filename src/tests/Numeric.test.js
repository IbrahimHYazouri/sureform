"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numeric_1 = require("../rules/Numeric");
describe("NumericRule", function () {
    var r = new Numeric_1.Numeric();
    it("passes numeric values", function () {
        expect(r.validate("123")).toBe(true);
        expect(r.validate(3.14)).toBe(true);
    });
    it("fails non-numeric", function () {
        expect(r.validate("hello")).toBe(false);
        expect(r.validate("12a")).toBe(false);
    });
});
