/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 
*/

const increasingTriplet = (nums) => {
    
    let firstMin = Infinity
    let secondMin = Infinity

    for(num in nums) {
        if(firstMin <= num) {
            firstMin = num
        }else if(secondMin <= num) {
            secondMin = num
        }else{
            return true
        }
    }
    
    return false
}

const arr = [20,100,10,12,5,13]

console.log(increasingTriplet(arr))