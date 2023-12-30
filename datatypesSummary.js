//Data are categorized into two types based on how they are stored in memory and how they are accesed.

//The first type is Primitive data types (call by value). It includes:
//String, Symbol, Number, BigInt, null, undefined, Boolean
//Call by value means when they are copied, their original value are copied not referance. So, any changes made doesnot affect
//the original data.

//Usage of Symbol. mostyly used in React and front-end libraries
// const id = Symbol('123')
// const newId = Symbol('123')
// console.log(id === newId) //false


// Non-primitive Types or Referance Types
// It includes arrays, objects, functions.

//Here a is an array and its copied to variable b. If you add 4 in b array, the original array will also be affected because
//while copying, the referance of the original array in the memory is copied.
let a = [1,2,3]
let b = a
b.push(4)
console.log(a,b)

let myFunction = function(){
    console.log('Hello world');
}

console.log(typeof myFunction);


// JavaScript is dynamically typed language. We dont define type when declaring a variable. Same variable of type number can be 
// boolean in another line. Strictly typed languages such as Java, C requires the specification of variable data type and type checking
// is done at the compile time. They provide better type safety than JS.

// Compile time is the period during which the source code is translated into machine code by a compiler whereas Run-time is the
// period during which the compiled program is run or executed by the computer.

//Return types of variables in JavaScript
// Number => number
// Symbol => symbol
// Undefined => undefined
// Null => object
// String => string
// Boolean => boolean
// BigInt => bigint
// Array => object
// Function => object function
// Object => object

// In languages such as C, its your job to reserve memory and free up them. JavaScript has automatic garbage collection. Programmers
//do not have direct control on memory allocation and deallocation.

//Two types of memory : Stack(used in primitive types) and Heap(used in non-primitive types)
