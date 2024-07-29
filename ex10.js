//Exercise 10: Move Zeros

function MoveZeros(arrNum) {
    let result = []
    let zero = []

    for(let i = 0 ; i < arrNum.length ; i++){
        if(arrNum[i]){
            result.push(arrNum[i])
        }else{
            zero.push(arrNum[i])
        }
    }   
    return [...result , ...zero]
}

let result1 = MoveZeros([0,1,0,3,12])
let result2 = MoveZeros([0])

console.log(result1) // [1,3,12,0,0]
console.log(result2) // [0]