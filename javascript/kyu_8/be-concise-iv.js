// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique.


// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }

// -- ATTEMPTS --    
// #1
// const find = (array, element) => {
//   array.forEach((el, index) => {
//     if(element === el) { console.log( index ); } 
//     console.log( 'Not Found' );
//   });
// }

// #2
// a lot of bad attempts here.  kept trying to find a way to use findIndex() before realizing I needed indexOf()

// had to find solution
const find = (array, e) => {
  array.includes(e) ? array.indexOf(e) : 'Not Found';
};

var array = [2,3,5,7,11];

find(array, 2);
find(array, 3);
find(array, 5);
find(array, 6);
find(array, 11);
find(array, 'Frank');
find(array, 4);

array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
find(array, true);
find(array, 'Hello World');
find(array, false);
find(array, 'Lorem Ipsum');
find(array, 6);
find(array, Math.PI);

// -----------
// -- NOTES --
// -----------
// forEach() by default returns 'undefined'