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
                return true;
            } else {
                head = head.next;
            }
        }
        return false;
    }
    toString() {
        let listStr = [];
        let str = '';
        let current = this.head;
        while(current.next){
            current = current.next;
            listStr.push(current.data);
        }
        listStr.forEach(ele => {
            if(this.includes(ele)){
                str += `{${ele}} --> `;
            } else {
                str += `{${ele}}`;
            }
        })
        return str;
    }
}

module.exports = LinkedList;