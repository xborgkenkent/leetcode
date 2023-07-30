/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

const reverseVowels = (s) => {

    let str = s.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const listVow = s.split('').filter((ch) => vowels.includes(ch)).reverse().join('')

    let x = 0

    for(let i = 0 ; i < s.length ; i++) {
        if(vowels.includes(s[i])) {
            //s[i] = listVow[x++]
            str[i] = listVow[x++]
            //console.log(listVow[x++])
        }
    }

    return str.join('')
}

const s = "hello"

console.log(reverseVowels(s))