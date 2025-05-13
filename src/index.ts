import { Validator } from "./core/Validator";

const data = {
  name: "",
  email: "",
};

const schema = {
  name: ["required"],
  email: ["required", "email"],
};

const messages = {
  "name.required": "Hey, your name is required",
  required: "Please fill this field",
};

const v = new Validator(data, schema, messages);
const r = v.validate();
console.log(r);
