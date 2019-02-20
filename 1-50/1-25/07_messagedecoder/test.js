const messagedecoder = require('./index');

test('messagedecoder is a function', () => {
    expect(typeof messagedecoder).toEqual('function');
});

test('messagedecoder returning 0', () => {
    expect(messagedecoder("011")).toEqual(0);
    expect(messagedecoder("602")).toEqual(0);
    expect(messagedecoder("1602")).toEqual(0);
    expect(messagedecoder("1111112602")).toEqual(0);
});

test('messagedecoder returning 1', () => {    
    expect(messagedecoder("10")).toEqual(1);
    expect(messagedecoder("20")).toEqual(1);
    expect(messagedecoder("201")).toEqual(1);
    expect(messagedecoder("106")).toEqual(1);
    expect(messagedecoder("2010")).toEqual(1);
    expect(messagedecoder("63945")).toEqual(1);
    expect(messagedecoder("639451")).toEqual(1);
});

test('messagedecoder returning 3', () => {    
    expect(messagedecoder("111")).toEqual(3);
    expect(messagedecoder("222")).toEqual(3);
});

test('messagedecoder returning 4', () => {
    expect(messagedecoder("161945")).toEqual(4);
    expect(messagedecoder("261945")).toEqual(4);
});

test('messagedecoder returning 5', () => {
    expect(messagedecoder("1111")).toEqual(5);
    expect(messagedecoder("2222")).toEqual(5);
});

test('messagedecoder returning 6', () => {
    expect(messagedecoder("1621945")).toEqual(6);
});