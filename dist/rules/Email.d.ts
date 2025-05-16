import { AbstractRule } from "../core/AbstractRule";
export declare class Email extends AbstractRule {
    name: string;
    private emailRegex;
    validate(value: any): boolean;
    message(field: string): string;
}
