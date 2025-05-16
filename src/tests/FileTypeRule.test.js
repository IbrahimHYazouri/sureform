"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileType_1 = require("../rules/FileType");
describe("FileTypeRule", function () {
    var r = new FileType_1.default();
    var types = ["image/png", "image/jpg"];
    it("passes with valid types", function () {
        expect(r.validate({ type: "image/png" }, types)).toBe(true);
    });
    it("fails with invalid types", function () {
        expect(r.validate(null, types)).toBe(false);
        expect(r.validate({ type: "image/svg" }, types)).toBe(false);
    });
});
