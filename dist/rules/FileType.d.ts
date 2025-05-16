import { AbstractRule } from "../core/AbstractRule";
export default class FileType extends AbstractRule {
    name: string;
    validate(value: any, types: string[]): boolean;
    message(field: string, types: string[]): string;
}
