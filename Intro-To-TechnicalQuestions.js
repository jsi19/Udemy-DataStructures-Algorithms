/* In a language of your choice that doesn't support unlimited sized integers. 
Design and implement a system in the language to allow for mathematical operations on arbitratily large integers, bounded only by the size of memory.
*/


// Positive integers
// Strings
// Inout is valid
// numbers may be different sizes

function add(num1, num2) {
    //Reverse the numnbers
    num2 = reverseString(num2);
    num1 = reverseString(num1);
  
    //traverse the shorter number
    if (num2.length < num1.length) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
    let total = [];
    let carry = 0;
  
    //Traverse through rest of longer number
    for(let i = 0; i < num1.length; i++) {
      const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
      total.unshift(sum % 10);
      carry = Math.floor(sum / 10);
    }
  
    //traverse the rest of longer number
    for(let i = num1.length; i < num2.length; i++) {
      const sum = parseInt(num2[i]) + carry;
      total.unshift(sum % 10);
      carry = Math.floor(sum / 10);
    }
  
    if(carry === 1) {
      total.unshift(carry);
    }
  
    //Return result
    return total.join('');
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(add('123', '456'));
  console.log(add('222', '2223') === '2445')
  console.log(add('222', '-2223'))
  console.log(add('999', '1'))
  //add('123', '456') => '759'