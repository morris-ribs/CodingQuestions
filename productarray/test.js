const productarray = require('./index');

test('productarray function is defined', () => {
    expect(typeof productarray).toEqual('function');
});

test('calculates correct productarray for simple case', () => {
    expect(productarray([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test('calculates correct productarray for simple case in reversal', () => {
    expect(productarray([3,2,1])).toEqual([2,3,6]);
});

test('calculates correct productarray for empty array', () => {
    expect(productarray([])).toEqual([]);
});

test('calculates correct productarray for single item array', () => {
    expect(productarray([3])).toEqual([]);
});
