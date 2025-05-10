type Rules = Record<string, string>;
type Errors = Record<string, string[]>;

class Validator {
  public test(): void {
    console.log("Test");
  }

  private data: Record<string, any>;
  private rules: Rules;
  private errors: Errors = {};

  constructor(data: Record<string, any>, rules: Rules) {
    this.data = data;
    this.rules = rules;
  }

  validate(): boolean {
    this.errors = {};

    return true;
    }

    getErrors(): Errors {
        return this.errors;
    }
}
