const setUpUI = function(){
  let screenDisplay = document.getElementById("screen");

  let uiButtons = Array.from(document.getElementsByClassName("UI"));
  let digitButtons = Array.from(document.getElementsByClassName("digit"));
  let symbolButtons = Array.from(document.getElementsByClassName("symbol"));

  digitButtons.forEach(button => button.addEventListener("click",function(e)
  {
    screenDisplay.innerText=(e.srcElement.innerText);
  }));
  symbolButtons.forEach(button => button.addEventListener("click",function(e)
  {
    screenDisplay.innerText=(e.srcElement.innerText);
  }));
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
