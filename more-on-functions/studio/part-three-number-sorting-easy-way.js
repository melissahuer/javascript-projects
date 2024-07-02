//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

//Sort each array in ascending order.
function sortArrayAscending(numbersArray){
    let sortedArray = [];
    let minValue = findMinValue(numbersArray);
    let arrayLength = numbersArray.length;
    for (let i=0; i< arrayLength; i++){
      sortedArray.push(numbersArray[numbersArray.indexOf(minValue)]);
      numbersArray.splice(numbersArray.indexOf(minValue), 1);
      minValue = findMinValue(numbersArray);
    }
    return sortedArray;
  }
//Sort each array in descending order.
function sortArrayDescending(numbersArray){
    let sortedArray = [];
    let minValue = findMinValue(numbersArray);
    let arrayLength = numbersArray.length;
    for (let i=0; i< arrayLength; i++){
      sortedArray.unshift(numbersArray[numbersArray.indexOf(minValue)]);
      numbersArray.splice(numbersArray.indexOf(minValue), 1);
      minValue = findMinValue(numbersArray);
    }
    return sortedArray;
  }

console.log(sortArrayAscending(nums1));
console.log(sortArrayDescending(nums2));