"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayRule_1 = require("../rules/ArrayRule");
describe("ArrayRule", function () {
    var r = new ArrayRule_1.ArrayRule();
    it("passes arrays", function () {
        expect(r.validate([1, 2, 3])).toBe(true);
    });
    it("fails non-arrays", function () {
        expect(r.validate("not array")).toBe(false);
        expect(r.validate(null)).toBe(false); // empty not allowed
    });
});
