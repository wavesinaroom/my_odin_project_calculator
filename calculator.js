let calculationInput='';
let numbers;
let symbols;

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

const compute = function(){

  //Finds where symbols are
  let symbolPos;
  for(let i = 0; i<calculationInput.length; i++)
  {
    if(calculationInput[i]==='+'||calculationInput[i]==='-'||calculationInput[i]==='*'||calculationInput[i]==='/')
    {
      symbolPos.push(i);
    }
  }

  //Slices into two arrays
  let startPos=0;
  let endPos=0;

  for(let j = 0; j<symbols.length; j++)
  {
    endPos = symbolPos[j]-1;
    numbers.push(parseInt(calculationInput.substring(startPos,endPos)));
    startPos = symbolPos[j]+1;
    if(j===symbols.length-1){
      numbers.push(calculationInput.substring());
    }
  }
}

const sumNumbers = function (a, b)
{
  return a+b;
};

const takeAwayNumbers = function (a,b)
{
  return a-b;
};

const multiplyNumbers = function (a, b)
{
  return a*b;
};

const dividesNumbers = function (a, b)
{
  return a/b;
};

const operate= function (a,b,operator)
{
  let result;
  switch(operator)
  {
    case "+":
    result=sumNumbers(a,b);
    break;
    case "-":
    result=takeAwayNumbers(a,b);
    break;
    case "*":
    result=multiplyNumbers(a,b);
    break;
    case "/":
    result=dividesNumbers(a,b);
    break;
    default:
    return "Wrong operator input";
  }
  return result;
};


setUpUI();



//Tests
module.exports =
{
 sumNumbers,
 takeAwayNumbers,
 multiplyNumbers,
 dividesNumbers,
 operate,
 toText
};
