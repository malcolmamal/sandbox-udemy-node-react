const arr = [1,2];
console.log(arr.length);
console.log(arr);
arr[10] = 1;
console.log(arr.length);
console.log(arr);
arr['foo'] = 1;
console.log(arr.length);
console.log(arr);

const arr2 = [1,2] + [3,4];
console.log(typeof arr2)
console.log(arr2)

const arr3 = [1, 2];
const arr4 = [3, 4];
console.log(arr3 + arr4);