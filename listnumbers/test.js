const listnumbers = require('./index');

test('listnumbers function is defined', () => {
    expect(typeof listnumbers).toEqual('function');
});

test('calculates correct listnumbers value for simple case expecting true', () => {
    expect(listnumbers([10, 15, 3, 7], 17)).toEqual(true);
});

test('calculates correct listnumbers value for empty array', () => {
    expect(listnumbers([], 17)).toEqual(false);
});

test('calculates correct listnumbers value for one-item array', () => {
    expect(listnumbers([17], 17)).toEqual(false);
});

test('calculates correct listnumbers value for case expecting false with repetitive items', () => {
    expect(listnumbers([10, 15, 3, 7, 10, 15, 3, 7, 10, 15, 3, 7], 97)).toEqual(false);
});

test('calculates correct listnumbers value for case expecting true with repetitive items', () => {
    expect(listnumbers([10, 15, 3, 7, 10, 15, 3, 7, 10, 15, 3, 7], 17)).toEqual(true);
});

test('calculates correct listnumbers value for case expecting true with sum in extreme', () => {
    expect(listnumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 41], 50)).toEqual(true);
});