let score = "2"
let scoreType = typeof score

// NaN returns type of number and JS is loosely checked language. So typescript is necessary
if (scoreType == "string"){
    score = Number(score)
    // console.log(typeof(score))
    // console.log(score)
}


/*
    when string is converted to number, it returns NaN
    when true or false is converted to number, it returns 1 and 0 respectively
    when undefined is converted, it returns NaN
    when null is converted, it returns 0

    Boolean
    1 returns true, 0 returns false
    "" empty string returns false
    "hello" returns true
*/

// **************************************Operations**************************************************
console.log("1" + 2)
console.log(1+"2");
console.log("1" + 2 + 2); // If string is at first, everything after it are converted to strings and concatenated
console.log(1 + 2 + "2"); // If first are numbers, then operations are done and after that they are converted to string and concatenation happens
console.log(1+true) // true is converted to number and its value is 1
console.log(+true)
console.log(+"") //0

//Prefix and postfix operators

//This is example of postfix. Here, the original value is first assigned to b and after that, a is incremented
let a = 1
let b = a++
console.log(`a:${a} b:${b}`)

//This is example of prefix. Here, first the original value is incremented and then assigned to y so both x and y have same value i.e. 2
let x = 1
let y = ++x
console.log(`x:${x} y:${y}`)





