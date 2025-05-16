"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Required_1 = require("../rules/Required");
describe("RequiredRule", function () {
    var rule = new Required_1.Required();
    it("should pass when value is not empty", function () {
        expect(rule.validate("hello")).toBe(true);
        expect(rule.validate(123)).toBe(true);
    });
    it("should fail when value is empty", function () {
        expect(rule.validate("")).toBe(false);
        expect(rule.validate(null)).toBe(false);
        expect(rule.validate(undefined)).toBe(false);
    });
});
