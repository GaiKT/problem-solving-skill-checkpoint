//Exercise 11: Binary Search

function binarySearch(nums , traget) {
    let start = 0
    let end = nums.length - 1

    while (start <= end){  
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === traget){
            return mid;
        }else if( nums[mid] < traget ){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return  -1
}

let result1 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , 7)
let result2 = binarySearch([-1,0,3,5,9,12] , 2)

console.log(result1) // 6
console.log(result2) // -1