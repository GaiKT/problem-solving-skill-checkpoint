//Exercise 2: Valid Palindrome

const isPalindrome = function (string) {
    let lowerCaseString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let reverceString = ''
    for(let i = 0 ; i < lowerCaseString.length ; i ++){
      reverceString = lowerCaseString[i] + reverceString
    }
    return lowerCaseString === reverceString
  };
  
const result1 = isPalindrome("A man, a plan, a canal: Panama");
  const result2 = isPalindrome("race a car");
  const result3 = isPalindrome(" ");
  
  console.log(result1); // true
  console.log(result2); // false
  console.log(result3); // true