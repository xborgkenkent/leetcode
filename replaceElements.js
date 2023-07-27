/*
    Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

    After doing so, return the array.

*/

const replaceElements = (arr) => {
    let maxElement = -1
    for(let i = arr.length-1 ; i >=0 ; i--) {
        let current = arr[i]
        arr[i] = maxElement
        maxElement = Math.max(current, maxElement)
    }

    return arr
}

const arr  = [400]

console.log(replaceElements(arr))