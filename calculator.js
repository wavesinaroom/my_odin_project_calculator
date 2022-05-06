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

  let result = 0;
  //Computes
  for (let k = 0; k < symbols.length; k++) {
    result+=operate(numbers[k], numbers[k+1], symbols[k]);
  }
  return result; 
}



//setUpUI();


//Tests
module.exports =
{
  compute
};
