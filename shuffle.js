/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 
*/

const shuffle = (nums) => {
    const n = nums.length / 2;
  
    const pairs = nums.slice(0, n).map((x, i) => [x, nums[n + i]]);
  
    const result = pairs.flatMap(pair => pair);
  
    return result;
};

const nums = [2,5,1,3,4,7]
console.log(shuffle(nums))