//Exercise 4: Fizz Buzz

const fizzBuzz = function (number) {
    //Start coding here
    const result = []
    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        }else if(i % 5 === 0) {
            result.push("Buzz")
        }else if(i % 3 === 0) {
            result.push("Fizz")
        }else{
            result.push(`${i}`)
        }
    }
    return result
  };
  
  const result1 = fizzBuzz(3);
  const result2 = fizzBuzz(5);
  const result3 = fizzBuzz(15);
  
  console.log(result1); // ["1","2","Fizz"]
  console.log(result2); // ["1","2","Fizz","4","Buzz"]
  console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]