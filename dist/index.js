"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("./core/Validator");
const data = {
    field: 2,
};
const rules = {
    field: ["between:3,7"],
};
const validator = new Validator_1.Validator(data, rules);
const result = validator.validate();
if (!result.valid) {
    console.log(result.errors);
}
//# sourceMappingURL=index.js.map