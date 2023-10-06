class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let current = this.head;
      let listValues = '';
      while (current) {
        listValues += `${current.value} -> `;
        current = current.next;
      }
      listValues += 'null';
      console.log(listValues);
    }
  }

  printHead() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      const current = this.head;
      console.log(current.value);
    }
  }

  printTail() {
    if (this.isEmpty()) {
      console.log('List is empty');
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.next === null) {
        console.log(current.value);
        return i;
      }
      current = current.next;
      i++;
    }
    console.log(current.value);
    return current;
  }

  contains(value) {
    if (this.isEmpty()) {
      console.log('The list is empty');
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
      i++;
    }
    return false;
  }

  find(value) {
    if (this.isEmpty()) {
      console.log('The list is empty');
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return ('Value not found');
  }

  findAt(index) {
    if (this.isEmpty()) {
      console.log('The list is empty');
      return -1;
    }
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) {
        return current.value;
      }
      i++;
      current = current.next;
    }
    return -1;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('The list is empty');
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log('Cannot insert at an index lower than 0 or larger than the size of the Linked List');
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(`No value found at ${index}`);
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size: ', list.getSize());
list.print();

list.insertAt(10, 0);
list.print();
list.insertAt(20, 0);
list.print();
list.insertAt(30, 1);
list.print();
list.insertAt(40, 2);
list.print();
list.getSize();

list.removeAt(10);
// console.log(list.removeAt(10));
list.removeAt(0);
// console.log(list.removeAt(0));
list.print();

list.removeAt(1);
list.print();
list.getSize();
list.printHead();
list.printTail();

list.print();
list.find(30);
list.find(22000);
list.findAt(1);
list.contains(10);
list.contains(22000);
list.pop();
// console.log(list.pop());
list.print();
