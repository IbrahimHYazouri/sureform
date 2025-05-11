import { Validator } from "./core/Validator";

const data = {
  name: "hH",
};

const rules = {
  name: ["required", "min:3"],
};

const validator = new Validator(data, rules);
const result = validator.validate();
if (!result.valid) {
  console.log(result.errors);
}
