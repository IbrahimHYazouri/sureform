"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("./core/Validator");
const data = {
    field: "ba",
};
const rules = {
    field: ["numeric"],
};
const validator = new Validator_1.Validator(data, rules);
const result = validator.validate();
if (!result.valid) {
    console.log(result.errors);
}
//# sourceMappingURL=index.js.map