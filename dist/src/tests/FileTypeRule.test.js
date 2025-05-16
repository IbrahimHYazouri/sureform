"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileType_1 = __importDefault(require("../rules/FileType"));
describe("FileTypeRule", () => {
    const r = new FileType_1.default();
    const types = ["image/png", "image/jpg"];
    it("passes with valid types", () => {
        expect(r.validate({ type: "image/png" }, types)).toBe(true);
    });
    it("fails with invalid types", () => {
        expect(r.validate(null, types)).toBe(false);
        expect(r.validate({ type: "image/svg" }, types)).toBe(false);
    });
});
//# sourceMappingURL=FileTypeRule.test.js.map