/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const isAnagram = (s, t) => {
    let x1 = s.split("").sort().join("")
    let x2 = t.split("").sort().join("")

    return x1==x2
}

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s, t))