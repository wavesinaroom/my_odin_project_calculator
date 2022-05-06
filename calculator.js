let calculationInput='';
let numbers=[];
let symbols=[];

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

const compute = function(calculationInput){

  //Finds where symbols are
  let symbolPos = [];
  for(let i = 0; i<calculationInput.length; i++)
  {
    if(calculationInput[i]==='+'||calculationInput[i]==='-'||calculationInput[i]==='*'||calculationInput[i]==='/')
    {
      symbolPos.push(i);
    }
  }

  //Slice string to numbers array
  let startPos=0;
  let endPos=0;

  //Numbers
  for(let j = 0; j<symbolPos.length; j++)
  {
    endPos = symbolPos[j];
    numbers.push(parseInt(calculationInput.substring(startPos,endPos)));
    symbols.push(calculationInput.substring(symbolPos[j],symbolPos[j]+1));
    startPos = symbolPos[j]+1;
    if(j===symbolPos.length-1){
       numbers.push(parseInt(calculationInput.substring(symbolPos[j]+1, calculationInput.length)));
    }
  }

  symbols.forEach(symbol => console.log(symbol));
  numbers.forEach(number => console.log(number));
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


//setUpUI();
compute("5+75-654+45");


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
