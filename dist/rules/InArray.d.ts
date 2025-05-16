import { AbstractRule } from "../core/AbstractRule";
export declare class InArray extends AbstractRule {
    name: string;
    validate(value: any, list: any[]): boolean;
    message(field: string, list: any[]): string;
}
