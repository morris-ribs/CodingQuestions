function retrieveProductOfOtherElements(arr, currentIndex, result, i = 0) {
    if (i === arr.length) {
        return result;
    }
    if (arr[i] !== arr[currentIndex]) {
        if (typeof result === "undefined") {
            result = 1;
        }
        result *= arr[i];
    }

    return retrieveProductOfOtherElements(arr, currentIndex, result, ++i);
}


function productarrayWithoutDivision(arr) {
    const result = [];
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            const product = retrieveProductOfOtherElements(arr, i);
            if (typeof product !== "undefined") {
                result.push(product);
            }
        }
    }
    return result;
}

function productarray(arr) {
    let result = [];
    if (arr.length > 1) {
        const productofAllNumbers = arr.reduce((p, num) => p * num);
        result = arr.map(element => productofAllNumbers/element);
    }
    return result;
}

module.exports = productarray;