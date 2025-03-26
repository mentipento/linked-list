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

  size() {
    if (!this.head)
      return 0;

    let current = this.head;
    let size = 1;

    while (current.next) {
      current = current.next;
      size++;
    }
    return size;
  }

  getHead() {
    if (!this.head)
      return null;

    return this.head.value;
  }

  getTail() {
    if (!this.head)
      return null;

    let current = this.head;

    while (current.next) {
      current = current.next
    }
    return current.value;
  }

  atIndex(index) {

    if (!this.head)
      return null;

    if (index < 0 || index >= this.size())
      return null;

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.value;
  }

  pop() {
    if (!this.head)
      return

    if (this.size() === 1) {
      const removed = this.head.value;
      this.head = null;
      return removed;
    }

    const length = this.size();
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < length - 2) {
      current = current.next;
      currentIndex++;
    }

    const removed = current.next.value;
    current.next = null;
    return removed;
      
  }

  contains(value) {

    let current = this.head;

    while (current) {

      if (current.value === value)
        return true;

      current = current.next
    }
    return false;
  }

  find(value) {

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (current.value === value)
        return currentIndex;

      current = current.next;
      currentIndex++;
    }
    return null;
  }

  toString() {

    let current = this.head;
    let string = '';

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.next;

    }
    return string + null;
  }

}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append(6);
linkedList.append(2);
linkedList.append(9);


console.log(linkedList.toString());