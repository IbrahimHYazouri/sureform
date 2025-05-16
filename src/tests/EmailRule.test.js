"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email_1 = require("../rules/Email");
describe("EmailRule", function () {
    var r = new Email_1.Email();
    it("passes valid emails", function () {
        expect(r.validate("user@example.com")).toBe(true);
        expect(r.validate("a@b.co")).toBe(true);
    });
    it("fails invalid emails", function () {
        expect(r.validate("not-an-email")).toBe(false);
        expect(r.validate("maybe@.com")).toBe(false);
    });
    it("passes empty/null values", function () {
        expect(r.validate("")).toBe(false);
        expect(r.validate(null)).toBe(false);
    });
});
