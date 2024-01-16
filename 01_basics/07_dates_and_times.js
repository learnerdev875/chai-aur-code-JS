// In future, Temporal API will be available

let myDate = new Date()
console.log(myDate.toDateString()); // Tue Jan 16 2024
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024,0,31)
let myCreatedDate = new Date("2024-01-14") //yyyy-mm-dd mm-dd-yyyy(in india)
console.log(myCreatedDate.toDateString());

// ***************************************TIME************************************************************
let myTime = Date.now() //returns integer in miliseconds
console.log(myTime);
//getTime()
//getDay()
//getMonth()
//getFullYear()

//customize toLocaleString()
console.log(myCreatedDate.toLocaleString("default",{
    weekday:"long",
    month:"long"
}));
