import { Validator } from "./core/Validator";

const data = {
  field: "ba",
};

const rules = {
  field: ["numeric"],
};

const validator = new Validator(data, rules);
const result = validator.validate();
if (!result.valid) {
  console.log(result.errors);
}
