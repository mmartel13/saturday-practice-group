
// write a loop that creates a new array with the square of each number

// const numbers = [2, 4, 9, 12];
// let newArray = [];

// for (let i = 0; i < 4; i++) {
//     result = numbers[i] ** 2;
//     newArray.push(result)
// }

// console.log(newArray)

//now write it as a function 

// const numbers = [2, 4, 9, 12];
// let newArray = [];

// function squareNumbers(arr) {
//     for(let i = 0; i < arr.length; i++) {
//     const result = arr[i] ** 2;
//     newArray.push(result)
// }
//     return newArray
// } 
// console.log(squareNumbers(numbers))


//given two arrays of integers add up each element in the same position and create a new array containing the sum of each pair assume both arrays are the same length

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// newArray = [];

// function addArrays (arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++) {
//     const result = (arr1[i] + arr2[i])
//     newArray.push(result)
// }
//     return newArray
// }
// console.log(addArrays(arr_3, arr_4))

//the best way to do it is below to make it more dynamic with the new array within the function

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];

// function addArrays (arr1, arr2){
//     let arrayOfSums = []
//     for (let i= 0; i <arr1.length; i++) {
//         const sum = arr1[i] + arr2[i]
//         arrayOfSums.push(sum)
//     }
//     return arrayOfSums
// }
// 
//console.log(addArrays(arr_3,arr_4))

//add all the numbers in the array

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; //276

function sumOfNumbers (array1) {
    let sum = 0
    for (let i = 0; i < array1.length; i++) {
    sum = sum + array1[i]
    }
    return sum
}

console.log(sumOfNumbers(arr_1))