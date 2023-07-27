/*

    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal substring consisting of non-space characters only.
*/

const lengthOfLastWord = (s) => {
    let str = s.trim().split(" ")
    let xx = str[str.length-1]

    return xx.length
}

const s = "luffy is still joyboy"

console.log(lengthOfLastWord(s))