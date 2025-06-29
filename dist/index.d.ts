type SchemaRule = string | RuleDefinition | ((val: any, data?: any) => boolean | string);
interface RuleDefinition {
    name: string;
    args?: any[];
}
type Schema = Record<string, SchemaRule[]>;
interface Messages {
    [key: string]: string;
}
interface Fields {
    [key: string]: string;
}
interface ValidationResult {
    valid: boolean;
    errors: Record<string, string[]>;
}
declare class Validator {
    private data;
    private schema;
    private messages;
    private fields;
    private errors;
    constructor(data: Record<string, any>, rules: Schema, messages?: Messages, fields?: Fields);
    validate(): ValidationResult;
    private applyRules;
    private resolveField;
    private getFieldLabel;
    private parseRule;
    private addError;
    getErrors(): Record<string, string[]>;
}

interface ValidationRule {
    name: string;
    validate(value: any, ...args: any): boolean;
    message(field: string, ...args: any): string;
}

declare abstract class AbstractRule implements ValidationRule {
    abstract name: string;
    abstract validate(value: any, ...args: any): boolean;
    abstract message(field: string, ...args: any): string;
    ucfirst(field: string): string;
}

export { AbstractRule, type Fields, type Messages, type RuleDefinition, type Schema, type SchemaRule, type ValidationResult, Validator };
