function calculate(num1, num2, operator) {
  //   write your code here -->
  if(operator=="+"){
   let res=num1+num2;
   return res;
  }
  if(operator=="-"){
    let res=num1-num2;
    return res;
  }
  if(operator=="*"){
    let res=num1*num2;
    return res;
  }
  if(operator=="/"){
    let res=num1/num2;
    return res;
  }
  
}
function rest(){
  num1.value="";
  num2.value="";
  operator.value="";
  result.textContent="Result is:"
}
// ignore the function below
function performOperations() {
  // Get the values of the two input fields and the operator.
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var operator = document.getElementById("operator").value;
  // Check if the input values are valid.
  if (num1=="" || num2=="") {
    result.textContent= "Please enter valid numbers!";
  }
  if (operator === "") {
    result.textContent = "Please select an operator!";
  }
  const res = calculate(parseFloat(num1), parseFloat(num2), operator);
 if(operator!=="" && num2!="" && num1!=""){
   result.textContent="Result is: "+res;
 }
}