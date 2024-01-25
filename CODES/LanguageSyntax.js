// alert("This is an alert message!");

// let namex = 'henry'
// alert(namex);

// let userInput = prompt("Please enter your name:", "John Doe");
// console.log("User input:", userInput);
// alert('Your name is '+userInput); 

// let userConfirmed = confirm("Are you sure you want delete this?");
// console.log("User confirmed:", userConfirmed); 


// let y =5
let z =5
function example() {
    let y = 3;

    if (true) {
        var x = 10+y;
    }
    console.log(x); // 10
  }
  example() 
 y = 'here'
console.log(y); // undefined
 y = 5;
console.log(y); // undefined

function add() {
    z = z+1
    console.log(z); 
  }

function sub() {
    z = z-1
    console.log(z); // 10
  }
  add() 
  add() 
  sub()
  add() 
  add() 
  sub()
  add() 
  sub()
  sub()


  function outerFunction() {
    let outerVariable = 'I am outer';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
  
    innerFunction();
  }
  
  outerFunction();
  

  function outer() {
    var outerVariable = 'I am outer function';
  
    function inner() {
      console.log(outerVariable); // Dynamic scope would look for outerVariable in the calling scope (dynamic scoping is not used in JavaScript)
    }
  
    inner();
  }
  
  function anotherFunction() {
    var outerVariable = 'I am another function';
  
    outer(); // Calls outer function, which contains inner function
  }
  
  anotherFunction();
  


  let mySymbol = Symbol("uniqueSymbol");
  console.log(mySymbol);
  console.log(typeof mySymbol);     

  let pattern = /[a-zA-Z0-9]+/;
  console.log(pattern);
  console.log(typeof pattern); 


  let myObject = {
    key1: "value1",
    key2: 42,
    key3: true
  };
  console.log(myObject);
  console.log(typeof myObject); 
