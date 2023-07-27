/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".
*/

const longestCommonPrefix = (strs) => {
    if(strs.length==0)
        return ""

    const shortest = strs.reduce((acc, curr) => (curr.length < acc.length ? curr : acc), strs[0])

    let prefix = ""

    for(let i = 0 ; i < shortest.length ; i++) {
        const char = shortest[i]

        if(strs.every(str=>str[i]===char)) {
            prefix+=char
        }else{
            break
        }
    }

    return prefix
}


const arr = ["flower","flow","flight"]
console.log(longestCommonPrefix(arr))