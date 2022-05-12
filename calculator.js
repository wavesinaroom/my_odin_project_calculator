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
  let numberRegex = new RegExp(/\d/);
  let nonNegativeSignRegex = new RegExp(/\+|\*|\//);
  let allSignsRegex = new RegExp(/\+|\*|\/|\-/)

  if(allSignsRegex.test(calculationInput[calculationInput.length-1])||nonNegativeSignRegex.test(calculationInput[0]))
  {
    throw new TypeError("Wrong input");
  }

  for(let i = 0; i<calculationInput.length; i++)
  {
    //Checks characters match digits or math signs
    if(!allSignsRegex.test(calculationInput[i])&&!numberRegex.test(calculationInput[i]))
    {
      throw new TypeError("Wrong input");
    }

    //Checks if there are to no negative consecutive signs
    if(nonNegativeSignRegex.test(calculationInput[i])&&nonNegativeSignRegex.test(calculationInput[i+1])&&calculationInput[i]===calculationInput[i+1])
    {
      throw new TypeError("Wrong input");
    }

    //measures number length
    if(numberRegex.test(calculationInput[i]))
    {
      numberLength++;
    }
  }
  if(calculationInput[0]==="-")
  {
    numbers.push(parseFloat(calculationInput.substring(1,calculationInput[numberLength]))*-1);
  }else
  {
    numbers.push(parseFloat(calculationInput.substring(0,calculationInput[numberLength])));
  }
  //console.log(numbers);
  //console.log(signs);

  //Computes
  let result = numbers[0];
  console.log(result);

  /*
  //Computes pairs of terms
  for(let j = 1; j<numbers.length; j++){
    result= operate(result, numbers[j], symbols[j-1]);
  }

  */
  //Rounds to 5 decimnal places
  if((result%10)!==0)
  {
      result= +result.toFixed(5);
  }

  return result;
}


//Tests
module.exports =
{
  compute
};
