"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InArray_1 = require("../rules/InArray");
describe("InArrayRule", () => {
    const r = new InArray_1.InArray();
    const list = ["foo", "bar"];
    it("passes when value is in array", () => {
        expect(r.validate("foo", list)).toBe(true);
        expect(r.validate("bar", list)).toBe(true);
    });
    it("fails when value is not in array", () => {
        expect(r.validate("", list)).toBe(false);
        expect(r.validate("john", list)).toBe(false);
    });
});
//# sourceMappingURL=InArrayRule.test.js.map