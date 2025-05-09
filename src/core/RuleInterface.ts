interface RuleInterface {

    /**
   * Validates the given field value.
   *
   * @param string $field The field name to validate.
   * @param any $value The value to validate.
   * @param array $params Additional validation parameters.
   * @returns boolean True if the value is valid, false otherwise.
   */
    validate(field: string, value: any, params?: any): boolean;

    /**
   * Returns an error message for the given field.
   *
   * @param string $field The field name to generate an error message for.
   * @param array $params Additional validation parameters.
   * @param array $messages An array of error messages.
   * @param array $attributes An array of field attributes.
   * @returns string The error message for the field.
   */
    errorMessage(field: string, params?: any, messages?: { [key: string]: string }, attributes?: { [key: string]: any }): string;
}