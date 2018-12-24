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

function slowCount(message, index = 0) {
    const length = message.length;
    if (index === length) {
        return 1;
    }

    const num = parseInt(message[index]);
    if (num === 0) {
        return 0;
    }

    let counter = 0;

    if (num === 1) {
        const num2 = (index < (length -1)) ? parseInt(message[index+1]) : -1;
        if (num2 >= 0) {
            counter = count(message, index + 2);
        }
    } else if (num === 2) {
        // num is equal to 2
        const num2 = (index < (length -1)) ? parseInt(message[index+1]) : 9999;
        if (num2 < 7) {
            counter = count(message, index + 2);
        }
    } 
    
    counter += count(message, ++index);
    return counter;
}

const count = memoize(slowCount);

function messagedecoder(message) {
    return count(message);
}

module.exports = messagedecoder;