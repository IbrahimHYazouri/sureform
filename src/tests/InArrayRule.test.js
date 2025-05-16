"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InArray_1 = require("../rules/InArray");
describe("InArrayRule", function () {
    var r = new InArray_1.InArray();
    var list = ["foo", "bar"];
    it("passes when value is in array", function () {
        expect(r.validate("foo", list)).toBe(true);
        expect(r.validate("bar", list)).toBe(true);
    });
    it("fails when value is not in array", function () {
        expect(r.validate("", list)).toBe(false);
        expect(r.validate("john", list)).toBe(false);
    });
});
