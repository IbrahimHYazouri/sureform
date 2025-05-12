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

## 🔍 Notes

- Each rule can accept arguments using `:` and `,` delimiters.
- Arguments are automatically parsed and passed to rule methods.

---

Made with ❤️ for developers.

