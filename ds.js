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