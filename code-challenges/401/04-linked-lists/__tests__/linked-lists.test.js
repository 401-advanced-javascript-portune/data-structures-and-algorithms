let list = require('../linked-list.js');
let node = require('../node.js');
let index = require('../index.js');

let linkedList = new list();

describe('Linked Lists', () => {
    it('Can Initialize an empty Linked List', () => {
        expect(list).toBeTruthy();
    })
    it('Can insert into Linked List', () => {
        expect(typeof linkedList.insert('Node 6').head.data).toBe('string')
    })
    it('Points to the Head', () => {
        linkedList.insert('Node 5');
        linkedList.insert('Node 4');
        linkedList.insert('Node 3');
        linkedList.insert('Node 2');
        linkedList.insert('Node 1');
        expect(linkedList.head.data).toBe('Node 1');
    })
    it('Can insert multiple', () => {
        let test = [linkedList.insert('Node 3'), linkedList.insert('Node 2'), linkedList.insert('Node 1')];
        let num = 0;
        test.forEach(ele => {
            num++;
        })      
        expect(num > 0).toBeTruthy()
    })
    it('Will return true if LL contains the item', () => {
        expect(linkedList.includes('Node 3')).toBeTruthy();
    })
    it('Will return false if LL does not contain the item', () => {
        expect(linkedList.includes('Node 13')).toBeFalsy();
    })
    it('Will return all items in LL', () => {
        expect(typeof linkedList.toString()).toBe('string');
    })
})