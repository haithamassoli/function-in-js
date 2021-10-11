/*
1
Write a function named tellFortune that:
takes 4 arguments: numberber of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
console.log("=================================================");
let tellFortune = (Job, location, pN, number) => {
  console.log(
    `You will be a ${Job} in ${location}, and married to ${pN} with ${number} kids.`
  );
};

tellFortune("software engineer", "Jordan", "Alice", 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
console.log("=================================================");

let calculateDogAge = (age) => {
  console.log(`Your doggie is ${age * 7} years old in dog years!`);
};
calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a letant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
console.log("=================================================");

let calculateSupply = (age, amount) => {
  let NN = (100 - age) * amount;
  console.log(`You will need ${NN} to last you until the ripe old age of 100`);
};
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
console.log("=================================================");

let greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Adam"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}
function double('7') {
  return 2 * 'x';
}
*/
console.log("=================================================");
console.log(`x غير معرفة
argument must be variable
argument must be variable`);

/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}
*/
console.log("=================================================");
console.log(`function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}`);

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this numberber

Ex: cube(4)
=> 64
*/
console.log("=================================================");
let cube = (number) => {
  return number ** 2;
};

console.log(cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numberbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
console.log("=================================================");
let multiply = (number1, number2) => number1 * number2;

console.log(multiply(5, 4));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
console.log("=================================================");

let canIGetADrivingLicense = (age) => {
  if (age >= 20) return "yes you can";
  else return `please come back after ${20 - age} years to get one`;
};
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
console.log("=================================================");
let sameLength = (string1, string2) => {
  if (string1.length === string2.length) return true;
  return false;
};

console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "car"));

/*
11
Write a function called largerNubmer
that accept two numberbers as arguments,
and return the first larger numberbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
console.log("=================================================");
let largenumberber = (number1, number2) => {
  if (number1 >= number2) return number1;
  return number2;
};

console.log(largenumberber(5, 6));

/*
12
Write a function called smallerNubmer
that accept three numberbers as arguments,
and return the first smaller numberber

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
console.log("=================================================");
let smallernumberber = (number1, number2, number3) => {
  if (number1 <= number2 && number1 <= number3) return number1;
  else if (number2 <= number3) return number2;
  else return number3;
};

console.log(smallernumberber(8, 6, 7));
console.log(smallernumberber(5, 99, 34));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> tr

Ex: shorterString("air","tr","car","github","by")
=> by

*/
console.log("=================================================");
let shorterString = (string1, string2, string3, string4, string5) => {
  if (
    string1.length <= string2.length &&
    string1.length <= string3.length &&
    string1.length <= string4.length &&
    string1.length <= string5.length
  )
    return string1;
  if (
    string2.length <= string3.length &&
    string2.length <= string4.length &&
    string4.length <= string5.length
  )
    return string2;
  if (string3.length <= string4.length && string3.length <= string5.length)
    return string3;
  if (string4.length <= string5.length) return string4;
  else return string5;
};

console.log(shorterString("air", "school", "car", "by", "github"));
console.log(shorterString("air", "tr", "car", "by", "github"));
console.log(shorterString("by", "tr", "car", "air", "github"));
console.log(shorterString("air", "by", "car", "school", "github"));
console.log(shorterString("air", "tr", "by", "car", "github"));
console.log(shorterString("air", "tr", "car", "github", "by"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
let longerString = (string1, string2, string3, string4) => {
  if (
    string1.length >= string2.length &&
    string1.length >= string3.length &&
    string1.length >= string4.length &&
    string1.length >= s5
  )
    return string1;
  if (string2.length >= string3.length && string2.length >= string4.length)
    return string2;
  if (string3.length >= string4.length) return string3;
  return string4;
};
console.log("=================================================");
console.log(longerString("air", "school", "car", "github"));
console.log(longerString("air", "schoo", "car", "github"));

/*
15
Write a function called isEven
that accept 1 argument as a numberber,
and return true if this numberber is even
and false if this numberber is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
console.log("=================================================");
let isEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

console.log(isEven(1));
console.log(isEven(2));

/*
16
Write a function called isOdd
that accept 1 argument as a numberber,
and return true if this numberber is Odd
and false if this numberber is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
console.log("=================================================");
let isOdd = (number) => {
  if (number % 2 === 0) return false;
  return true;
};

console.log(isOdd(4));
console.log(isOdd(5));

/*
17
Write a function called positive
that accept 1 argument as a numberber,
and return the positive version of the numberber passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
console.log("=================================================");
let positive = (number) => {
  if (number >= 0) return number;
  return number * -1;
};

console.log(positive(4));
console.log(positive(-5));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
console.log("=================================================");
let fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(fullName("Adam", "McCallen"));
console.log(fullName("Alex", "Mercer"));

/*
19
Write a function called average
that takes five numberbers as inputs
and returns the average of those numberbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
console.log("=================================================");
let average = (number1, number2, number3, number4, number5) => {
  return (number1 + number2 + number3 + number4 + number5) / 5;
  /**There is a neater and more autonomous way using for loop in case of a variable numberber */
};

console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5));

/*
20
Write a function called randomnumberber
that didnt takes any parameter
and returns a random numberber between 0-1
** hint: you can seacrh using MDN

Ex: randomnumberber()
=> 0.2278

Ex: randomnumberber()
=> 0.475

*/
console.log("=================================================");
let randomnumberber = () => {
  return Math.random();
};

console.log(randomnumberber());
console.log(randomnumberber());

/*
21
Write a function called randomBetweennumberbers
that takes 2 parameters
and returns a random numberber between them
** hint: you can seacrh using MDN

Ex: randomBetweennumberbers(1,8)
=> 7.5412

Ex: randomBetweennumberbers(3,100)
=> 23

*/
console.log("=================================================");
let randomBetweennumberbers = (number1, number2) => {
  return Math.random() * (number2 - number1) + number1;
};

console.log(randomBetweennumberbers(1, 8));
console.log(randomBetweennumberbers(3, 100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
console.log("=================================================");
let scoreInUniversty = (number) => {
  if (number > 100 || number < 0) return "wrong input";
  if (number >= 95 && number <= 100) return "A";
  if (number >= 85 && number <= 94) return "B";
  if (number >= 70 && number <= 84) return "C";
  if (number >= 50 && number <= 69) return "D";
  if (number >= 0 && number <= 49) return "F";
  //you can use switch statement
};

console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));

/*
23
Write a function called counter
that will returns a numberber bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// The only way that I can think of is to define or assign an outside variable and control it inside the function;
console.log("=================================================");
let count = 0;
let counter = () => {
  count++;
  return count;
};

console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the numberber before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
console.log("=================================================");
count = 0;
let resetCounter = () => {
  let oldCounter = count;
  count = 0;
  return `${oldCounter} and the counter reset now`;
};

console.log(counter());
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());
