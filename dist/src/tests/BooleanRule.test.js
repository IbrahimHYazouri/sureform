"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boolean_1 = require("../rules/Boolean");
describe("BooleanRule", () => {
    const r = new Boolean_1.Boolean();
    it("passes true values", () => {
        ["true", "1", 1, true, "yes", "on"].forEach((v) => expect(r.validate(v)).toBe(true));
    });
    it("passes false values", () => {
        ["false", "0", 0, false, "no", "off"].forEach((v) => expect(r.validate(v)).toBe(true));
    });
    it("fails others", () => {
        expect(r.validate("maybe")).toBe(false);
    });
});
//# sourceMappingURL=BooleanRule.test.js.map