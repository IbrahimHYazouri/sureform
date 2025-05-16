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
    it("fails on multiple rule violations with default messages", () => {
        const v = new Validator_1.Validator(data, schema);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("This filed [name] is required");
        expect(result.errors.age).toContain("Age must be at least 18");
    });
    it("passes with corrected data", () => {
        const fixed = Object.assign(Object.assign({}, data), { name: "Alice", age: 20 });
        const v2 = new Validator_1.Validator(fixed, schema);
        const r2 = v2.validate();
        expect(r2.valid).toBe(true);
    });
    it("uses rule-specific custom message when available", () => {
        const messages = {
            "name.required": "Please enter your full name",
            "age.min": "You are too young!",
        };
        const v = new Validator_1.Validator(data, schema, messages);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("Please enter your full name");
        expect(result.errors.age).toContain("You are too young!");
    });
    it("falls back to default rule message if no override provided", () => {
        const messages = {
            "age.min": "You must be older.",
        };
        const v = new Validator_1.Validator(data, schema, messages);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("This filed [name] is required");
        expect(result.errors.age).toContain("You must be older.");
    });
    const fields = {
        name: "Full Name",
        email: "Email Address",
    };
    it("uses custom field names in default error messages", () => {
        data.email = "invalid email";
        const validator = new Validator_1.Validator(data, schema, {}, fields);
        const result = validator.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name[0]).toContain("Full Name");
        expect(result.errors.email[0]).toContain("Email Address");
    });
    it("falls back to field key if custom name is not provided", () => {
        const validator = new Validator_1.Validator(data, schema, {});
        const result = validator.validate();
        expect(result.errors.name[0]).toContain("name");
        expect(result.errors.email[0]).toContain("email");
    });
});
describe("Validator - :field placeholder in custom messages", () => {
    it("replaces :field with custom label in error message", () => {
        const data = {
            email: "",
        };
        const schema = {
            email: ["required"],
        };
        const messages = {
            required: ":field is required and cannot be left blank",
        };
        const fields = {
            email: "Email Address",
        };
        const v = new Validator_1.Validator(data, schema, messages, fields);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.email).toContain("Email Address is required and cannot be left blank");
    });
    it("falls back to raw field name when label not defined", () => {
        const data = {
            username: "",
        };
        const schema = {
            username: ["required"],
        };
        const messages = {
            required: ":field is required",
        };
        const v = new Validator_1.Validator(data, schema, messages);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.username).toContain("username is required");
    });
});
describe("Validator – Array Wildcard Support", () => {
    const data = {
        users: [{ email: "user1@example.com" }, { email: "bad-email" }],
    };
    const schema = {
        "users.*.email": ["required", "email"],
    };
    it("validates each element under users.*.email", () => {
        const v = new Validator_1.Validator(data, schema);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors["users.1.email"]).toContain("Users.1.email must be a valid email address.");
    });
    it("passes when all emails are valid", () => {
        const goodData = {
            users: [{ email: "a@b.co" }, { email: "x@y.z" }],
        };
        const v2 = new Validator_1.Validator(goodData, schema);
        expect(v2.validate().valid).toBe(true);
    });
});
describe("Validator – Closure/Callback Rules", () => {
    const data = { age: 15, code: "XY" };
    const schema = {
        age: [(v) => v >= 18 || "Must be 18 or older"],
        code: [(v) => /^XYZ\d+$/.test(v) || "Invalid code format"],
    };
    it("runs inline functions and collects custom messages", () => {
        const v = new Validator_1.Validator(data, schema);
        const result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.age).toContain("Must be 18 or older");
        expect(result.errors.code).toContain("Invalid code format");
    });
    it("passes when closures return true", () => {
        const okData = { age: 21, code: "XYZ999" };
        const v2 = new Validator_1.Validator(okData, schema);
        expect(v2.validate().valid).toBe(true);
    });
});
//# sourceMappingURL=ValidatorRulesIntegration.test.js.map