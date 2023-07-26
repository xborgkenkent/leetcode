/*
    Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const isPalindrome = (x) => {
    let xx = String(x).split("").reverse().join("")

    return xx==x
}

console.log(isPalindrome(121))