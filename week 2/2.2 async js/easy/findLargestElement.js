/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    if(arr.length===0){
        return null;
    }
    let high=arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i]<arr[i+1];
        high=arr[i+1];
    }
    return high;
}

numbers=[3,4,5,6];
console.log(findLargestElement(numbers));