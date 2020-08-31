const array = [36, 13, 9, 33, 45, 12, 0, 4, 44, 0, 8, 9, 9000, 12, 27, 53, 46, 1];
let arr = [...array];

const { insertionSort } = require('./build/insertionSort');

console.log(insertionSort(array));