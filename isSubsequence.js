/*
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

const isSubsequence = (s, t) => {
    let subIn = 0
    let seq = 0

    while(subIn < s.length && seq < t.length) {
        if(s[subIn]==t[seq]) {
            subIn++
        }
        seq++
    }

    return subIn==s.length
}

const s = "axc"
const t = "ahbgdc"

console.log(isSubsequence(s, t))