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

  let numbers=[];
  let signs=[];

  //Parses input string
  let numberLength = 0;
  let numberRegex = new RegExp(/\d|\-/);
  let signRegex = new RegExp(/\+|\*|\//);

  for(let i = 0; i<calculationInput.length; i++)
  {
    //Parse consecutive negative number and negative sign separately
    if(calculationInput[i]==="-"&&calculationInput[i+1]==="-")
    {
      if(calculationInput[i]!==0||calculationInput[i]!==calculationInput.length-1)
      {
        signs.push(calculationInput[i]);
        continue;
      }else{
        console.log("at: "+i);
        throw "Wrong input";
      }
    }//If i is a number or (-) sign
    else if(numberRegex.test(calculationInput[i]))
    {
      numberLength++;
    }//If i is a math sign
    else if(signRegex.test(calculationInput[i]))
    {
      //Parses number when sign is found
      if(i!==0||i!==calculationInput.length-1)
      {
        if(i-numberLength-1=="-")
        {
          numbers.push(parseFloat(calculationInput.substring(i-numberLength, i-1))*-1);
        }else
        {
          numbers.push(parseFloat(calculationInput.substring(i-numberLength-1, i-1)));
          numberLength = 0;
        }
      }
      //Throws error if expression starts with sign
      //Throws error if expression ends with sign
      if(i===0||i===calculationInput.length-1)
      {
        console.log("at: "+i);
        throw "Wrong input";
      }//Throws error if two signs in a row
      else if(signRegex.test(calculationInput[i+1]))
      {
        console.log("at: "+i);
        throw "Wrong input";
      }else
      {
        signs.push(calculationInput[i]);
      }
    }//Throws error if expression is not a sign or a number
    else
    {
      console.log("at: "+i);
      throw "Wrong input";
    }
  }

  console.log(numbers);
  console.log(signs);


  //Computes
  let result = numbers[0];

  //Computes pairs of terms
  for(let j = 1; j<numbers.length; j++){
    result= operate(result, numbers[j], symbols[j-1]);
  }

  //Rounds to 5 decimnal places
  if((result%10)!==0)
  {
      result= +result.toFixed(5);
  }
  return result;
}

compute("30*-100+50");

//Tests
module.exports =
{
  compute
};
