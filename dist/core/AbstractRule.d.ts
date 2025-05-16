import ValidationRule from "./ValidationRule";
export declare abstract class AbstractRule implements ValidationRule {
    abstract name: string;
    abstract validate(value: any, ...args: any): boolean;
    abstract message(field: string, ...args: any): string;
    ucfirst(field: string): string;
}
