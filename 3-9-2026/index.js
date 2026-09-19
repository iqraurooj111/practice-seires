// a=1;
// b=2;
// c=a+b;
// console.log(c);
// console.log("Hello World");

// console.log("hello");
// var x=10;
// var y=20;
// var z=x+y;
// console.log(z);

// const PI=3.14;
// console.log(PI);

 // Condition false hone par bhi ek baar chalega
// let i = 1;

// do {
//   console.log("Count: " + i);
//   i++;
// } while (i <= 5);







// 1 se 5 tak ginti print karega
// let i = 1;

// while (i <= 5) {
//   console.log("Count: " + i);
//   i++; // Value ko aage barhana zaroori hai
// }

// 1 se 5 tak ginti print karega
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let num = 2;
// for (let i = 1; i <= 10; i++) {
     
//    console.log(`${num} x ${i} = ${num * i}`);
// }


// let i=1;
// while(
//     i<=8
// ) {
//     console.log(i);
// } i++;

//  let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Hafte ka pehla din - Workday!");
//     break; // break zaroori hai taake agle cases execute na hon
//   case "Friday":
//     console.log("Jummah Mubarak!");
//     break;
//   case "Sunday":
//     console.log("Chhutti ka din!");
//     break;
//   default:
//     console.log("Normal working day.");
// }
// Output: Hafte ka pehla din - Workday!



// let age = 20;

// // Normal if/else ki jagah 1 line mein:
// let canVote = (age >= 18) ? "Aap vote de sakte hain" : "Aap vote nahi de sakte";

// console.log(canVote); // Output: Aap vote de sakte hain



// let marks = 79;

// if (marks >= 80) {
//   console.log("Grade: A+");
// } else if (marks >= 70) {
//   console.log("Grade: A");
// } else if (marks >= 60) {
//   console.log("Grade: B");
// } else {
//   console.log("Grade: Fail");
// }
// Output: Grade: A+
// let text = "  Hello JavaScript, Welcome to Cloud Engineering!  ";
// console.log(text);

// let text = "   Hello World!   ";

// let cleanText = text.trim();

// console.log(cleanText); 
// Output: "Hello World!"
// let text = "Cloud Engineering";

// console.log(text.toUpperCase()); 
// Output: "CLOUD ENGINEERING"

// console.log(text.toLowerCase()); 
// Output: "cloud engineering"
// let statement = "AWS is a cloud platform";

// console.log(statement.includes("cloud")); // Output: true
// console.log(statement.includes("Azure")); // Output: false


// CLASS (Blueprint)
// class Car {
  // Properties (Data)
//   brand = "";
//   color = "";

  // Function (Method)
//   drive() {
//     console.log(this.brand + " chal rahi hai!");
//   }
// }

// let heros =["captain america", "toodler of kingdom","einstein","ironman"];
// console.log(heros);

// heros.push("spiderman");
// console.log(heros);
// console.log (heros.length); 
// heros.pop("captain america");
// console.log(heros);
// console.log(heros[1]);
// heros.unshift("kingdom");
// console.log(heros);



let myString = "Hello, World!";
console.log(myString);

const user = { name: "Iqra", role: "Developer" };

// A) READ (Accessing Properties)
console.log(user.name);      // Dot Notation -> Output: "Iqra"
console.log(user.role); 
user.reading ="peer e kamil";

console.log(user.reading); 


// Bracket Notation -> Output: "peer e kamil"
user.reading ="kamil";
console.log(user.reading); 

delete user.reading;
console.log(user);


// B) WRITE / CREATE (Adding New Property)
// user.city = "D.I. Khan";
// console.log(user); // Output: { name: 'Iqra', role: 'Developer', city: 'D.I. Khan' }

// // C) UPDATE (Modifying Existing Property)
// user.role = "Cloud Engineer";
// console.log(user.role); // Output: "Cloud Engineer"

// // D) DELETE (Removing Property)
// delete user.city;
// console.log(user); // Output: { name: 'Iqra', role: 'Cloud Engineer' }

// 1. Definition / Declaration (Parameters ke sath)
function greetUser(userName) { // 'userName' Parameter hai
  return `Hello, ${userName}!`; // Return Value
}

// 2. Invocation / Call (Arguments ke sath)
let message = greetUser("Iqra"); // "Iqra" Argument hai
console.log(message); // Output: Hello, Iqra!


function dance(){
    console.log("Dancing!");

}

dance(); 

function rockstar(name, classes, age){
    return `hi kasi ho tum ${name},${classes},${age}`;

}
  let meoww = rockstar("afreen", 12, 22);
  console.log(meoww); // Output: hi kasi ho tum   afreen,12,22


  let breakfast=() => {
    console.log("Breakfast is ready!");
  }
  breakfast();
 
   // Syntax: element.addEventListener(event_name, callback_function, useCapture)

const btn = document.querySelector("#myBtn");

function handleFirstClick() {
  console.log("Pehla handler chala!");
}

function handleSecondClick() {
  console.log("Doosra handler bhi chala!");
}

// Ek hi button par multiple listeners lagaye ja sakte hain:
btn.addEventListener("click", handleFirstClick);
btn.addEventListener("click", handleSecondClick);



// Listener hatane ke liye function ka named hona zaroori hai (Anonymous function remove nahi hota)
btn.removeEventListener("click", handleFirstClick);