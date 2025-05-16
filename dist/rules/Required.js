export class Required {
    constructor() {
        this.name = "required";
    }
    validate(value) {
        return value !== null && value !== undefined && value !== "";
    }
    message(field) {
        return `This filed [${field}] is required`;
    }
}
//# sourceMappingURL=Required.js.map