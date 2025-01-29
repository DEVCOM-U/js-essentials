# JavaScript Variable Declaration and Scope

## Variable Declaration

In JavaScript, variables can be declared using `var`, `let`, or `const`.

### `var`
- Function-scoped or globally-scoped.
- Can be re-declared and updated.

### `let`
- Block-scoped.
- Can be updated but not re-declared within the same scope.

### `const`
- Block-scoped.
- Cannot be updated or re-declared.
- Must be initialized during declaration.


## Scope

Scope determines the accessibility of variables. JavaScript has function scope and block scope.

### Global Scope
Variables declared outside any function or block have global scope and can be accessed from anywhere in the code.

```javascript
let sampleName = "Global Scope";
console.log("Sample name first: ", sampleName);
sampleName = "Sample";
console.log("Sample name changes: ", sampleName);
```

### Function Scope
Variables declared within a function are accessible only within that function.

### Block Scope
Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.

```javascript
{
  let name = "Local Scope";
  console.log(name); // Accessible here
}
// console.log(name); // Not accessible here
```

### Constants
Constants are declared using `const` and cannot be reassigned.

```javascript
const PI = 3.14;
// PI = 3.15; // This will cause an error
const calc = 12 * PI;
console.log(`Result calculation: `, calc);
```
