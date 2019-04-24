# PeekableInterface

Given an iterator with methods _next()_ and _hasNext()_, create a wrapper iterator, PeekableInterface, which also implements _peek()_. _peek_ shows the next element that would be returned on _next()_.

Here is the interface:
```
class PeekableInterface {
    constructor(iterator) {}   

    peek() {}

    next() {}

    hasNext() {}
}
```