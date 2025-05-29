import { AbstractRule } from "../core/AbstractRule";

export class StrongPassword extends AbstractRule {
	name = "strong-password";

	validate(value: any): boolean {
	   if (!value || typeof value !== "string") return false;
	   return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
	}

    message(field: string): string {
    	return `${field} must be at least 8 characters long and include uppercase, lowercase, number, and special character.`;
	}
}