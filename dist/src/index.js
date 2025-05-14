"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("./core/Validator");
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
const v = new Validator_1.Validator(data, schema, {}, fields);
const r = v.validate();
console.log(r);
//# sourceMappingURL=index.js.map