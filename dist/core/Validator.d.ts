export type SchemaRule = string | RuleDefinition | ((val: any, data?: any) => boolean | string);
export interface RuleDefinition {
    name: string;
    args?: any[];
}
export type Schema = Record<string, SchemaRule[]>;
export interface Messages {
    [key: string]: string;
}
export interface Fields {
    [key: string]: string;
}
export interface ValidationResult {
    valid: boolean;
    errors: Record<string, string[]>;
}
export declare class Validator {
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
