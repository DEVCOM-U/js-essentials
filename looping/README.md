# Looping in JavaScript

Looping is a fundamental concept in programming that allows you to execute a block of code multiple times. In JavaScript, loops are used to iterate over arrays, objects, or any iterable data structure. The most common types of loops in JavaScript are `for`, `while`, and `do...while` loops. Each type of loop serves a different purpose and can be used in various scenarios to make your code more efficient and concise.

## The `for` Loop

The `for` loop is the most commonly used loop in JavaScript. It allows you to iterate over a block of code a specified number of times.

### Syntax

```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

### Example

```javascript
for (let i = 0; i < 10; i++) {
  console.log(`Iteration: i ${i}`);
}
```

## The `for...of` Loop

The `for...of` loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and more.

### Syntax

```javascript
for (const element of iterable) {
  // code to be executed
}
```

### Example

```javascript
const users = ["user1", "user2", "user3"];

for (const user of users) {
  console.log(`User name with for of: ${user}`);
}
```

## The `for...in` Loop

The `for...in` loop is used to iterate over the enumerable properties of an object.

### Syntax

```javascript
for (const key in object) {
  // code to be executed
}
```

### Example

```javascript
const userInfo = {
  username: "Jack",
  email: "jack@gmail.com",
  password: "asdjalsdjaklsjdlkdas",
  created_at: "08/02/2025, 18:00"
};

for (const key in userInfo) {
  console.log(`key userInfo: ${key}: ${userInfo[key]}`);
}
```

## The `while` Loop

The `while` loop executes a block of code as long as a specified condition is true.

### Syntax

```javascript
while (condition) {
  // code to be executed
}
```

### Example

```javascript
let j = 0;

while (j <= 10) {
  if (j === 5) {
    j++;
    continue;
  }

  console.log(`Iteration: j ${j}`);
  j++;
}
```

## The `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it executes the block of code at least once before checking the condition.

### Syntax

```javascript
do {
  // code to be executed
} while (condition);
```

### Example

```javascript
let k = 0;

do {
  console.log(`Iteration: k ${k}`);
  k++;
} while (k < 5);
```

## The `break` Statement

The `break` statement is used to exit a loop prematurely.

### Example

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Iteration: i ${i}`);
}
```

## The `continue` Statement

The `continue` statement is used to skip the current iteration of a loop and continue with the next iteration.

### Example

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Iteration: i ${i}`);
}
