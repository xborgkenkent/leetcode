const memoiFib = (n, memo = {}) => {
    if (n in memo) {
        return memo[n];
    }
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        memo[n] = memoiFib(n - 1, memo) + memoiFib(n - 2, memo);
        return memo[n];
    }
}

const n = 50
console.log(memoiFib(n))