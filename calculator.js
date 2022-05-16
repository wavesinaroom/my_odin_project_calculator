const setUpUI = function(){

  let calculation='';

  //Non arithmetic buttons
  let outputButtons = Array.from(document.getElementsByClassName("UI"));

  const clearButtonPos = 0;
  const resultButtonPos = 1;
  const backspaceButtonPos = 2;

  //screenDisplay
  let screenDisplay = document.getElementById("screen");

  //Input buttons
  let inputButtons = Array.from(document.getElementsByClassName("input-key"));

  //Events
  outputButtons[clearButtonPos].addEventListener("click", ()=>{
    calculation = '';
    screenDisplay.innerText = calculation;
  });

  outputButtons[resultButtonPos].addEventListener("click", ()=>{
    calculation = compute(calculation);
    screenDisplay.innerText = calculation;

    //Optional - lets user modify the expression
    //screenDisplay.innerText = compute(calculation);
  });

  outputButtons[backspaceButtonPos].addEventListener("click", ()=>{
    calculation = calculation.substring(0, calculation.length-1);
    screenDisplay.innerText = calculation;
  });

  inputButtons.forEach(button => button.addEventListener("click",function(e){
    calculation+=(e.target.innerText);
    screenDisplay.innerText = calculation;
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
    throw new TypeError("Wrong input");
  }
  return result;
};

const parseString= function(calculationInput, numbers, signs)
{
  //Parses input string
  let numberLength = 0;
  let numberRegex = new RegExp(/\d/);
  let nonNegativeSignRegex = new RegExp(/\+|\*|\//);
    let allSignsRegex = new RegExp(/\+|\*|\/|\-/)

    if(allSignsRegex.test(calculationInput[calculationInput.length-1])||nonNegativeSignRegex.test(calculationInput[0]))
    {
      throw new TypeError("Wrong input");
    }

    for(let i = calculationInput.length-1; i>=0; i--)
    {
      //Checks characters match digits or math signs
      if(!allSignsRegex.test(calculationInput[i])&&!numberRegex.test(calculationInput[i])&&calculationInput[i]!==".")
      {
        throw new TypeError("Wrong input");
      }

      //Checks if there are two no negative consecutive signs
      if(nonNegativeSignRegex.test(calculationInput[i])&&nonNegativeSignRegex.test(calculationInput[i-1])&&calculationInput[i]===calculationInput[i-1])
      {
        throw new TypeError("Wrong input");
      }

      //measures number length
      if(numberRegex.test(calculationInput[i])||calculationInput[i]===".")
      {
        numberLength++;
        if(i===0)
        {
          numbers.push(parseFloat(calculationInput.substring((i),(i+numberLength))));
        }else if(i===1&&calculationInput[0]==="-")
        {
          numbers.push(parseFloat(calculationInput.substring((i),(i+numberLength)))*-1);
        }
      }
      else
      {
        //Parses math sign
        if(nonNegativeSignRegex.test(calculationInput[i]))
        {
          signs.push(calculationInput[i]);
          if(numberLength!=0)
          {
            numbers.push(parseFloat(calculationInput.substring((i+1),(i+1+numberLength))));
            numberLength = 0;
          }
        }
        //Parses negative number after non minus math sign
        if(calculationInput[i]==="-"&&nonNegativeSignRegex.test(calculationInput[i-1]))
        {
          numbers.push(parseFloat(calculationInput.substring((i+1),(i+1+numberLength))*-1));
          numberLength = 0;
        }//Parses second minus sign in row as sign
        else if(calculationInput[i]==="-"&&calculationInput[i+1]==="-")
        {
          signs.push(calculationInput[i]);
          numbers.push(parseFloat(calculationInput.substring((i+2),(i+2+numberLength))*-1));
          numberLength = 0;
        }//Parses single minus sign as sign
        else if(calculationInput[i]==="-"&&numberRegex.test(calculationInput[i-1]))
        {
          signs.push(calculationInput[i]);
          if(numberLength!=0)
          {
            numbers.push(parseFloat(calculationInput.substring((i+1),(i+1+numberLength))));
            numberLength = 0;
          }
        }
      }
    }
}

const compute = function(calculationInput){

  let numbers=[];
  let signs=[];

  parseString(calculationInput, numbers, signs)
  //COMPUTES
  numbers.reverse();
  signs.reverse();
  let result = numbers[0];

  for(let j = 1; j<numbers.length; j++){
    result = operate(result, numbers[j], signs[j-1]);
  }

  //Rounds to 5 decimnal places
  if((result%10)!==0)
  {
      result= +result.toFixed(5);
  }
  return result;
}

setUpUI();

//Tests
/*
module.exports =
{
  compute
};
*/
