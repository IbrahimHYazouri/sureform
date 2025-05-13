"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("./core/Validator");
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
const v = new Validator_1.Validator(data, schema, messages);
const r = v.validate();
console.log(r);
//# sourceMappingURL=index.js.map