/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

const topKFrequent = (nums, k) => {

    const freqMap = new Map()
    
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    })

    const sortedNums = Array.from(freqMap.keys()).sort((a, b) => {
        const freqA = freqMap.get(a);
        const freqB = freqMap.get(b);
        return freqB - freqA;
      });
    
      return sortedNums.slice(0, k);
}

const nums = [1,1,1,2,2,3], k = 3

console.log(topKFrequent(nums, k))