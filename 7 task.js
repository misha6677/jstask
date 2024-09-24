const arr = [0, 1, 2, 3, null, 4, 5, "a", undefined, 6, 0]; 

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

arr.forEach((item) => {
  if (typeof item === 'number' && !isNaN(item)) { 
    if (item === 0) {
      zeroCount++;
    } else if (item % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
});

console.log(`Even numbers: ${evenCount}`);
console.log(`numbers: ${oddCount}`);
console.log(`Zeros: ${zeroCount}`);