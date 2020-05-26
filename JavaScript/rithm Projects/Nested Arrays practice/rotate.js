/*Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]*/

function rotate(arr, num){
    var amount = num % arr.length;
    for(var i = 0; i < amount; i++){
        arr.unshift(arr.pop());
    } 
    return arr;
}

var arr = [1, 2, 3]

console.log(rotate(arr, 2))