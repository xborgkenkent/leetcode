/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



*/

const searchRange = (nums, target) => {
    const leftIndex = nums.indexOf(target);
    const rightIndex = nums.lastIndexOf(target);

    return [leftIndex, rightIndex];
}

const nums = [5,7,7,8,8,10], target = 8

console.log(searchRange(nums, target))