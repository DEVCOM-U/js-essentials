# Data Structures in JavaScript

This document explains the various data structures and code examples provided in the `data-structure.js` file.

## Primitives

### Null
Represents the intentional absence of any object value.
```javascript
let Nullable = null;
console.log("Nullable: ", Nullable);
```

### Undefined
Indicates that a variable has not been assigned a value.

### Boolean
Represents a logical entity and can have two values: `true` and `false`.
```javascript
const isTrue = true;
const isFalse = false;
```

### String
Used to represent textual data.
```javascript
const str = "this is double-quote string example";
const strSingleQuote = 'this is a single-quote string example';
const combination = str + " " + strSingleQuote;
console.log("this is non-templating: ", combination);
const combinationStr = `${str} ${strSingleQuote}`;
console.log("this is templating: ", combinationStr);
```

### BigInt
Used to represent whole numbers larger than 2^53 - 1.
```javascript
const bigNumber = BigInt(20n);
```

### Number
Represents both integer and floating-point numbers.
```javascript
const num = 0;
```

## Non-Primitives

### Array
An ordered collection of values.
```javascript
const users = ["user-1", "user-2", "user-3", "user-4"];
console.log("Total users: ", users.length);
const lastUser1 = users[users.length - 1];
console.log("Last users check: ", lastUser1);
const lastUser = users.at(-1);
console.log("Last users: ", lastUser);
const collectionNums = [10, 10, 10, 10, 20, 30];
const result = collectionNums.reduce(function (a, b) {
  return a + b;
});
console.log(result);
```

### Object
A collection of properties, where each property is a key-value pair.
```javascript
let user1 = {
  id: 1,
  name: "joko",
  age: 18,
  address: "JL. Rahasia",
  job: {
    role: "IT",
    salary: 200000000,
  }
};
let user2 = {
  id: 2,
  name: "John",
  age: 19,
  address: "JL. Something",
  job: {
    role: "Sales",
    salary: 10000000,
  }
};
const users = [user1, user2];
```

### Map and Set
Specialized data structures for storing collections of data.

## Code Examples

### Looping through Arrays
Different ways to loop through arrays.
```javascript
users.forEach(function (user) {
  console.log("user: ", user);
});
for (let i = 0; i < users.length; i++) {
  console.log("traditional loop: ", users[i]);
}
```

### Finding an Element
Using the `find` method to search for an element in an array.
```javascript
const searchId = 10;
const foundUser = users.find(function (user) {
  if (user.id === searchId) {
    return user;
  }
});
console.log("findUser: ", foundUser);
