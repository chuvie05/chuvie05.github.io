console.log("Hi");
console.log("How are you homie");
let name = "vie";
console.log("ALOHA, I am", name);
let myID = 11122005;
console.log("Hi, my student id is", myID);
name = "a joke";
console.log("HI, I am", name);
// let myNewName = prompt("What is your name");
let myNewName = "Melbourne";
console.log("Hello", myNewName);
let myCity = "Perth";
console.log("Hello", myNewName, myCity);
// if you knopw the value is not going to change, define it using const
// or else use let
let a = 30;
{
  let a = 10;
  console.log("Heloo", a);
}
console.log("Heloo", a);

//object variables {}
const myStudentDetails = {
  name: "Vie",
  id: 11122005,
  homeTown: "HCMc",
};
console.log(myStudentDetails);
console.log("my hometown is", myStudentDetails.homeTown);

const weather = "sunny";
const msg = `<h1> Today's weather is ${weather}
<p> this is so nice to see the sun again </p>

<h1/>`;
let num = 10;
let num2 = parseInt("20");
let sum = num + num2;
console.log("total is", sum);

// + for addition as well as joining text
// -b for subtraction
// * for multiplication
// / division
let array = [2, 4, 6, 8, 10];
console.log(array[3]);
let student1 = "Rohit";
let student2 = "Roger";
let studentArray = ["Rohit", "Roger", "Sarah", "Julia", "Tim"];
console.log(studentArray[2]);
console.log(studentArray[0]);

if (weather === "sunny") {
  console.log("today is sunny weather");
} else {
  console.log("too bad the weather today is not so good");
}
for (let i = 0; i < studentArray.length; i++) {
  console.log("HELLO", studentArray[1]);
}
function addition(a, b) {
  let c = a + b;
  console.log(c);
}
a = 23;
b = 17;
c = a + b;
console.log(c);

function whatIsMyGrade(marks) {
  if (marks < 40) {
    return "failed";
  } else if (marks > 80) return "HD";
}
let myMarks = 94;
let myGrades = whatIsMyGrade(myMarks);
console.log(myGrades);
