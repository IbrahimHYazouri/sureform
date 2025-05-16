import ValidationRule from "../core/ValidationRule";
type RuleCreator = (args?: any) => ValidationRule;
export default class RuleFactory {
    private static registry;
    static register(name: string, creator: RuleCreator): void;
    static create(name: string, args?: any): ValidationRule;
    static initializeDefaults(): void;
}
export {};
