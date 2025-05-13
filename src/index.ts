import { Validator } from "./core/Validator";

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

const fixed = { ...data, name: "Alice", age: 20 };
console.log(fixed);
const v2 = new Validator(fixed, schema);
const r2 = v2.validate();
console.log(r2);
