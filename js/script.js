//Data Types
//Number
//String
//Arrays
//Objects

var colors = ['red', 'blue', 'green'];
var food = new Array('pizza', 'sushi', 'ramen');

colors[3] = 'orange';
colors[4] = 'purple';

colors.push('pink');

var numbers = [1, 2, 33, 780];
var mixed = [25, 15502, 450, 'Seven', 1];
//alert(mixed[1] + (mixed[4]);
//alert(mixed.sort());
//alert(mixed.reverse());

// ------Loops

//For Loop
/* for(var i = 0; i <= 10; i++) {
   console.log(i);
 }

  for (var i = 0; i <=20; i++)
  console.log('I have the number '+ i)
};*/

 //While Loop
/*var i = 0; //define outside the loop
while (i < 10) {
  console.log(i);
  i++;
}*/

//For each loop
/*numbers.forEach(function(number) {
  console.log(number);
}); */

//For Loops / While Loops using Arrays
/* for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
} */

// ------Conditionals

//== - equal to
//=== - equal data Type
//!= - not equal
//&& - AND
// || - OR

/* var sample1 = 27;
var sample2 = 19;
if(sample1 == sample2) {
  console.log('This is true');
} else {
  console.log('This is false');
} */

// ------Switch Statements

/* var fruit = 'apple';

switch(fruit) {
  case "banana":
    alert('I hate bananas');
    break;
  case "apple":
    alert('I love apples');
    break;
  case "orange":
    alert('Oranges are okay');
    break;
  default:
    alert('I love watermelon too');
    break;
} */

// ------Objects
// Object Literal

/*var person = {
  firstName: 'Stef',
  lastName: 'Chua',
  age: 21,
  siblings: ['Sam', 'Alex'],
  address: { //new object within object
    street: '5 Tonks street',
    city: 'Auckland',
    country: 'NZ'
  }, //can also add functions
  fullName: function (){
    return this.firstName +" "+this.lastName;
  }
}

console.log(person.fullName()); */

// Object Constructor

/* var apple = new Object();
apple.color = "red";
apple.shape = "round";

apple.describe = function() {
  return 'A ' + this.color + ' apple a day keeps the doctor away';
}
console.log(apple.describe()); */

// Constructor Pattern
/*function Fruit(name, color, shape) {
  this.name = name;
  this.color = color;
  this.shape = shape;

  this.describe = function(){
    return 'A ' +this.name+' is the color '+this.color+' and is the shape '+this.shape;
  }

}
var apple = new Fruit('apple', 'red', 'round');

console.log(apple.describe)); */

// Array of Objects
/*var users = [
  {
    name: 'Stef Chua',
    age: 21
  },
  {
    name: 'Sam Chua',
    age: 09
  },
  {
    name: 'Sofia Chua',
    age: 12
  }
];

console.log(users[0].name); */

// ------Events
/*function changeText(){
  var heading = document.getElementById('heading');
  heading.innerHTML = 'You clicked!';
}*/

function showDate() {
  var time = document.getElementById('time');
  time.innerHTML = Date();
}

function clearDate() {
  var time = document.getElementById('time');
  time.innerHTML = ''();
}

function changeBackground(x) {
  console.log(x.value);
  var heading = document.getElementById('heading');
  heading.style.color = x.value;
}

function validateForm() {
  var firstName = document.forms["testForm"]["firstName"].value;

  if(firstName == null || firstName == ""){
    alert("first name is required");
    return false;
  }

  if(firstName.length < 2){
    alert("First name must be filled");
    return false;
  }
}
