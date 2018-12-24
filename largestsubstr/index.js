function largestsubstr(str, k) {
    let ind = 0;
    let indI = 0, largestStrLength = 0;
    const length = str.length;
    const limit = (str.length - k);

    while(ind < limit) {
        const auxArr = [];
        let aux1 = 0;
        while ((ind+aux1) < length) {
            const auxChar = str[(ind+aux1)];
            if (auxArr.indexOf(auxChar) < 0) {
                if (auxArr.length === k) { 
                    break; 
                }
                auxArr.push(auxChar);
            }
            aux1++;
        }

        if (aux1 > largestStrLength) {
            largestStrLength = aux1;
            indI = ind;
        }
        ind++;
    }

    return str.substring(indI, (indI + largestStrLength));
}

// console.log(largestsubstr("abcba", 2));

module.exports = largestsubstr;