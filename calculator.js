const setUpUI = function(){

  const clearButtonPos = 0;
  let screenDisplay = document.getElementById("screen");

  let outputButtons = Array.from(document.getElementsByClassName("UI"));
  let inputButtons = Array.from(document.getElementsByClassName("input-key"));

  outputButtons[clearButtonPos].addEventListener("click", ()=>{
    screenDisplay.innerText = ' ';
  });

  inputButtons.forEach(button => button.addEventListener("click",function(e){
    calculation+=(e.target.innerText);
    }
  ));
}

const operate= function (a,b,operator)
{
  let result;
  switch(operator)
  {
    case "+":
    result=a+b;
    break;
    case "-":
    result=a-b;
    break;
    case "*":
    result=a*b;
    break;
    case "/":
    result=a/b;
    break;
    default:
    return "Wrong operator input";
  }
  return result;
};

const compute = function(calculationInput){

  let numbers=[];
  let signs=[];

  //Parses input string
  let numberLength = 0;
  let numberRegex = new RegExp(/\d|\-/);
  let signRegex = new RegExp(/\+|\*|\//);
  let allSignsRegex = new RegExp(/\+|\*|\/|\-/)

  if(allSignsRegex.test(calculationInput[calculationInput.length-1])||allSignsRegex.test(calculationInput[0]))
  {
    throw new TypeError("Wrong input");
  }

  for(let i = 0; i<calculationInput.length; i++)
  {
    //Checks characters match digits or math signs
    if(!signRegex.test(calculationInput[i])&&!numberRegex.test(calculationInput[i]))
    {
      throw new TypeError("Wrong input");
    }

    if(allSignsRegex.test(calculationInput[i])&&allSignsRegex.test(calculationInput[i+1]))
    {
      
    }
  }

  //console.log(numbers);
  //console.log(signs);

/*
  //Computes
  let result = numbers[0];

  //Computes pairs of terms
  for(let j = 1; j<numbers.length; j++){
    result= operate(result, numbers[j], symbols[j-1]);
  }

  //Rounds to 5 decimnal places
  if((result%10)!==0)
  {
      result= +result.toFixed(5);
  }

  return result;
*/
}

compute("30*-100+50");

//Tests
module.exports =
{
  compute
};
