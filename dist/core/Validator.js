"use strict";
class Validator {
    test() {
        console.log("Test");
    }
    constructor(data, rules) {
        this.errors = {};
        this.data = data;
        this.rules = rules;
    }
    validate() {
        this.errors = {};
        return true;
    }
}
//# sourceMappingURL=Validator.js.map