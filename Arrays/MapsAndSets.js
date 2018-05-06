let employee1 = { name: 'Goutham'};
let employee2 = { name: 'Kanigiri'};

// var employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set("234", employee2);

// console.log(employees.get(employee1));
// console.log(employees.get("234"));

// employees.delete(employee1); // deletes an element from Map.
// employees.clear(); // deletes all elements from Map.


// Using arrays to Map

let arrEmp = [
    [employee1, 'ABC'],
    ["234", employee2],
];
// Creating a map from Arrays
let employees = new Map(arrEmp);
// console.log(employees);

// Creating a array from Map, use the spread operator.

// let list = [...employees.entries()];
// console.log(list[0][1]);


// Creating a weak map. Objects get cleared up on Garbage collection.
// let employs = new WeakMap([
//     [employee1, 'ABC'],
//     [employee2, "234"]
// ]);
// console.log("Before clearing an object" + employs);

// employee1 = null;

// console.log("After clearing an object" + employs);
// Don't use them unless you're sure of the behaviour.


// Sets are collections of objects.

let test = new Set();
test.add("hello");
test.add(5);
test.add({temp: "ABC"});
test.add(employees);
// console.log(test);

// Sets always maintains each element only once.
// test.add("hello");
// console.log(test);  // The content of test would remain the same.

// console.log(...test.entries());
// console.log(...test.values());
// console.log(...test.keys());

test = new Set([
    "car",
    "bus",
    "Cycle"
]);

console.log(...test.entries());
// console.log(...test.values());
// console.log(...test.keys());





