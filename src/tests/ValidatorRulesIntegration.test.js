"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = require("../core/Validator");
describe("Validator integration", function () {
    var data = {
        name: "",
        email: "foo@bar.com",
        age: "17",
        tags: ["a", "b"],
        agree: "yes",
        password: "secret123",
    };
    var schema = {
        name: ["required"],
        email: ["required", "email"],
        age: ["numeric", "min:18"],
        tags: ["array", "min:1"],
        agree: ["boolean"],
        password: ["required", "min:6"],
    };
    it("fails on multiple rule violations with default messages", function () {
        var v = new Validator_1.Validator(data, schema);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("This filed [name] is required");
        expect(result.errors.age).toContain("Age must be at least 18");
    });
    it("passes with corrected data", function () {
        var fixed = __assign(__assign({}, data), { name: "Alice", age: 20 });
        var v2 = new Validator_1.Validator(fixed, schema);
        var r2 = v2.validate();
        expect(r2.valid).toBe(true);
    });
    it("uses rule-specific custom message when available", function () {
        var messages = {
            "name.required": "Please enter your full name",
            "age.min": "You are too young!",
        };
        var v = new Validator_1.Validator(data, schema, messages);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("Please enter your full name");
        expect(result.errors.age).toContain("You are too young!");
    });
    it("falls back to default rule message if no override provided", function () {
        var messages = {
            "age.min": "You must be older.",
        };
        var v = new Validator_1.Validator(data, schema, messages);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name).toContain("This filed [name] is required");
        expect(result.errors.age).toContain("You must be older.");
    });
    var fields = {
        name: "Full Name",
        email: "Email Address",
    };
    it("uses custom field names in default error messages", function () {
        data.email = "invalid email";
        var validator = new Validator_1.Validator(data, schema, {}, fields);
        var result = validator.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.name[0]).toContain("Full Name"); // instead of just 'name'
        expect(result.errors.email[0]).toContain("Email Address"); // should mention 'Email Address' in email rule message
    });
    it("falls back to field key if custom name is not provided", function () {
        var validator = new Validator_1.Validator(data, schema, {});
        var result = validator.validate();
        expect(result.errors.name[0]).toContain("name");
        expect(result.errors.email[0]).toContain("email");
    });
});
describe("Validator - :field placeholder in custom messages", function () {
    it("replaces :field with custom label in error message", function () {
        var data = {
            email: "",
        };
        var schema = {
            email: ["required"],
        };
        var messages = {
            required: ":field is required and cannot be left blank",
        };
        var fields = {
            email: "Email Address",
        };
        var v = new Validator_1.Validator(data, schema, messages, fields);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.email).toContain("Email Address is required and cannot be left blank");
    });
    it("falls back to raw field name when label not defined", function () {
        var data = {
            username: "",
        };
        var schema = {
            username: ["required"],
        };
        var messages = {
            required: ":field is required",
        };
        var v = new Validator_1.Validator(data, schema, messages);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.username).toContain("username is required");
    });
});
describe("Validator – Array Wildcard Support", function () {
    var data = {
        users: [{ email: "user1@example.com" }, { email: "bad-email" }],
    };
    var schema = {
        "users.*.email": ["required", "email"],
    };
    it("validates each element under users.*.email", function () {
        var v = new Validator_1.Validator(data, schema);
        var result = v.validate();
        expect(result.valid).toBe(false);
        // the second user’s email should appear in errors under the full path:
        expect(result.errors["users.1.email"]).toContain("Users.1.email must be a valid email address.");
    });
    it("passes when all emails are valid", function () {
        var goodData = {
            users: [{ email: "a@b.co" }, { email: "x@y.z" }],
        };
        var v2 = new Validator_1.Validator(goodData, schema);
        expect(v2.validate().valid).toBe(true);
    });
});
describe("Validator – Closure/Callback Rules", function () {
    var data = { age: 15, code: "XY" };
    var schema = {
        age: [function (v) { return v >= 18 || "Must be 18 or older"; }],
        code: [function (v) { return /^XYZ\d+$/.test(v) || "Invalid code format"; }],
    };
    it("runs inline functions and collects custom messages", function () {
        var v = new Validator_1.Validator(data, schema);
        var result = v.validate();
        expect(result.valid).toBe(false);
        expect(result.errors.age).toContain("Must be 18 or older");
        expect(result.errors.code).toContain("Invalid code format");
    });
    it("passes when closures return true", function () {
        var okData = { age: 21, code: "XYZ999" };
        var v2 = new Validator_1.Validator(okData, schema);
        expect(v2.validate().valid).toBe(true);
    });
});
