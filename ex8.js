//Exercise 8: Defanging an IP Address

function DefangIP (string) {
    return string.replaceAll('.' , '[.]')
}

let result1 = DefangIP("1.1.1.1")
let result2 = DefangIP("255.100.50.0")

console.log(result1) // '1[.]1[.]1[.]1'
console.log(result2) // '255[.]100[.]50[.]0'