function palindrome(str){
    var spacelessStr = str.replace(/\s/g, '');
    var newString="";
    for(var i = spacelessStr.length - 1; i >= 0; i--){
      newString += spacelessStr[i];
    } 
    if (newString.toLowerCase() === spacelessStr.toLowerCase()){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome("a man a plan a canal Panama"));

  function palinedromev2(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  } //shortest palindrome function and don't forget the single quotation marks

