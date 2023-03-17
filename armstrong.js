function isArmstrong(number) {
    const digits = number.toString().split(''); // convert number to array of digits
    const numDigits = digits.length;
    let sum = 0;
    
    digits.forEach((digit) => {
      sum += Math.pow(digit, numDigits); // add the digit raised to the power of the number of digits
    });
    sum===numDigits;  }
  
  

  
  
  
  console.log(isArmstrong(371)); 
  console.log(isArmstrong(321)); 