/* STACK */
// Last In First Out (LIFO)
// The last element added into the stack is the first element removed. Like a stack of books, plates or pancakes.
// They can be found in the undo/redo feature.

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    if (this.size === 0) return undefined;
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
  // The get syntax binds an object property to a function that will be called when that property is looked up.
  get length() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  printStack() {
    console.log(this.storage);
  }
}

// Using javascript array methods.
class Stack2 {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) return false;
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    console.log(this.items);
  }
}

const stack = new Stack();

/* END OF STACK */

/* QUEUE */
// First In First Out (FIFO) 
// The first element added to the queue is the first element that's being removed from it. Like an actually queue of people waiting at the theater, the first one that arrived is the first one to leave.

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    if (this.tail - this.head === 0) {
      this.head = 0;
      this.tail = 0;
    }
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    if (this.tail - this.head === 0) {
      this.head = 0;
      this.tail = 0;
      return;
    }
    const removed = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return removed;
  }
  peek() {
    return this.elements[this.head];
  }
  get size() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();

/* END OF QUEUE */

/* LINKED LIST */
// Compared to an array it's slower to find an element, as it has to search all nodes in order(no random access like an array). But is much faster to add or remove elements as there's no need to move the other elements location in memory like an array, that'a allocated in a contiguous block of memory, we just have to point the node to the desired one.
// The singly linked list nodes point to the next one, the last one points to null.
// The double linked list nodes point to the previous one and the next none, the tail and head(previous) point to null.
// the circular linked list works like the dobule one, but the head and the tail point at each other instead of null.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    if (!this.head) {
      this.head = new ListNode(val);
    } 
    else {
      this.insertEnd(val);
    }
  }
  insertHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertEnd(val) {
    const newNode = new ListNode(val);
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
  }
  insertAtIndex(val, index) {
    let previousNode;
    let currentNode = this.head;
    let indexCounter = 1;
    let newNode = new ListNode(val);

    while (indexCounter <= index) {
      previousNode = currentNode;
      currentNode = previousNode.next;
      indexCounter++;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
  }
  print() {
    let tempNode = this.head;
    let result = '';
    while (tempNode) {
      if (!tempNode.next) {
        result += tempNode.val + ' --> Null';
      } 
      else {
        result += tempNode.val + ' --> ';
      }
      tempNode = tempNode.next;
    }
    return result;
  }
  exists(val) {
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.val === val) return true;
      tempNode = tempNode.next;
    }
    return false;
  }
  removeFirst() {
    let tempNode = this.head;
    this.head = tempNode.next;
  }
  removeLast(prevNode) {
    prevNode.next = null;
  }
  removeBetween(prevNode, node) {
    prevNode.next = node.next
  }
  remove(val) {
    let currentNode = this.head;
    let previousNode = this.head;

    if (this.head) {
      while(currentNode) {
        if (currentNode.val === val) {
          if (currentNode === this.head) {
            this.removeFirst();
            return;
          } 
          else if (currentNode.next === null) {
            this.removeLast(previousNode);
            return;
          }
          else {
            this.removeBetween(previousNode, currentNode);
            return;
          }
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
}

const list = new SinglyLinkedList();

/* END OF LINKED LIST */