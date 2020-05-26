function rps(){

  function determineCom(num){
      if(num <= 0.33){ //these numbers are chosen because math.random() returns up to 0.99 test for git
        return "rock";
      }else if(num <= 0.66){
        return "paper";
      }else{
        return "scissors";
      }
    }
    
    var userChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    var comChoice = determineCom(Math.random());
    
    var answers = ["rock", "paper", "scissors"]; //this is in case the user typo or is a fker
    
    if (!userChoice || answers.indexOf(userChoice) === -1){
      alert('Submit a valid input');
    }else if (userChoice === comChoice){
      alert('TIE! The bot chose ' + comChoice + ', as well');
    }else if (userChoice === "rock" && comChoice === "scissors"){
      alert('You won! The bot chose ' + comChoice);
    }else if (userChoice === "scissors" && comChoice === "paper"){
      alert('You won! The bot chose ' + comChoice);
    }else if (userChoice === "paper" && comChoice === "rock"){
      alert('You won! The bot chose ' + comChoice);
    }else{
      alert('You lost! The bot chose ' +comChoice);
    }
    
  }
  
  rps()//
    