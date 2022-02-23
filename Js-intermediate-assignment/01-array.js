//no.01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(array){
    let new_array = [];
    for (let i = 0; i< array.length; i++){
        new_array[i] = array[array.length -i - 1];
    } 
    return new_array;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//no.02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  const total = arr.reduce((a, c) => a + c);
  return total / arr.length;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

//no.03
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(arr, num) {
  const newArr = arr.flat(1)
  if(arr = newArr){
  return newArr.indexOf(num)
  }else{
   return null 
  }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));