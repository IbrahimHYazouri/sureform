"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var RuleFactory_1 = require("../factory/RuleFactory");
var Validator = /** @class */ (function () {
    function Validator(data, rules, messages, fields) {
        this.messages = {};
        this.fields = {};
        this.errors = {};
        this.data = data;
        this.schema = rules;
        this.messages = messages ? messages : {};
        this.fields = fields ? fields : {};
    }
    Validator.prototype.validate = function () {
        var _this = this;
        this.errors = {};
        var _loop_1 = function (key) {
            var rules = this_1.schema[key];
            if (key.includes(".*.")) {
                var _b = key.split(".*."), pre_1 = _b[0], post_1 = _b[1];
                var arr = this_1.resolveField(pre_1) || [];
                arr.forEach(function (_, index) {
                    var fieldPath = "".concat(pre_1, ".").concat(index, ".").concat(post_1);
                    _this.applyRules(fieldPath, rules);
                });
            }
            else {
                this_1.applyRules(key, rules);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(this.schema); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return {
            valid: Object.keys(this.errors).length === 0,
            errors: this.errors,
        };
    };
    Validator.prototype.applyRules = function (path, rules) {
        var _this = this;
        var value = this.resolveField(path);
        rules.forEach(function (def) {
            var _a, _b, _c;
            var rule, args;
            var callbackMessage = "";
            if (typeof def === "function") {
                rule = {
                    name: "callback",
                    validate: function (value) {
                        var res = def(value);
                        if (res === true) {
                            return true;
                        }
                        callbackMessage = res;
                        return false;
                    },
                    message: function () { return callbackMessage; },
                };
                args = [];
            }
            else {
                var _d = (typeof def === "string" ? def : def.name).split(":"), name_1 = _d[0], argStr = _d[1];
                args =
                    def !== null && typeof def !== "string" && "args" in def
                        ? def.args
                        : argStr
                            ? argStr.split(",")
                            : [];
                rule = RuleFactory_1.default.create.apply(RuleFactory_1.default, __spreadArray([name_1], args, false));
            }
            var passed = rule.validate.apply(rule, __spreadArray([value], args, false));
            if (!passed) {
                // 1) Resolve the user-friendly label for this field
                var label = _this.getFieldLabel(path);
                // 2) Pick the correct message template:
                //    a) field.rule, b) global rule, c) rule default
                var keyFieldRule = "".concat(path, ".").concat(rule.name);
                var keyGlobalRule = rule.name;
                var msgTemplate = (_b = (_a = _this.messages[keyFieldRule]) !== null && _a !== void 0 ? _a : _this.messages[keyGlobalRule]) !== null && _b !== void 0 ? _b : rule.message.apply(rule, __spreadArray([(_c = _this.fields[label]) !== null && _c !== void 0 ? _c : label], args, false));
                // 3) Replace :field placeholder with the actual label or field key
                //    Supports multiple occurrences of :field in the message
                msgTemplate = msgTemplate.split(":field").join(label);
                _this.addError(path, msgTemplate);
            }
        });
    };
    Validator.prototype.resolveField = function (path) {
        return path
            .split(".")
            .reduce(function (acc, part) { return (acc ? acc[part] : undefined); }, this.data);
    };
    Validator.prototype.getFieldLabel = function (path) {
        // lookup custom label by base key (before wildcard index)
        var base = path.replace(/\.\d+\./, ".*.");
        return this.fields[base] || this.fields[path] || path;
    };
    Validator.prototype.parseRule = function (rule) {
        if (typeof rule === "string") {
            var _a = rule.split(":"), name_2 = _a[0], args = _a.slice(1);
            var argArray = args.length > 0 ? args[0].split(",") : [];
            var ruleInstance = RuleFactory_1.default.create(name_2, argArray);
            if (!ruleInstance) {
                throw new Error("Rule \"".concat(name_2, "\" is not registered."));
            }
            return { rule: ruleInstance, args: argArray };
        }
        return { rule: rule, args: [] };
    };
    Validator.prototype.addError = function (field, message) {
        if (!this.errors[field]) {
            this.errors[field] = [];
        }
        this.errors[field].push(message);
    };
    Validator.prototype.getErrors = function () {
        return this.errors;
    };
    return Validator;
}());
exports.Validator = Validator;
