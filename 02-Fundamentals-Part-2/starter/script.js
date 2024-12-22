const calcAverage = (a, b, c) => (a + b + c) / 3;
const avg = calcAverage(44, 23, 71);
console.log(`Average is : ${avg}`);
console.log(`Average is : ${calcAverage(44, 23, 71)}`);

let scoreDolphins;
let scoreKoalas;

scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win 👍(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win 👍(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

console.log("-------------Arrays Parctice--------------------------");

const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends);
console.log(friends[0]);
console.log(friends.length);

const sajidArray = ["Sajid", "HANIF", 2024 - 1977];
console.log(sajidArray);

console.log("------------ Arrays Add Elements ---------------------");
friends.push("Jay");
console.log(friends);
friends.unshift("John");
console.log(friends);

console.log("------------ Arrays Remove Elements ------------------");
friends.pop("Jay");
console.log(friends);
friends.shift("John");
console.log(friends);

console.log("------------ Arrays Check Elements ------------------");
console.log(friends.indexOf("Steven"));
console.log(friends.includes("Bob"));

console.log("------------ Arrays Tip Calculator ---------------");
const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

console.log("------Object Declaration using Object Literal----------");
const sajid = {
  firstName: "Sajid",
  lastName: "HANIF",
  age: 2024 - 1977,
  job: "Web Developer",
  friendsList: ["Azhar", "Khalid"],
};

console.log("- Object - Access a Property using an Expression with []-");
/*
const interestedIn = prompt(
  "What do you want to know about Sajid? Choose between firstName, lastName, age, job and friendsList"
);

console.log(sajid[interestedIn]);
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const bmiMark = mark.calcBMI();
const bmiJohn = john.calcBMI();

console.log(`Mark's BMI: ${bmiMark}`);
console.log(`John's BMI: ${bmiJohn}`);

console.log(
  bmiMark > bmiJohn
    ? `${mark.fullName}'s BMI (${bmiMark}) is higher than ${john.fullName}'s (${bmiJohn})!`
    : `${john.fullName}'s BMI (${bmiJohn}) is higher than ${mark.fullName}'s (${bmiMark})!`
);
