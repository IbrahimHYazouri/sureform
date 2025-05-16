"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringRule_1 = require("../rules/StringRule");
describe("StringRule", function () {
    var r = new StringRule_1.StringRule();
    it("passes strings", function () {
        expect(r.validate("hello")).toBe(true);
    });
    it("fails non-strings", function () {
        expect(r.validate(123)).toBe(false);
        expect(r.validate(null)).toBe(false);
    });
});
