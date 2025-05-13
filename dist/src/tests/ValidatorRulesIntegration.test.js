"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../core/Validator");
describe("Validator integration", () => {
    const data = {
        name: "",
        email: "foo@bar.com",
        age: "17",
        tags: ["a", "b"],
        agree: "yes",
        password: "secret123",
    };
    const schema = {
        name: ["required"],
        email: ["required", "email"],
        age: ["numeric", "min:18"],
        tags: ["array", "min:1"],
        agree: ["boolean"],
        password: ["required", "min:6"],
    };
    it("fails on multiple rule violations", () => {
        const v = new Validator_1.Validator(data, schema);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("This filed [name] is required");
        expect(result.errors.age).toContain("age must be at least 18");
    });
    it("passes with corrected data", () => {
        const fixed = Object.assign(Object.assign({}, data), { name: "Alice", age: 20 });
        const v2 = new Validator_1.Validator(fixed, schema);
        const r2 = v2.validate();
        expect(r2.valid).toBe(true);
    });
});
//# sourceMappingURL=ValidatorRulesIntegration.test.js.map