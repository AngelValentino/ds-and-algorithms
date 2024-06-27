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
    if (this.isEmpty()) {
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

//* STACK USING AN ARRAY
class StackArr {
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
    if (this.isEmpty()) {
      console.log('Stack is empty');
    } 
    else {
      for (let i = this.items.length - 1; i >= 0; i--) {
        console.log(this.items[i]);
      }
    }
  }
}

const stackArr = new StackArr();

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

//* QUEUE USING AN ARRAY
class QueueArr {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }
  // Remove and return the first element from the queue
  dequeue() {
    return this.items.shift();
  }
  // Return the first element from the queue without removing it
  peek() {
    return !this.isEmpty() ? this.items[0] : null;
  }
  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Get the number of elements in the queue
  size() {
    return this.items.length;
  }
  // Print all elements in the queue
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
    }
    else {
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[i]);
      }
    }
  }
}

const queueArr = new QueueArr();

//* CIRCULAR QUEUE
/* A Circular Queue is an extension of a standard queue where the last element is 
connected to the first element, creating a fixed-length circle. This structure 
optimizes memory usage by reusing positions after elements are dequeued, ensuring 
efficient data handling. It's commonly used in scenarios requiring continuous 
data processing and fixed memory allocation, such as buffering data in real-time 
applications, managing requests in operating systems, and implementing circular 
buffers in hardware for seamless data flow management.*/
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  // Check if the queue is full
  isFull() {
    return this.currentLength === this.capacity;
  }
  // Check if the queue is empty
  isEmpty() {
    return this.currentLength === 0;
  }
  // Return the current number of elements in the queue
  size() {
    return this.currentLength;
  }
  // Add an element to the rear of the queue
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity; // Increment rear pointer using modulo to wrap around
      this.items[this.rear] = item; // Insert the new item
      this.currentLength++;

      if (this.front === -1) this.front = this.rear; // If this is the first element, set front pointer
    }
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null; // Clear the front position
    this.front = (this.front + 1) % this.capacity; // Move front pointer, wrap around if necessary
    this.currentLength -= 1;

    // Reset pointers if queue becomes empty
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item; // Return the dequeued item
  }

  // Return the front element of the queue without removing it
  peek() {
    return !this.isEmpty() ? this.items[this.front] : null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } 
    else {
      let i;
      let str = "";
      // Loop through the queue from front to rear, wrapping around to the beginning of the array
      for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i]; // Add the last element
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);

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