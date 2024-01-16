//`` back ticks enables string interpolation. We can inject variable inside the string.

const myName = new String("Devendra")

// console.log(myName);
// console.log(Object.getPrototypeOf(myName)) //returns an object of prototypes (methods)

//String methods or functions
// console.log(myName.length);
// console.log(myName.toUpperCase());
console.log(myName.charAt(1)); //what character is there in index 1
console.log(myName.indexOf('e')); //what index e is located in
console.log(myName.substring(0,4)) //starts from index 1 and the last value is not inclued. So, upto index 3

//slice can take negative values
console.log(myName.slice(-8,1))

//trim method removes whitespaces and line terminators before and after the string. trimEnd and trimStart is also there
console.log("   hitesh   ".trim());

//replace method
const url = "http://devendra.com/devendra%20gurung"
console.log(url.replace("%20","-"))

//includes
console.log(url.includes("devendra"));

//split
const randomSrting = "hello-my-name-is-dev"
const splitString = randomSrting.split('-')
console.log(splitString)