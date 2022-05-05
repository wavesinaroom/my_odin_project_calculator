const setUpUI = function(){

  const clearButtonPos = 0;
  let screenDisplay = document.getElementById("screen");

  let outputButtons = Array.from(document.getElementsByClassName("UI"));
  let inputButtons = Array.from(document.getElementsByClassName("input-key"));

  outputButtons[clearButtonPos].addEventListener("click", ()=>{
    screenDisplay.innerText = ' ';
  });

  inputButtons.forEach(button => button.addEventListener("click",function(e){
    console.log(e);
    screenDisplay.innerText=(e.target.innerText);
    }
  ));
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
