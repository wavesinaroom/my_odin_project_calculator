const sumNumbers = function sum (a, b)
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
}

const dividesNumbers = function (a, b)
{
  return a/b;
}

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
}


module.exports =
{
 sumNumbers,
 takeAwayNumbers,
 multiplyNumbers,
 dividesNumbers,
 operate
};
