function cons(a, b) {
    function pair(f) {
        return f(a,b);
    }
    
    return pair;
}

function car(pair) {
   return pair((a, b) => { return a; });
}

function cdr(pair) {
    return pair((a, b) => { return b; });
}

// console.log(car(cons(3, 4)));
// console.log(cdr(cons(3, 4)));

// console.log(car(cons(1, 2)));
// console.log(cdr(cons(1, 2)));

// console.log(car(cons(1, "SSSSS")));
// console.log(cdr(cons(1, "SSSSS")));