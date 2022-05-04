function typeToDisplay()
{
  document.getElementById("screen").innerText = "A";
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

clearButton = document.getElementsByName("clear");
clearButton[0].addEventListener("click", typeToDisplay);



//Tests
/*
module.exports =
{
 sumNumbers,
 takeAwayNumbers,
 multiplyNumbers,
 dividesNumbers,
 operate,
 typeToDisplay
};
*/
