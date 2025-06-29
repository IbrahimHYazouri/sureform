"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AbstractRule: () => AbstractRule,
  Validator: () => Validator
});
module.exports = __toCommonJS(index_exports);

// src/core/AbstractRule.ts
var AbstractRule = class {
  ucfirst(field) {
    return field.charAt(0).toUpperCase() + field.slice(1);
  }
};

// src/rules/ArrayRule.ts
var ArrayRule = class extends AbstractRule {
  name = "array";
  validate(value) {
    if (value === null) return true;
    return Array.isArray(value);
  }
  message(field) {
    return `${this.ucfirst(field)} must be an array.`;
  }
};

// src/rules/BetweenRule.ts
var BetweenRule = class extends AbstractRule {
  name = "between";
  validate(value, min, max) {
    if (value === null) return true;
    if (typeof value === "string" || Array.isArray(value)) {
      return value.length >= min && value.length <= max;
    }
    if (typeof value === "number") {
      return value >= min && value <= max;
    }
    return false;
  }
  message(field, min, max) {
    return `${this.ucfirst(field)} must be between ${min} and ${max}`;
  }
};

// src/rules/Boolean.ts
var Boolean = class extends AbstractRule {
  name = "boolean";
  trueVals = [true, "true", 1, "1", "yes", "on"];
  falseVals = [false, "false", 0, "0", "no", "off"];
  validate(value) {
    if (value === null || value === "") return true;
    return this.trueVals.includes(value) || this.falseVals.includes(value);
  }
  message(field) {
    return `${this.ucfirst(field)} must be a boolean.`;
  }
};

// src/rules/Email.ts
var Email = class extends AbstractRule {
  name = "email";
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validate(value) {
    if (value === null || value === "") return true;
    return typeof value === "string" && this.emailRegex.test(value);
  }
  message(field) {
    return `${this.ucfirst(field)} must be a valid email address.`;
  }
};

// src/rules/FileType.ts
var FileType = class extends AbstractRule {
  name = "file-type";
  validate(value, types) {
    if (!value) return true;
    return value.type && types.includes(value.type);
  }
  message(field, types) {
    return `${this.ucfirst(field)} must be of type: ${types.join(", ")}`;
  }
};

// src/rules/InArray.ts
var InArray = class extends AbstractRule {
  name = "in-array";
  validate(value, list) {
    if (value == null) return true;
    return list.includes(value);
  }
  message(field, list) {
    return `${this.ucfirst(field)} must be on of [${list.join(", ")}]`;
  }
};

// src/rules/MaxRule.ts
var MaxRule = class extends AbstractRule {
  name = "max";
  validate(value, max) {
    if (value == null) return true;
    if (typeof value === "string" || Array.isArray(value)) {
      return value.length <= max;
    }
    if (typeof value === "number") {
      return value <= max;
    }
    return false;
  }
  message(field, max) {
    return `${this.ucfirst(field)} must not exceed ${max}`;
  }
};

// src/rules/MinRule.ts
var MinRule = class extends AbstractRule {
  name = "min";
  validate(value, min) {
    if (value == null) return true;
    if (typeof value === "string" || Array.isArray(value)) {
      return value.length >= min;
    }
    if (typeof value === "number") {
      return value >= min;
    }
    return false;
  }
  message(field, min) {
    return `${this.ucfirst(field)} must be at least ${min}`;
  }
};

// src/rules/NotRegex.ts
var NotRegex = class extends AbstractRule {
  name = "not-regex";
  validate(value, pattern) {
    if (value == null || value === "") return true;
    return typeof value === "string" && !pattern.test(value);
  }
  message(field) {
    return `${this.ucfirst(field)} has a forbidden format.`;
  }
};

