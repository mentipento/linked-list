// linked-list.js

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head

    while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  

  prepend(value) {

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    return;
  }
}

const linkedList = new LinkedList();

linkedList.prepend(2);
linkedList.append(6);
linkedList.prepend(4);

console.log(linkedList.next);