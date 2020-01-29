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
        }
        return this;
    }
    includes(ele) {
        let head = this.head;
        while(head.next){
            if(head.data === ele){
                console.log('Return True');
                return true;
            } else {
                head = head.next;
                console.log('Failed, Next!!');
            }
        }
    }
    toString() {
        
    }
}

module.exports = LinkedList;