"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayRule_1 = require("../rules/ArrayRule");
var BetweenRule_1 = require("../rules/BetweenRule");
var Boolean_1 = require("../rules/Boolean");
var Email_1 = require("../rules/Email");
var FileType_1 = require("../rules/FileType");
var InArray_1 = require("../rules/InArray");
var MaxRule_1 = require("../rules/MaxRule");
var MinRule_1 = require("../rules/MinRule");
var NotRegex_1 = require("../rules/NotRegex");
var Numeric_1 = require("../rules/Numeric");
var Regex_1 = require("../rules/Regex");
var Required_1 = require("../rules/Required");
var StringRule_1 = require("../rules/StringRule");
var Url_1 = require("../rules/Url");
var RuleFactory = /** @class */ (function () {
    function RuleFactory() {
    }
    RuleFactory.register = function (name, creator) {
        if (RuleFactory.registry.has(name)) {
            throw new Error("Rule [".concat(name, "] is already registered."));
        }
        RuleFactory.registry.set(name, creator);
    };
    RuleFactory.create = function (name, args) {
        var creator = RuleFactory.registry.get(name);
        if (!creator) {
            throw new Error("Rule [".concat(name, "] is not registered"));
        }
        return creator();
    };
    RuleFactory.initializeDefaults = function () {
        RuleFactory.register("required", function () { return new Required_1.Required(); });
        RuleFactory.register("min", function () { return new MinRule_1.MinRule(); });
        RuleFactory.register("max", function () { return new MaxRule_1.MaxRule(); });
        RuleFactory.register("between", function () { return new BetweenRule_1.BetweenRule(); });
        RuleFactory.register("email", function () { return new Email_1.Email(); });
        RuleFactory.register("url", function () { return new Url_1.Url(); });
        RuleFactory.register("array", function () { return new ArrayRule_1.ArrayRule(); });
        RuleFactory.register("numeric", function () { return new Numeric_1.Numeric(); });
        RuleFactory.register("string", function () { return new StringRule_1.StringRule(); });
        RuleFactory.register("boolean", function () { return new Boolean_1.Boolean(); });
        RuleFactory.register("regex", function () { return new Regex_1.Regex(); });
        RuleFactory.register("not-regex", function () { return new NotRegex_1.NotRegex(); });
        RuleFactory.register("in-array", function () { return new InArray_1.InArray(); });
        RuleFactory.register("file-type", function () { return new FileType_1.default(); });
    };
    RuleFactory.registry = new Map();
    return RuleFactory;
}());
exports.default = RuleFactory;
RuleFactory.initializeDefaults();
