/*Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

makeXOGrid(1,4) 

[["X","O","X","O"]]

makeXOGrid (3,2)

[["X","O"],["X","O"],["X","O"]]
*/

function makeXOGrid(rows, columns){
    var finalArray = [];
    var startWithX = true;
    for(var i = 0; i < rows; i++){
      var newArray=[];
      for(var j = 0; j < columns; j++){
        if(startWithX){
          newArray.push("X");
        } else {
          newArray.push("O");
        } startWithX = !startWithX;
      } finalArray.push(newArray)
    } 
    return finalArray
  }
  
  console.log(makeXOGrid(3,2))