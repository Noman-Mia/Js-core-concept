/*  
***js you need to know for react***
1.condition, multiple condition
2.array
3.loop  
4.function
5.arrow functon, multiline arrow
6.object
7.tamplete string
8.spreed operator
9.array methods---> map,forEach,filter,find
10.destructuring--> array, object
11.json -->stringify, parse
12.fetch
13.object keys,values
14.add and remove in array using apreed operator and filter function
15.ternary operator and advanced tarnay operator
16.truthy and falsey values
17.localstorege and sessionstorege youtube mama
18.dot notation and bracket notation
*/

//condition
const marks = 80;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A-");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 50) {
  console.log("B");
} else if (marks >= 40) {
  console.log("c");
} else {
  console.log("field");
}

//multiple condition
const age = 20;
const name = "noman";
const isStudent = true;

if (age === 23 || (name === "noman" && isStudent === true)) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

//array
const roll = [55, 20, 42, 40, 80, 62, 20, 46];
// const newRoll = roll.push(100);
// const newRoll = roll.unshift(10);
// const newRoll = roll.slice(2,3);
const newRoll = roll.splice(2, 2, 9);
console.log(roll);

// loop
let rolls = 10;
for (let i = 0; i <= rolls; i++) {
  console.log(i);
}

let i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

//function
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
console.log(add(20, 10));

// arrow functon
const add1 = () => 56;
const add2 = (num1) => num1 + 40;
const add3 = (num1, num2) => num1 * num2;
const isEven = (x) => x % 2 === 0;
console.log(isEven(100));
console.log(add3(3, 3));

//multiline arrow
const add4 = (x, y, z) => {
  const sum = x + y + z;
  return sum;
};
console.log(add4(2, 2, 2));

//object
let person = {
  name: "John",
  age: 30,
  city: "New York",
  job: {
    first: "bangladesh",
    second: "japan",
  },
};

const man = person;
man.name = "noman";
console.log(man);

//tamplete string
let allOne = `
my name is ${person.name}.Iam ${person.age}years old.my country name is ${person.job.first}
`;
console.log(allOne);

//spreed operator
const id = [72, 52, 62, 45, 42];
const currentId = [...id, 10];
console.log(currentId);
console.log(id);

//array methods
//map
const colors = products.map((product) => product.color); //map created new array and return
console.log(colors);

//forEach
products.forEach((product) => console.log(product.name)); // no return

// filter
const conditionWay = products.filter((product) => product.price > 4069);
console.log(conditionWay);

//find
const oneFind = products.find((product) => product.name.includes("p"));
console.log(oneFind);

// destructuring
const myArray = [54, 85, 87, 47]; //array
const [x, y, z, w] = myArray;
console.log(x, y, z, w);

const man = {
  name: "noman", //object
  rolls: 677319,
  age: 20,
  home: {
    mainHome: "rowmari",
    home: "kurigram",
    village: {
      nam: "boulmari",
    },
  },
};

//   const {rolls} = man;
//   console.log(rolls);


// json
const persons = {
  name: "sakib all hasan",
  roll: 80,
  age: 39,
};

const newPerson = JSON.stringify(persons);
console.log(newPerson);

const againPerson = JSON.parse(newPerson);
console.log(againPerson);


//fetch
fetch("url")
  .then((response = response.JSON()))
  .then((data) => console.log(data));


//keys,values
const noman = {
  name: "noman",
  roll: 677319,
  isStudent: true,
};
const newNoman = Object.keys(noman);
console.log(newNoman);
const oldNoman = Object.values(noman);
console.log(oldNoman);

//from today we will use forEach replace loop.if need return then use map
const someArray = [52, 85, 6, 544, 545];
someArray.forEach((array) => console.log(array));

//if need return then use map
const newArrays = someArray.map((array) => array * array);
console.log(newArrays);

//add and remove from an array
const productes = [
    { id: 1, name: "waltons", price: 4000, color: "whites" },
    { id: 2, name: "samsungs", price: 4080, color: "blues" },
    { id: 3, name: "itels", price: 4070, color: "blacks" },
    { id: 4, name: "oppos", price: 4090, color: "navys" },
  ];

  //add new array and create new array
const newProductes = {id:5, name:"bahh phone", price:5999, color:"blacks"};
const newProdects = [...productes,newProductes];//new products new array copy kore
console.log(newProdects);

//remove waltons and create new array
const remaining = productes.filter(p => p.name !== "waltons ");
console.log(remaining);

// //truthy value 
// 'n',5,true,{},[]

// //false value
// '',0,false,nul,undefined


// ternary operator
let money = 0;
let ages = 10;
const lok = (money < 100 && ages < 11)? "sotolok": "brolok";
console.log(lok);


// advanced tarnary operator 
const isActive = false;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
// isActive ? showUser() : hideUser(); or
//use && if the left side is the true then right side will be executed
isActive && showUser();
//use || if the lefr side is false then right side will be executed
isActive || hideUser();


//toggole bollen
isActive =!isActive;


//dot notaton and bracket notation
const myIntro = {
    name:"noman",
    id:3333,
    home:"kurigram",
    23:"age"
};
//dot notation 23 a kaj korbe na 
//dot notaton
const myName = myIntro.name;
console.log(myName);


//bracket notation
 const find23 = myIntro[23];
 console.log(find23);
 const findHome = myIntro["home"];
 console.log(findHome);