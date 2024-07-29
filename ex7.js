//Exercise 7: Find Pivot Index 

const findPivotIndex = function (arr) {
    let leftSum = 0
    let totalSum = arr.reduce((accu , cur)=> accu + cur)
    let index = 0

    while(index <= arr.length){
        if(totalSum - leftSum - arr[index] === leftSum ){
            return `The pivot index is ${index}.`
        }
        leftSum += arr[index]
        index ++
    }
    
    return -1

  };
  
  const result1 = findPivotIndex([1,7,3,6,5,6]);
  const result2 = findPivotIndex([1,2,3]);
  const result3 = findPivotIndex([2,1,-1]);
  
  console.log(result1); // "The pivot index is 3."
  console.log(result2); // -1
  console.log(result3); // "The pivot index is 0."