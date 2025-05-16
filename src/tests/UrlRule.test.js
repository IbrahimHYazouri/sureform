"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Url_1 = require("../rules/Url");
describe("UrlRule", function () {
    var r = new Url_1.Url();
    it("passes valid URLs", function () {
        expect(r.validate("http://example.com")).toBe(true);
        expect(r.validate("https://sub.domain/path")).toBe(true);
    });
    it("fails invalid URLs", function () {
        expect(r.validate("notaurl")).toBe(false);
        expect(r.validate("ftp://example.com")).toBe(false);
    });
    it("passes empty/null", function () {
        expect(r.validate("")).toBe(false);
        expect(r.validate(null)).toBe(false);
    });
});
