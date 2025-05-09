abstract class AbstractRule implements RuleInterface {
  /**
   * Check if value is required to be validated
   * If the value is optional (null, empty string, empty array) and not required.
   */
  protected shouldValidate(
    value: any,
    params: Record<string, any> = {}
  ): boolean {
    const isEmpty =
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0);

    const isRequired = params.required === true;

    return !(isEmpty && !isRequired);
  }

  /**
   * Get the display name for a field
   */
  protected getDisplayName(
    field: string,
    attributes: Record<string, string>
  ): string {
    return attributes[field] ?? this.ucfirst(field.replace(/[_\.]/g, " "));
  }

  private ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Format an error message with parameters
   */
  protected formatErrorMessage(
    message: string,
    params: Record<string, any>
  ): string {
    for (const [key, value] of Object.entries(params)) {
      if (typeof value !== "object") {
        message = message.replace(new RegExp(`{${key}}`, "g"), String(value));
      }
    }
    return message;
  }

  /**
   * Get the error message for a field
   */
  public errorMessage(
    field: string,
    params: Record<string, any>,
    messages: Record<string, string>,
    attributes: Record<string, string>
  ): string {
    const displayName = this.getDisplayName(field, attributes);

    if (messages[field]) {
      return this.formatErrorMessage(messages[field], {
        ...params,
        field: displayName,
      });
    }

    return this.defaultErrorMessage(displayName, params);
  }

  /**
   * Get the default error message.
   */
  protected abstract defaultErrorMessage(
    displayName: string,
    params: any
  ): string;

  public abstract validate(field: string, value: any, params?: any): boolean;
}
