// For
// For of
// For in
// While
// do-While
// break
// continue
// less than

let arr = ["user1", "user2", "user3", "user4", "user5", "user6", "user7"];

const users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7"];

const userInfo = {
  username: "Jack",
  email: "jack@gmail.com",
  password: "asdjalsdjaklsjdlkdas",
  created_at: "08/02/2025, 18:00"
};

console.log(`key userInfo: ${userInfo.username}`)
console.log(`key userInfo: ${userInfo.email}`)
console.log(`key userInfo: ${userInfo.password}`)
console.log(`key userInfo: ${userInfo.created_at}`)

for (const key in userInfo) {
  console.log(`key userInfo: ${key}: ${userInfo[key]}`)
}

// for (const user of users) {
//   console.log(`User name with for of: ${user}`);
// }

// users.forEach(function (user) {
//   console.log(`For each iteration: ${user}`);
// });

// for (let i = 0; i < arr.length; i++) {
//   // console.log(`Iteration: i ${i}`);
//   console.log(`User name:  ${arr[i]}`);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`Iteration: i ${i}`);
// }

let j = 0;

while (j <= 10) {
  // console.log("Iteration " + j);

  // if (j === 5) {
  //   break;
  // }
  // continue

  if (j === 5) {
    j++;

    continue;
  }

  console.log(`Iteration: j ${j}`);

  j++;
}

// console.log('Hello World')
