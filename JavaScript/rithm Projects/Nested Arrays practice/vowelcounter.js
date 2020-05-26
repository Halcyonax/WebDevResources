function countVowel(char, count){ //test if a char is a vowel and count
    var vowels = "aeiou";
    if(vowels.includes(char.toLowerCase())){
      ++count;
    }
    return count
  }
  
function countVowelsInStr(str, count){ //test to see a string has how many vowels
    for(var i = 0; i < str.length; i++){
      count = countVowel(str[i], count);
    }
    return count;
}  
  
  
function countVowelsArr(arr){ //test to see an array has how many vowels in its strings 
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(var j = 0; j < arr[i].length; j++){
        if(Array.isArray(arr[i][j])){
          for(var k = 0; k < arr[i][j].length; k++){
            if(Array.isArray(arr[i][j][k])){
              for(var l = 0; l < arr[i][j][k].length; l++){
                count = countVowelsInStr(arr[i][j][k][l], count);
              } 
            } else {
              count = countVowelsInStr(arr[i][j][k], count);
            }
           } 
          } else {
          count = countVowelsInStr(arr[i][j], count);
        }
       }
    } else {
      count = countVowelsInStr(arr[i], count);
      }
    
   }            
   return count; 
}
  
  var nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whisky", ["Janey"], "Tom"]],
    "Lorien"
  ];

//ALT SOLUTION FOR THE FINAL FUNCTION (and it's shorter!)
function countVowels(arr){
  var str = arr.toString();
  var count = 0;
  count = countVowelsInStr(str, count);
  return count;
  }  

  

  