import { Validator } from "./core/Validator";

const data = {
  field: 2,
};

const rules = {
  field: ["between:3,7"],
};

const validator = new Validator(data, rules);
const result = validator.validate();
if (!result.valid) {
  console.log(result.errors);
}
