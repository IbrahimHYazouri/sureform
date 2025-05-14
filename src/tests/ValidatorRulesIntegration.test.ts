import { Validator } from "../core/Validator";

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
    const v = new Validator(data, schema);
    const result = v.validate();
    expect(result.valid).toBe(false);
    expect(result.errors.name).toContain("This filed [name] is required");
    expect(result.errors.age).toContain("age must be at least 18");
  });

  it("passes with corrected data", () => {
    const fixed = { ...data, name: "Alice", age: 20 };
    const v2 = new Validator(fixed, schema);
    const r2 = v2.validate();
    expect(r2.valid).toBe(true);
  });

  it("uses rule-specific custom message when available", () => {
    const messages = {
      "name.required": "Please enter your full name",
      "age.min": "You are too young!",
    };

    const v = new Validator(data, schema, messages);
    const result = v.validate();

    expect(result.valid).toBe(false);
    expect(result.errors.name).toContain("Please enter your full name");
    expect(result.errors.age).toContain("You are too young!");
  });

  it("falls back to default rule message if no override provided", () => {
    const messages = {
      "age.min": "You must be older.",
    };

    const v = new Validator(data, schema, messages);
    const result = v.validate();

    expect(result.valid).toBe(false);
    expect(result.errors.name).toContain("This filed [name] is required");
    expect(result.errors.age).toContain("You must be older.");
  });
});
