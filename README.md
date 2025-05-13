# ValidTS

**ValidTS** is a lightweight and extensible validation library written in TypeScript. It enables developers to define clean and reusable validation rules for forms, data models, and API inputs in plain JavaScript or Vue.js applications.

## 🔍 Features

- Simple and fluent API for rule definitions
- Built-in validation rules (required, minLength, email, etc.)
- Custom rule support
- Supports sync and async validations
- Works seamlessly with plain JavaScript or Vue.js
- Easily extendable and testable

## ✅ Available Rules

### 1. `required`
Checks if the value is present (not `null`, `undefined`, or empty string).

```ts
{ name: ["required"] }
```

---

### 2. `string`
Ensures the value is a string.

```ts
{ username: ["required", "string"] }
```

---

### 3. `numeric`
Ensures the value is a number.

```ts
{ age: ["required", "numeric"] }
```

---

### 4. `boolean`
Ensures the value is a boolean (`true` or `false`).

```ts
{ isActive: ["required", "boolean"] }
```

---

### 5. `array`
Ensures the value is an array.

```ts
{ tags: ["required", "array"] }
```

---

### 6. `email`
Validates that the value is a valid email address.

```ts
{ email: ["required", "email"] }
```

---

### 7. `url`
Validates that the value is a valid URL.

```ts
{ website: ["url"] }
```

---

### 8. `min:value`
For strings, arrays, and numbers: enforces minimum length or value.

```ts
{ password: ["required", "min:6"] }
{ age: ["numeric", "min:18"] }
```

---

### 9. `max:value`
For strings, arrays, and numbers: enforces maximum length or value.

```ts
{ username: ["required", "max:15"] }
{ quantity: ["numeric", "max:100"] }
```

---

### 10. `between:min,max`
Checks if a number or string length falls between two values (inclusive).

```ts
{ age: ["required", "between:18,60"] }
{ password: ["between:6,12"] }
```

---

Custom error messages are a powerful feature in ValidTS that help improve user experience by delivering clearer and more contextual feedback. By following the override hierarchy, you can finely tune your validation system.

## 🔍 Notes

- Each rule can accept arguments using `:` and `,` delimiters.
- Arguments are automatically parsed and passed to rule methods.

---


## Custom Error Messages in ValidTS

### Overview

When using the `Validator` class, you can pass a third argument: a `messages` object. This object lets you define custom error messages:

```ts
new Validator(data, schema, messages);
```

### Syntax

The `messages` object supports two types of keys:

| Key Format         | Description                                      |
|--------------------|--------------------------------------------------|
| `field.rule`       | Specific override for a rule on a particular field |
| `rule`             | General override for a specific rule             |

### Examples

#### Field-Specific Rule Message

```ts
const messages = {
  "email.required": "We need your email address."
};
```

This will override the default `required` error message **only** for the `email` field.

#### Global Rule Message

```ts
const messages = {
  "required": ":field is mandatory."
};
```

This overrides the `required` message for **all** fields—unless a more specific field-rule message is provided.

#### Default Rule Message Fallback

If no message is found in the `messages` object, the default message from the rule is used.

---

### Priority

When resolving the message to show, the following priority is used:

1. `messages["field.rule"]` – most specific
2. `messages["rule"]` – rule-wide override
3. `Rule.defaultMessage(field)` – built-in fallback

#### Example

```ts
const data = {
  name: "",
  email: "not-an-email"
};

const schema = {
  name: ["required"],
  email: ["required", "email"]
};

const messages = {
  "name.required": "Please provide your name.",
  "email": "The value for email is not valid."
};

const validator = new Validator(data, schema, messages);
const result = validator.validate();

console.log(result.errors);
```

Output:

```json
{
  "name": ["Please provide your name."],
  "email": ["The value for email is not valid."]
}
```

---

### Best Practices

- Use `:field` in your messages to interpolate the field name dynamically.
- Keep your messages consistent in tone and format.
- Use `field.rule` when you need more granular control over user experience.

---

### Conclusion

Custom error messages are a powerful feature in ValidTS that help improve user experience by delivering clearer and more contextual feedback. By following the override hierarchy, you can finely tune your validation system.

Made with ❤️ for developers.

