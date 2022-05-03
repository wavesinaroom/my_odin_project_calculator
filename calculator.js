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
  switch(operator)
  {
    case "+":
      sumNumbers(a,b);
      break;
    case "-":
      takeAwayNumbers(a,b);
      break;
    case "*":
      multiplyNumbers(a,b);
      break;
    case "/":
      multiplyNumbers(a,b);
      break;
    default:
      return "Wrong operator input";
  }
}


module.exports =
{
 sumNumbers,
 takeAwayNumbers,
 multiplyNumbers,
 dividesNumbers,
 operate
};
