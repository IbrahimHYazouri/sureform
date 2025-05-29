import { StrongPassword } from "../rules/StrongPassword";

describe('StrongPasswrodRule', () => {
	const rule = new StrongPassword();

	it('fails for weak passwords', () => {
    	expect(rule.validate("123456")).toBe(false);
    	expect(rule.validate("abcdefg")).toBe(false);
    	expect(rule.validate("ABC123")).toBe(false);
  	});

	it('passes for strong passwords', () => {
	    expect(rule.validate("Aa1@strong")).toBe(true);
	    expect(rule.validate("S3cure$Pass")).toBe(true);
	});

	it('fails on empty or non-string', () => {
	    expect(rule.validate("")).toBe(false);
	    expect(rule.validate(null)).toBe(false);
	    expect(rule.validate(123456)).toBe(false);
	});
})