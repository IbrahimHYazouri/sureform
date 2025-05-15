import { Validator } from "./core/Validator";

const data = {
  name: "name",
  email: "",
};

const schema = {
  name: ["required"],
  email: ["email"],
};

const fields = {
  name: "Full Name",
};

const v = new Validator(data, schema, {}, fields);
const r = v.validate();
console.log(r);
