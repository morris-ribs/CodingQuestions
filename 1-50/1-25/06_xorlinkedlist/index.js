let nonce = 1;
let dummyMemObject = {};

class Node {
    constructor(data) {
        this.data = data;
        this.both = null;
        this.nonce = nonce;
        dummyMemObject[nonce++] = this;
    }
}

class XorLinkedList {
    constructor() {
        this.head = null;
    }

    add(node) {
        if(this.head == null) {
            this.head = node;
            return;
        }

        let previous = null;
        let aux = null;
        let currentNonce = this.head.nonce;
        let currentNode = this.head;

        while ((previous ^ currentNode.both) != 0) {
            aux = currentNonce;
            currentNonce = (previous ^ currentNode.both); // next node becomes current
            previous = aux; // set previous node
            currentNode = dummyMemObject[currentNonce];
        }

        node.both = currentNonce;
        if (typeof dummyMemObject[currentNonce] !== "undefined")
        dummyMemObject[currentNonce].both = (previous ^ node.nonce);
        else console.log("undefined nonce: " + currentNonce);
    }

    get(index) {
        let counter = 0;
        let node = this.head;
        let previousNonce = null;
        let auxNonce = null;
        while (node != null) {
            if (counter === index) {
                return node;
            }
            counter++;
            auxNonce = node.nonce;
            node = dummyMemObject[previousNonce ^ node.both];
            previousNonce = auxNonce;
        }

        return null;
    }
}

// const list = new XorLinkedList();
// list.add(new Node("One"));
// list.add(new Node("Two"));
// list.add(new Node("Three"));
// list.add(new Node("Four"));
// list.add(new Node("Five"));
// list.add(new Node("Six"));

// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(7));


module.exports = { Node, XorLinkedList };