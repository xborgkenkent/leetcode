/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const containsDuplicate = (nums) => {
    let xx = new Set(nums)

    if(xx.size==nums.length)
        return false
    return true
}


const arr = [1,1,1,3,3,4,3,2,4,2]

console.log(containsDuplicate(arr))