import { AbstractRule } from "../core/AbstractRule";
export declare class StrongPassword extends AbstractRule {
    name: string;
    validate(value: any): boolean;
    message(field: string): string;
}
