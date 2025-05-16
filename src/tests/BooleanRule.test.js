"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Boolean_1 = require("../rules/Boolean");
describe("BooleanRule", function () {
    var r = new Boolean_1.Boolean();
    it("passes true values", function () {
        ["true", "1", 1, true, "yes", "on"].forEach(function (v) {
            return expect(r.validate(v)).toBe(true);
        });
    });
    it("passes false values", function () {
        ["false", "0", 0, false, "no", "off"].forEach(function (v) {
            return expect(r.validate(v)).toBe(true);
        });
    });
    it("fails others", function () {
        expect(r.validate("maybe")).toBe(false);
    });
});
