//1
function sumOfThreeAndFive(){
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum +=i; //console.log(sum)
      }
  }
  return sum
}

console.log(sumOfThreeAndFive());


function greaterNum(num1, num2){
    if (num1 % 1 === 0 && num2 % 1 === 0) {
    if (typeof(num1) != "number" || typeof(num2) != "number") {return "null"}
    else if (num2 > num1) {return num2;}
    else if (num1 > num2) {return num1;}
    else if (num1 === num2) {return 'both integers are equal';}
    
    }
}

console.log(greaterNum(24, 36));

function oddAndEvenInFifteen(){
    for (let i = 1; i <= 15; i++) {
        if (i % 2 === 0) {console.log (`${i} is even`)}
       else {console.log (`${i} is odd`)}
    }
}

console.log(oddAndEvenInFifteen());

function sortThreeNums(num1, num2, num3){
  if (num1 >= num2 && num1 >= num3) {console.log (num1)
    
  if (num2 >= num3) {console.log (num2); console.log (num3);}
  else {console.log (num3); console.log (num2);}
  
  }
  
  else if (num2 >= num1 && num2 >= num3) {console.log (num2);
    
  if (num1 >= num3) {console.log (num1); console.log (num3);}
  else {console.log (num3); console.log (num1);}
  
    
    
  }
  else if (num3 >= num2 && num3 >= num2) {console.log (num3);
  if (num2 >= num1) {console.log (num2); console.log (num1);}
  else {console.log (num1); console.log (num2);}
  
  }
  
}
console.log(sortThreeNums(30, 40, 50));

