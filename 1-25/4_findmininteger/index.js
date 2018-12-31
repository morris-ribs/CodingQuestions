function findmininteger(arr) {
    const aux = Array(arr.length).fill(false);
    for(let i= 0; i < arr.length; i++) {
        const elem = arr[i];
        if (elem > 0 && elem <= arr.length) {
           aux[elem-1] = true; 
        }        
    }
    let index = aux.findIndex(elem => !elem);
    if (index < 0) {
        index = aux.length;
    }

    return index + 1;
}

// console.log(findmininteger([3,4,-1,1]));
// console.log(findmininteger([2,1,0]));
// console.log(findmininteger([1,2,3]));
// console.log(findmininteger([1,2,3, 4, 1]));

module.exports = findmininteger;