/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


var twoSum = function(nums, target) {
    let map = new Map();
    
    let x1 = 0
    let x2 = 0

    for(let i = 0 ; i < nums.length; i++) {
        let complement = target - nums[i];

        if(map.has(complement)) {
            x1 = map.get(complement)
            x2 = i
        }
        map.set(nums[i], i)
    }

    let xx = [x1, x2]

    return xx;

};


const arr = [2,7,11,15];
const target = 9;
console.log(twoSum(arr, target));
