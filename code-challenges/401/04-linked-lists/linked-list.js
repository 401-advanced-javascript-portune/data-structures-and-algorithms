'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(ele) {
        let node = new Node(ele);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
            console.log(node);
        }
    }
}

module.exports = LinkedList;