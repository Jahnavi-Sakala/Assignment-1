/* Variable Declaration
const Name = "Jahnavi";
console.log(Name);
let surName = "Sakala";
console.log(lastName);
var age = 21;
console.log(age);
*/



/*Variable Scope:
var global = "This is global variable";
function outerFun() {
    let local = "This is local variable in outer Function";
    
    function innerFun() {
        console.log(local); 
        console.log(global); 
    }
    innerFun();
}
outerFunction();
*/



/*
// var let const scope
if (true) {
    var testVar = "This is var"; 
    let testLet = "This is let"; 
    const testConst = "This is const"; 
}
console.log(testVar); // Accessible, var and const are not accessible
*/


/*Arithmetic Operators
let a = 21;
let b = 3;
console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b); 
console.log(a % b); 
console.log((a + b) * (a - b)); // Using parentheses

//Comparison Operators
console.log(a == b);  
console.log(a === b); 
console.log(a != b); 
console.log(a !== b); 
console.log(a > b);   
console.log(a < b);   
console.log(a <= b);  

//Logical Operators
console.log((a!=b)&& (a>b));  // false
console.log((a==b)||(a<b));  // true
console.log(!(a==b)); 
*/


/*Data Types
//Primitive Data Types
let number_var = 42;
let string_var = "Hello World";
let bool_var = true;
let null_var = null;
let undefined_var;
console.log(typeof numberVar);      
console.log(typeof stringVar);
console.log(typeof boolVar);        
console.log(typeof nullVar);        
console.log(typeof undefinedVar);   

//Object Data Type
let employee = {
    firstName: "Jahnavi",
    lastName: "Sakala",
    age: 20,
    office: function() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
};
console.log(employee.firstName); 
person.age = 21; 
console.log(employee.age); 
console.log(employee.office()); 
*/

/*Type Conversion and Coercion
//Explicit Type Conversion
let num = "20";
console.log(Number(num)); // Convert to number
let bool = false;
console.log(String(bool)); // Convert to string
let str = "0";
console.log(Boolean(str)); // Convert to boolean

//Implicit Type Coercion
console.log("4" + 5); 
console.log("5" - 3); 
console.log("5" == 5); 
console.log("5" === 5); 
*/




