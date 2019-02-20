function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowSum(n1, n2) {
    return n1 + n2;
}

const sum = memoize(slowSum);

function slowCheck(arr, i, j, k) {
    if (j === arr.length) {
        return false;
    }
    
    if (sum(arr[i], arr[j]) === k) {
        return true;
    }

    return check(arr, i, ++j, k);
}

const check = memoize(slowCheck);

function listnumbers(arr, k) {
    const limit = arr.length - 1;
    for (let i = 0; i < limit; i++) {
        if (check(arr, i, i+1, k)) {
            return true;
        }
    }

    return false;
}

module.exports = listnumbers;