const fibonacci = function(pos) {
  let num1 = 1;
  let num2 = 1;

  if (pos < 0){
    return "OOPS";
  }if(pos instanceof String){
    pos = parseInt(pos);
  }
  if(pos == 0){
    return 0;
  }
  if (pos == 1 || pos == 2){
    return 1;
  }else {
    for (let i = 3; i <= pos; i++){
      let temp = num1 + num2;
      num1 = num2;
      num2 = temp;
    }
    return num2;
  }
};

// Do not edit below this line
module.exports = fibonacci;
