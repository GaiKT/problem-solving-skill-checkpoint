//Exercise 12: Longest Common Prefix

function longestString(arrayString) {
    let result = ""
    const stringTemplate = arrayString[0].split('')

    for(let i = 1 ; i < arrayString.length ; i ++){
        let letter = arrayString[i].split('')
        for(let c = 0 ; c < letter.length ;  c++){
            if(letter[c] === stringTemplate[c]){
                result += letter[c]
            }else{
               return result.slice( 0 , c)
            }
        }
    }
    return result
}

let result1 = longestString(["flower","flow","flight"])
let result2 = longestString(["dog","racecar","car"])
let result3 = longestString(["kuy","kuylong","kuyrac"])
let result4 = longestString(["kid","kuylong","kuyrac"])

console.log(result1) // "fl"
console.log(result2) // -""
console.log(result3) // kuy
console.log(result4) // k