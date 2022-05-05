//TODO: Wire this function with buttons
function toText()
{
  alert("I'm working");
}

const setUpButtons = function(){
  uiButtons = Array.from(document.getElementsByClassName("UI"));
  digitButtons = Array.from(document.getElementsByClassName("digit"));
  symbolButtons = Array.from(document.getElementsByClassName("symbol"));

  digitButtons.forEach(button => button.addEventListener("click",toText));
  symbolButtons.forEach(button => button.addEventListener("click",toText));
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


setUpButtons();



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
