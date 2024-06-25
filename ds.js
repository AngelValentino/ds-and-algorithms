//? STACK

//* Last In First Out (LIFO)
/* The Stack operates on a Last In, First Out (LIFO) principle, 
where the most recently added element is the first to be removed, 
similar to a stack of books, plates, or pancakes. Stacks are commonly 
used in various applications such as the undo/redo feature, 
the JavaScript callstack, and browser history management. */

class Stack {
  constructor() {
    this.items = {};
    this.size = 0;
  }

  // Adds an element to the top of the stack and returns the new stack size
  push(element) {
    this.size++;
    this.items[this.size] = element;
    return this.size;
  }
  // Removes an element to the top of the stack and returns it
  pop() {
    if (this.size === 0) return undefined;
    const removed = this.items[this.size];
    delete this.items[this.size];
    this.size--;
    return removed;
  }
  // Returns the element on top of the stack without removing it
  peek() {
    return this.items[this.size];
  }
  // Checks if the stack is empty
  isEmpty() {
    return this.size === 0;
  }
  // Prints all elements of the stack
  print() {
    if (this.size === 0) {
      console.log('Stack is empty');
    } 
    else {
      for (let i = this.size; i >= 1; i--) {
        console.log(this.items[i]);
      }
    }
  }
}

const stack = new Stack();

//* Stack using an Array
class StackUsingArr {
  constructor() {
    this.items = [];
  }

  // Adds an element to the top of the stack and returns the new stack size
  push(element) {
    this.items.push(element);
    return this.items.length;
  }
  // Removes the element from the top of the stack and returns it
  pop() {
    if (this.items.length === 0) return undefined;
    return this.items.pop();
  }
  // Returns the element on top of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }
  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Prints all elements of the stack
  print() {
    if (this.items.length === 0) {
      console.log('Stack is empty');
    } 
    else {
      for (let i = this.items.length - 1; i >= 0; i--) {
        console.log(this.items[i]);
      }
    }
  }
}

const stackUsingArr = new StackUsingArr();

//? END OF STACK

//TODO

//? QUEUE

//* First In First Out (FIFO) 
/* A queue is a data structure that operates on a First-In-First-Out (FIFO) 
principle. This means that the first element added to the queue is the first 
one to be removed, much like a line of people waiting at a theater. 
The person who arrives first is the first to enter the theater. 
Queues are widely used in various practical applications. In operating systems, 
queues manage process scheduling and task scheduling, ensuring that processes 
are executed in the order they arrive. In networking, routers and switches 
use queues to manage data packets waiting to be transmitted, and print spoolers 
use queues to handle print jobs in the order they are received. */

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  /* The get syntax binds an object property to a function that is invoked 
  automatically when that property is accessed. This allows us to use 
  Queue.size instead of Queue.size() to retrieve the value associated with 
  the property, providing a more intuitive interface. */
  get size() {
    return this.tail - this.head;
  }
  // Adds an element to the end of the queue
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
    return this.size;
  }
  // Removes and returns the first element added to the queue
  dequeue() {
    if (this.size === 0) return;
    const removed = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return removed;
  }
  // Returns the first element added to the queue without removing it
  peek() {
    return this.items[this.head];
  }
  // Checks if the queue is empty
  isEmpty() {
    return this.size === 0;
  }
  // Prints all elements of the queue
  print() {
    if (this.size === 0) {
      console.log('Queue is empty');
    } 
    else {
      for (let i = this.head; i < this.tail; i++) {
        console.log(this.items[i]);
      }
    }
  }
}

const queue = new Queue();

//? END OF QUEUE

//TODO

/* LINKED LIST */
// It's slower to find an element compared to an array, as it has to search all nodes in order(no random access like an array). But is much faster to add or remove elements as there's no need to move the other elements location in memory like an array, that'a allocated in a contiguous block of memory, we just have to point the node to the desired one.
// The singly linked list nodes point to the next one, the last one points to null.
// The double linked list nodes point to the previous one and the next none, the tail and head(previous) point to null.
// The circular linked list works like the dobule one, but the head and the tail point at each other instead of null.

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