// src/rules/Numeric.ts
var Numeric = class extends AbstractRule {
  name = "numeric";
  validate(value) {
    if (value === null || value === "") return true;
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  message(field) {
    return `${this.ucfirst(field)} must be a number`;
  }
};

// src/rules/Regex.ts
var Regex = class extends AbstractRule {
  name = "regex";
  validate(value, pattern) {
    if (value == null || value === "") return true;
    return typeof value === "string" && pattern.test(value);
  }
  message(field) {
    return `${this.ucfirst(field)} has an invalid format.`;
  }
};

// src/rules/Required.ts
var Required = class {
  name = "required";
  validate(value) {
    return value !== null && value !== void 0 && value !== "";
  }
  message(field) {
    return `This filed [${field}] is required`;
  }
};

// src/rules/StringRule.ts
var StringRule = class extends AbstractRule {
  name = "string";
  validate(value) {
    if (value === null) return true;
    return typeof value === "string";
  }
  message(field) {
    return `${this.ucfirst(field)} must be a string.`;
  }
};

// src/rules/Url.ts
var Url = class extends AbstractRule {
  name = "url";
  urlRegex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;
  validate(value) {
    if (value === null || value === "") return true;
    return typeof value === "string" && this.urlRegex.test(value);
  }
  message(field) {
    return `${this.ucfirst(field)} must be a valid URL`;
  }
};

// src/rules/StrongPassword.ts
var StrongPassword = class extends AbstractRule {
  name = "strong-password";
  validate(value) {
    if (!value || typeof value !== "string") return false;
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
  }
  message(field) {
    return `${field} must be at least 8 characters long and include uppercase, lowercase, number, and special character.`;
  }
};

// src/factory/RuleFactory.ts
var RuleFactory = class _RuleFactory {
  static registry = /* @__PURE__ */ new Map();
  static register(name, creator) {
    if (_RuleFactory.registry.has(name)) {
      throw new Error(`Rule [${name}] is already registered.`);
    }
    _RuleFactory.registry.set(name, creator);
  }
  static create(name, args) {
    const creator = _RuleFactory.registry.get(name);
    if (!creator) {
      throw new Error(`Rule [${name}] is not registered`);
    }
    return creator();
  }
  static initializeDefaults() {
    _RuleFactory.register("required", () => new Required());
    _RuleFactory.register("min", () => new MinRule());
    _RuleFactory.register("max", () => new MaxRule());
    _RuleFactory.register("between", () => new BetweenRule());
    _RuleFactory.register("email", () => new Email());
    _RuleFactory.register("url", () => new Url());
    _RuleFactory.register("array", () => new ArrayRule());
    _RuleFactory.register("numeric", () => new Numeric());
    _RuleFactory.register("string", () => new StringRule());
    _RuleFactory.register("boolean", () => new Boolean());
    _RuleFactory.register("regex", () => new Regex());
    _RuleFactory.register("not-regex", () => new NotRegex());
    _RuleFactory.register("in-array", () => new InArray());
    _RuleFactory.register("file-type", () => new FileType());
    _RuleFactory.register("strong-password", () => new StrongPassword());
  }
};
RuleFactory.initializeDefaults();

// src/core/Validator.ts
var Validator = class {
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
      } else {
        this.applyRules(key, rules);
      }
    }
    return {
      valid: Object.keys(this.errors).length === 0,
      errors: this.errors
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
          validate: (value2) => {
            const res = def(value2);
            if (res === true) {
              return true;
            }
            callbackMessage = res;
            return false;
          },
          message: () => callbackMessage
        };
        args = [];
      } else {
        const [name, argStr] = (typeof def === "string" ? def : def.name).split(":");
        args = def !== null && typeof def !== "string" && "args" in def ? def.args : argStr ? argStr.split(",") : [];
        rule = RuleFactory.create(name, ...args);
      }
      const passed = rule.validate(value, ...args);
      if (!passed) {
        const label = this.getFieldLabel(path);
        const keyFieldRule = `${path}.${rule.name}`;
        const keyGlobalRule = rule.name;
        let msgTemplate = this.messages[keyFieldRule] ?? this.messages[keyGlobalRule] ?? rule.message(this.fields[label] ?? label, ...args);
        msgTemplate = msgTemplate.split(":field").join(label);
        this.addError(path, msgTemplate);
      }
    });
  }
  resolveField(path) {
    return path.split(".").reduce((acc, part) => acc ? acc[part] : void 0, this.data);
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
    return { rule, args: [] };
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
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbstractRule,
  Validator
});
