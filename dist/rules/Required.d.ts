import ValidationRule from "../core/ValidationRule";
export declare class Required implements ValidationRule {
    name: string;
    validate(value: any): boolean;
    message(field: string): string;
}
