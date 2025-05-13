"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringRule_1 = require("../rules/StringRule");
describe("StringRule", () => {
    const r = new StringRule_1.StringRule();
    it("passes strings", () => {
        expect(r.validate("hello")).toBe(true);
    });
    it("fails non-strings", () => {
        expect(r.validate(123)).toBe(false);
        expect(r.validate(null)).toBe(false);
    });
});
//# sourceMappingURL=StringRule.test.js.map