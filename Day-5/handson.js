function testScope() {
    if (true) {
      var varVariable = 'I am var';
      let letVariable = 'I am let';
      const constVariable = 'I am const';
    }
    console.log(varVariable);   
    
  }
  
  testScope();
  

//    task 2
let nums = [10, 20, 30];

nums.unshift(5); 
nums.push(40);    
nums.splice(1, 1); 

let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total); 
