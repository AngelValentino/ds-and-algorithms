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

  getSize() {
    return this.size;
  }
  // Checks if the stack is empty
  isEmpty() {
    return this.size === 0;
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

  getSize() {
    return this.items.length;
  }
  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
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

  getSize() {
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

  // Get the number of elements in the queue
  getSize() {
    return this.items.length;
  }
  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
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
buffers in hardware for seamless data flow management. */

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
  getSize() {
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
  // Print all elements in the queue from front to rear
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

//? LINKED LIST

/* Linked lists are fundamental in implementing various data structures and applications 
such as stacks, queues, graphs, music playlists and video players. They efficiently 
manage memory allocation, track free memory blocks, and facilitate operations in file 
systems. While slower to find elements compared to arrays, as each element must be accessed 
sequentially (No random access like an Array), linked lists excel in quickly adding or 
removing elements (especially when using a tail pointer). Unlike arrays, that require 
shifting contiguous memory blocks, linked lists only need to adjust node pointers, 
resulting in efficient performance. */

//* SINGLY LINKED LIST
/* Each node in a singly linked list contains a value and a pointer/reference to the next 
node in the sequence. The last node's pointer points to null, indicating the end of the list. */

//* DOUBLY LINKED LIST
/* Nodes in a doubly linked list have pointers to both the next and the previous nodes. 
This bidirectional linkage allows traversal in both forward and backward directions. 
The list is typically managed with references to both the head (start) and tail (end) nodes, 
initially set to null when the list is empty. */ 

//* CIRCULAR LINKED LIST
/* Similar to a doubly linked list, a circular linked list allows traversal in both directions. 
However, in a circular linked list, the last node's next pointer points back to the first 
node (head), creating a circular structure. This circular reference means the tail's next 
pointer points to the head, and the head's previous pointer points to the tail, enabling 
continuous traversal in a loop. */

/* NOTE: We can also use a tail property to improve linked list methods time complexity.
Implementing queues and stacks using linked lists is advantageous due to their dynamic size, 
efficient insertions and deletions (especially when using a tail pointer), and lack of wasted space compared to arrays.
Linked lists allow elements to be added or removed dynamically, making them suitable for 
scenarios where the size of the data structure varies frequently. */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // Add value to the start of the list
  prepend(value) {
    const node = new Node(value);
    /* Sets the new node's next pointer to the current head
    NOTE: if list is empty, node.next will be defaulted to null as it is the
    default value of the constructor */
    node.next = this.head; 
    this.head = node; // Update the head to point to the new node
    this.size++;
  }
  // Add value to the end of the list
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } 
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.size++;
  }
  // Insert value at a specified index in list
  insert(value, index) {
    // Check if index is out of bounds or undefined
    if (index < 0 || index > this.size || index === undefined) {
      return;
    } 
    // Insert at the beginning of the list
    else if (index === 0) {
      this.prepend(value);
    } 
    // Insert at a specific index
    else {
      const node = new Node(value);
      let previousNode = this.head; // Start from the head of the list

      // Traverse the node list stopping just before the insertion point
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }

      // Insert the new node between previousNode and previousNode.next
      node.next = previousNode.next;
      previousNode.next = node;
      this.size++;
    }
  }
  // Remove from specified index
  removeFrom(index) {
    // Check if the index is out of bounds or undefined
    if (index === undefined || index < 0 || index >= this.size) return;
    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } 
    else {
      let previousNode = this.head; // Start from the head of the list

      // Traverse the list to find the node just before the one to be removed
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }

      removedNode = previousNode.next; // The node to be removed is the next node of the previous node
      previousNode.next = removedNode.next; // Update the next pointer of the previous node to skip the removed node
    }

    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) return;

    // Remove the first node and return the removed value
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } 
    // Remove a node in between or end
    let previousNode = this.head;

    while (previousNode.next && previousNode.next.value !== value) {
      previousNode = previousNode.next;
    }

    // Check if the value has been found
    if (previousNode.next) {
      const removedNode = previousNode.next; // The node to be removed is the next node of the previous node
      previousNode.next = removedNode.next; // Update the next pointer of the previous node to skip the removed node
      this.size--;
      return value;
    }

    // The node has not been found
    return null;
  }
  // Return the index in which the value is found, return -1 if it isn't in the list
  search(value) {
    if (this.isEmpty()) return -1;
    let currentNode = this.head;
    let i = 0;

    while(currentNode) {
      if (currentNode.value === value) return i; // Return index if value is found
      currentNode = currentNode.next;
      i++;
    }

    return -1; // Return -1 if value is not found in the list
  }
  // Search by index and return the value at that index
  searchByIndex(index) {
    if (index === undefined || index < 0 || index >= this.size) return;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }
  // Reverse a linked list
  reverse() {
    if (this.isEmpty()) return;

    let previousNode = null; // Initialize previousNode to null, as it will be the new tail of the reversed list
    let currentNode = this.head;

    while(currentNode) {
      let next = currentNode.next; // Store the next node in the original list before reversing
      currentNode.next = previousNode; // Reverse the next pointer of the current node to point to the previous node
      
      // Move forward in the list: Shift previousNode and currentNode one step forward
      previousNode = currentNode; // Move previousNode to the current node
      currentNode = next; // Move currentNode to the next node in the original list
    }

    this.head = previousNode; // Update the head to point to the last node of the original list
  }
  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } 
    else {
      let currentNode = this.head;
      let result = '';
  
      while(currentNode) {
        if (!currentNode.next) {
          result += currentNode.value + ' --> Null';
        }
        else {
          result += currentNode.value + ' --> ';
        }
        currentNode = currentNode.next;
      }
  
      console.log(result);
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();

//? END OF LINKED LIST

//TODO

//? HASH TABLE

/*
A hash table, or hash map, is a data structure used to store key-value pairs with 
average constant time complexity "Θ(1)" for insertion, deletion, and lookup operations. 
It utilizes an array and calculates the index for each key based on a hash function 
and the array's size to not go over the predetermined boundaries. The hash function plays 
a crucial role as it must be deterministic, meaning that for a given key, it always 
produces the same index. Hash tables are used in databases for fast data retrieval, 
in compilers to manage variables efficiently and for secure password storage. 
They optimize web caching, manage unique items, and balance loads in distributed 
systems for better scalability.

Hash tables can experience collisions, where different keys hash code converts to same index. 
There are two main strategies to handle collisions:
*Open Addressing: Continuously probes the array for the next available empty index to place the data.
*Closed Addressing (Chaining): Uses a bucket (often implemented as a linked list or another data structure) 
*to store multiple entries at the same index.

The load factor, defined as the number of items stored divided by the size of the array, 
is an important consideration in hash table design. It is generally good practice to maintain 
a load factor of around 75%, as this minimizes collisions while making efficient use of memory.
*/

// Simple example of a Hash map implementation
class HashMap {
  constructor(size) {
    this.table = new Array(size)
    this.size = size;
  }

  // Simple hashing function
  hash(key) {
    if (typeof key === 'number') {
      return Math.floor(key % this.size); // For numeric keys, use modulo operation
    } 
    else if (typeof key === 'string') {
      let result = 0;
      for (let i = 0; i < key.length; i++) {
        result += key.charCodeAt(i); // Calculate a numeric hash value for string keys
      }
      return Math.floor(result % this.size); // Map the hash value to a valid index
    }
  }
  // Set key/value pair
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    // Add or update key/value pair in bucket
    if (bucket) {
      /* If bucket exists, check if the key already exists in the bucket, if it does
      change the matching key/value pair value, else push a new key/value pair to the bucket. */
      const sameKeyItem = bucket.find(item => item[0] === key);
      sameKeyItem ? sameKeyItem[1] = value : bucket.push([key, value]);
    } 
    // Create the bucket with a 2D Array of key/value pairs
    else {
      this.table[index] = [[key, value]];
    }
  }
  // Get value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      // If bucket exists, find the the item that matches the given key in the bucket
      const sameKeyItem = bucket.find(item => item[0] === key); 
      if (sameKeyItem) return sameKeyItem[1]; // If key exists, return its corresponding value
    }
    // If key does not exist, return undefined (implicitly)
  }
  // Remove key/value pair
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const indexToRemove = bucket.findIndex(item => item[0] === key); // If bucket exists, find the index of the key in the bucket
      // If key exists, remove the key/value pair from the bucket
      if (indexToRemove !== -1) {
        const removedItem = bucket.splice(indexToRemove, 1)[0];
        return removedItem[1]; // Return the removed value
      }
    }
    // If key does not exist, return undefined (implicitly)
  }
  // Display hash table
  display() {
    for (let i = 0; i < this.size; i++) {
      if(this.table[i]) console.log(this.table[i]);
    }
  }
}

const hashMap = new HashMap(50);

//? END OF HASH TABLE