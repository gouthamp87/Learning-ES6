// let salaries = Array(9000);
// let salry = Array.of(20000);
// console.log(salryr.length);
// console.log(salry[0]);


// Using From method in Arrays

// let amounts = [800, 900, 950];
// // let sal = Array.from(amounts, (v) => v+50); // one way
// let sal = Array.from(amounts, function(v)  {    // Second way
//     return v+ this.adjustment
// }, {adjustment: 50}); // The third parameter to the from method becomes the object that would be translated to this with in the function

// console.log(sal);

// Using fill in Arrays

let amounts = [800, 900, 950];
console.log("Before fill amounts are:" + amounts);
// amounts.fill(900);  // Output would be 900, 900, 900;
//amounts.fill(900,1);   // Output would be 800, 900, 900;
// amounts.fill(900,1,2);  // Output would be 800, 900, 950;
// amounts.fill(900,-1);   // Output would be 800, 900, 900;
// console.log("After fill amounts are:" + amounts);


// Using find in Arrays
// let res = amounts.find( v => v>=900); 
// console.log(res); // O/p just the first element satisfying the condition, not all the elements.

// FindIndex in Arrays

let res = amounts.findIndex(function(val, ind, resArr){
    return val >= this;
}, 900);

console.log(res);

// Copywithin is kidn of tricky and better avoided.

// spread operator is useful



