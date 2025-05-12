export default interface ValidationRule {
  name: string;

  /**
   * Validate the given value against this rule
   * @param value - the value to validate
   * @param args - optional parameters for validation
   * @returns true if valid, false otherwise
   */
  validate(value: any, ...args: any): boolean;

  /**
   * Generate an error message when validation fails.
   * @param field - the field name
   * @param args - optional parameters for message interpolation
   * @returns string error message
   */
  message(field: string, ...args: any): string;
}
