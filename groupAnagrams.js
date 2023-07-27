/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



*/

const groupAnagrams = (strs) => {
    const groups = new Map()
    
    for(const str of strs) {
        const sortedStr = str.split("").sort().join("")

        if(!groups.has(sortedStr)) {
            groups.set(sortedStr, [])
        }
        groups.get(sortedStr).push(str)

    }

    return Array.from(groups.values())
}


const strs = ["eat","tea","tan","ate","nat","bat"]

groupAnagrams(strs)
//console.log(groupAnagrams(strs))