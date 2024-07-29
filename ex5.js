// Exercise 5: Length of Last Word

const lengthOfLastWord = function (string) {
  let arrayWords = string.split(" ")
  let result = 0
  
  for(let word = 0; word < arrayWords.length ; word ++){
    if(arrayWords[word]){
      result = arrayWords[word].length
    }
  }
  return result
  };
  
  const result1 = lengthOfLastWord("Hello World");
  const result2 = lengthOfLastWord("   fly me   to   the moon  ");
  const result3 = lengthOfLastWord("luffy is still joyboy");
  
  console.log(result1); // 5
  console.log(result2); // 4
  console.log(result3); // 6