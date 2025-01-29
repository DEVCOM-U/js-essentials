// Primitives
let nullable = null;
console.log("Nullable: ", nullable);

const isTrue = true;
const isFalse = false;

const str = "this is double-quote string example";
const strSingleQuote = 'this is a single-quote string example';

const combination = str + " " + strSingleQuote;
console.log("This is non-templating: ", combination);

const combinationStr = `${str} ${strSingleQuote}`;
console.log("This is templating: ", combinationStr);

const num = 0;
const bigNumber = BigInt(20);

// Non-primitives
const usersArray = ["user-1", "user-2", "user-3", "user-4"];
console.log("Total users: ", usersArray.length);

const lastUser1 = usersArray[usersArray.length - 1];
console.log("Last user check: ", lastUser1);

const lastUser = usersArray.at(-1);
console.log("Last user: ", lastUser);

const collectionNums = [10, 10, 10, 10, 20, 30];
const result = collectionNums.reduce((a, b) => a + b);
console.log(result);

let user1 = {
  id: 1,
  name: "Joko",
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

// Uncomment the following loops if needed
// for (const user of users) {
//   console.table("User: ", user);
// }

// users.forEach(user => {
//   console.log("User: ", user);
// });

// for (let i = 0; i < users.length; i++) {
//   console.log("Traditional loop: ", users[i]);
// }

const searchId = 10;
const foundUser = users.find(user => user.id === searchId);
console.log("Found user: ", foundUser);
