export default interface ValidationRule {
    name: string;
    validate(value: any, ...args: any): boolean;
    message(field: string, ...args: any): string;
}
