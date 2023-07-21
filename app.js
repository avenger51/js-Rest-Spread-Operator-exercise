///Refactor it to use the rest operator & an arrow function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
//arguments is referring to the input actual values inside the function.  Parameters are variable used in a function.
function filterOutOdds(...arguments) {
  //var nums = Array.prototype.slice.call(arguments);
  return arguments.filter((num) => {
    return num % 2 === 0;
  });
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//**findMin**
//
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.
//EXAMPLES:
////findMin(1,4,12,-3) // -3
//findMin(1,-1) // -1
//findMin(3,1) // 1

function findMin(...arguments) {
  return arguments.reduce((accumulator, val) => {
    //if val < accumulator do something
    //returns what is put into ( ) :  console.log(arguments)
    return val < accumulator ? val : accumulator;  //hot dam this works
    
  });
}
//with spread?
function filter(...arguments) {
  return Math.min(...arguments);
}
// from solution....
const something = (...arguments) => Math.min(...arguments)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

////**mergeObjects**
//
//Write a function called ***mergeObjects*** that accepts two objects and returns a new object 
//which contains all the keys and values of the first object and second object.
//EXAMPLES:
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const object =  [{a:1, b:2}, {c:3, d:4}];  //SIGH

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


//STOP MAKING IT MORE DIFFICULT...
//function mergeObject(...arguments){
//  return arguments.map((val) => {
//  console.log(val);
//  });
//}
//const mergedObj = (...arguments) 
//
//function mergeObject(...arguments){
//  return arguments.forEach((val) => {
//  console.log(val);
//  });
//}
//  
//  const value = arguments.filter((key) => {
//   console.log(...key);
//  });
//}
//
//



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//**doubleAndReturnArgs**
//
//Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.
//EXAMPLES:
//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]
//100% WITH HELP...not sure on the doubleArray const?
function doubleAndReturnArgs(arr, ...args) {
  const doubledArray = arr.map((value) => value * 2);
  const doubledArgs = args.map((value) => value * 2);
  return [...doubledArray, ...doubledArgs];
}
//
//function doubleAndReturnArgs(...arguments) {
//  return arguments.filter((curr) => {
//    return curr * 2;
//  });
//  }
//  function doubleAndReturnArgs(...arguments) {
//    const doubledArray = arguments.map(curr => curr * 2);
//    return [...doubledArray];
//  }
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// **Slice and Dice!**

//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
///Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
//who knew you could just jam the entire thing into it's own array...I didn't.
const doubleAndReturnArgs = (arr, ...args) => 
[...arr, ...args.map(v => v *2)]

/** Return a new array with every item in array1 and array2. */
//was very close on this one
//extend([1,2,3], [4, 5, 6])
//function extend(array1, array2) {

const extend = (array1, array2) => {
  return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const objectChanger =  {name:'jeff', type:'guy'};

function addKeyVal(obj, key, val) {
 const blah = {...obj};
 blah[key] = val;
 return blah;
}

 //return [...obj].key = val;

/** Return a new object with a key removed. */
//NO IDEA
function removeKey(obj, key) {
const removed = {...obj};
removed[key] 
}


/** Combine two objects and return a new object. */
//shocker..no help on this one
function combine(obj1, obj2) {
let newObject = {...obj1, ...obj2};
return newObject;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  
  const newObject = {...obj};
  newObject[key] = val;
  return newObject;
}


//REST/SPREAD NOTES & CODE BELOW:

////from course material https://lessons.springboard.com/Rest-Spread-Operator-ce38fb9134904e0f9610d45863d7dbaf
//
//function displayArguments(){
//    console.log("The first argument is", arguments[0])
//    return `You passed in ${arguments.length} arguments!`
//  }
//  
//  displayArguments(1,2)  // "The first argument is 1"
//  displayArguments()  // "The first argument is undefined"
//
//  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//  function doubleArgs(){
//    return arguments.map(function(arg){
//      return arg * 2
//    })
//  }
//  
//  doubleArgs(1,2)  // Uncaught TypeError: arguments.map is not a function
//
//  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//  function doubleArgs(){
//    return arguments.map(function(arg){
//      return arg * 2
//    })
//  }
//  
//  doubleArgs(1,2)  // Uncaught TypeError: arguments.map is not a function
//
//  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  function doubleArgs(){
//    return arguments.map(function(arg){
//      return arg * 2
//    })
//  }
//  
//  doubleArgs(1,2)  // Uncaught TypeError: arguments.map is not a function
//
//  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//  function doubleArgs(){
//    return arguments.map(function(arg){
//      return arg * 2
//    })
//  }
//  
//  doubleArgs(1,2)  // Uncaught TypeError: arguments.map is not a function
//
//  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//  let odds2 = [1,3,5]
//  let evens2 = [2,4,6]
//  
//  let collection2 = [odds, evens]
//  
//  let copy = [...collection2]
//  
//  console.log(collection2[0][0]) // 1
//  
//  copy[0][0] = "REPLACED!"
//  
//  console.log(collection2[0][0]) // "REPLACED"
//
//  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let odds1 = [1,3,5]
//let evens1 = [2,4,6]
//
//let collection1 = [odds, evens]
//
//let copy = [...collection]
//
//console.log(collection[0][0]) // 1
//
//copy[0][0] = "REPLACED!"
//
//console.log(collection1[0][0]) // "REPLACED"
//
////++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let odds = [1,3,5]
//let evens = [2,4,6]
//
//let collection = [odds, evens]
//
//let copy = [...collection]
//
//console.log(collection[0][0]) // 1
//
//copy[0][0] = "REPLACED!"
//
//console.log(collection[0][0]) // "REPLACED"
//
//
////notes
//
//function sum() {
//  arguments.reduce((sum, val) => {
//    return sum + val;
//});
//}
//
////example 
//const max = function() {
//  const args = Array.from(arguments);
//  args.reduce((max, currVal) => {
//    return currVal > max ? currVal : max;
////the ? is 'if that's the case' return currVal OTHERWISE return max
//  });
//}
//
////rest
//function makeFamily(parent1, parent2, ...kids) {
//  console.log(parent1, parent2);
//  console.log(kids);
//}
////here, kids is passed to an empty [] 
//function makeFamily(parent1, parent2, ...kids) {
//   return {
//    parents: [parent1, parent2],
//    children: kids.length ? kids : 0
//   };
//   }
////result:
////makeFamily('jeff', 'megan', 'jimmy')
////
////children
////['jimmy']
////parents
////(2) ['jeff', 'megan']
//
//Example:
//
//const filterByType = (type, ...vals) => {
//  return vals.filter(v => typeof v ===type) ;
//}
////CHECKS THE VALS AGAINST THE TYPE AND RETURN IF SAME TYPE
//
//const shoppingCart = [
//  {
//    name: 'honey',
//    quant: 2,
//    price: 13.00
//  },
//  {
//    name: 'orange',
//    quant: 3,
//    price: 14.00
//  }
//];