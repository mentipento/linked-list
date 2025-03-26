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
  

  // prepend(value) {

  //   const newNode = new Node(value);

  //   if (!this.next) {
  //     this.next = newNode;
  //     console.log(this.next);
  //     return;
  //   }
  // }
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append(6);

console.log(linkedList);