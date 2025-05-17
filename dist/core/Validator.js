import RuleFactory from "../factory/RuleFactory";
export class Validator {
    data;
    schema;
    messages = {};
    fields = {};
    errors = {};
    constructor(data, rules, messages, fields) {
        this.data = data;
        this.schema = rules;
        this.messages = messages ? messages : {};
        this.fields = fields ? fields : {};
    }
    validate() {
        this.errors = {};
        for (const key of Object.keys(this.schema)) {
            const rules = this.schema[key];
            if (key.includes(".*.")) {
                const [pre, post] = key.split(".*.");
                const arr = this.resolveField(pre) || [];
                arr.forEach((_, index) => {
                    const fieldPath = `${pre}.${index}.${post}`;
                    this.applyRules(fieldPath, rules);
                });
            }
            else {
                this.applyRules(key, rules);
            }
        }
        return {
            valid: Object.keys(this.errors).length === 0,
            errors: this.errors,
        };
    }
    applyRules(path, rules) {
        const value = this.resolveField(path);
        rules.forEach((def) => {
            let rule, args;
            let callbackMessage = "";
            if (typeof def === "function") {
                rule = {
                    name: "callback",
                    validate: (value) => {
                        const res = def(value);
                        if (res === true) {
                            return true;
                        }
                        callbackMessage = res;
                        return false;
                    },
                    message: () => callbackMessage,
                };
                args = [];
            }
            else {
                const [name, argStr] = (typeof def === "string" ? def : def.name).split(":");
                args =
                    def !== null && typeof def !== "string" && "args" in def
                        ? def.args
                        : argStr
                            ? argStr.split(",")
                            : [];
                rule = RuleFactory.create(name, ...args);
            }
            const passed = rule.validate(value, ...args);
            if (!passed) {
                const label = this.getFieldLabel(path);
                const keyFieldRule = `${path}.${rule.name}`;
                const keyGlobalRule = rule.name;
                let msgTemplate = this.messages[keyFieldRule] ??
                    this.messages[keyGlobalRule] ??
                    rule.message(this.fields[label] ?? label, ...args);
                msgTemplate = msgTemplate.split(":field").join(label);
                this.addError(path, msgTemplate);
            }
        });
    }
    resolveField(path) {
        return path
            .split(".")
            .reduce((acc, part) => (acc ? acc[part] : undefined), this.data);
    }
    getFieldLabel(path) {
        const base = path.replace(/\.\d+\./, ".*.");
        return this.fields[base] || this.fields[path] || path;
    }
    parseRule(rule) {
        if (typeof rule === "string") {
            const [name, ...args] = rule.split(":");
            const argArray = args.length > 0 ? args[0].split(",") : [];
            const ruleInstance = RuleFactory.create(name, argArray);
            if (!ruleInstance) {
                throw new Error(`Rule "${name}" is not registered.`);
            }
            return { rule: ruleInstance, args: argArray };
        }
        return { rule: rule, args: [] };
    }
    addError(field, message) {
        if (!this.errors[field]) {
            this.errors[field] = [];
        }
        this.errors[field].push(message);
    }
    getErrors() {
        return this.errors;
    }
}
//# sourceMappingURL=Validator.js.map