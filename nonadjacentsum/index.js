function nonadjacentsum(arr) {
    const max = Math.max(...arr);

    const length = arr.length;
    if (length <= 2 || max <= 0) {
        return max;
    }

    let maxExcludingLast = Math.max(0, arr[0]);    
    let maxIncludingLast = Math.max(maxExcludingLast, arr[1]);
    arr.splice(0, 2);
    arr.forEach(element => {
        const prevMaxIncludingLast = maxIncludingLast;

        maxIncludingLast = Math.max(maxIncludingLast, maxExcludingLast + element);
        maxExcludingLast = prevMaxIncludingLast;
    });

    return Math.max(maxIncludingLast, maxExcludingLast);
}

// console.log(nonadjacentsum([2,4,6,2,5]));
// console.log(nonadjacentsum([5,1,1,5]));
// console.log(nonadjacentsum([12,10,6,25,5]));
// console.log(nonadjacentsum([5,1,1,5,1,5]));
// console.log(nonadjacentsum([5,1,1,5,1,0]));
// console.log(nonadjacentsum([-2,-4,-6,-2,-5]));
// console.log(nonadjacentsum([-5,-1,-1,-5]));
// console.log(nonadjacentsum([-2,-4,6,-2,-5]));
// console.log(nonadjacentsum([-5,-1,1,-5]));
// console.log(nonadjacentsum([-2,-4,6,-2,5]));
// console.log(nonadjacentsum([-2,-4,6,2,-5]));
// console.log(nonadjacentsum([12,10,2,7,5,1,55,1]));

module.exports = nonadjacentsum;