//Exercise 9: Running Sum of 1d Array

function RunningSum(arrNum) {
    let result = []

    for(let i = 0 ; i < arrNum.length ; i++){
        if( i === 0){
            result.push(arrNum[i])
        }else{
            result.push(result[i - 1] + arrNum[i])
        }     
    }   
    return result
}

let result1 = RunningSum([1,2,3,4])
let result2 = RunningSum([1,1,1,1,1])
let result3 = RunningSum([3,1,2,10,1])

console.log(result1) // [1,3,6,10]
console.log(result2) // [1,2,3,4,5]
console.log(result3) // [3,4,6,16,17]