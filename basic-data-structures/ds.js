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
    if (this.size === 0) return;
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
    return this.getSize();
  }
  // Removes and returns the first element added to the queue
  dequeue() {
    if (this.isEmpty()) return;
    const removed = this.items[this.head];
    delete this.items[this.head];
    this.head++;

    // Reset to avoid memory bloat
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }

    return removed;
  }
  // Returns the first element added to the queue without removing it
  peek() {
    if (this.isEmpty()) return;
    return this.items[this.head];
  }
  // Checks if the queue is empty
  isEmpty() {
    return this.getSize() === 0;
  }
  // Prints all elements of the queue
  print() {
    if (this.isEmpty()) {
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

/* NOTE: Using a tail pointer in a linked list enhances the efficiency of certain operations by 
improving their time complexity. While it does add a small amount of memory overhead, it transforms 
the append operation from O(n) to O(1).
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
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // Add a value to the start of the list
  prepend(value) {
    const node = new Node(value); // Create a new node with the given value
    // If the list is empty 
    if (this.isEmpty()) {
      // Both head and tail should point to the new node
      this.tail = node;
      this.head = node;
    } 
    // If the list is not empty 
    else {
      node.next = this.head; // Set the new node's next pointer to the current head
      this.head = node; // Update the head to point to the new node
    }
    this.size++;
  }
  // Add a value to the end of the list
  append(value) {
    const node = new Node(value); // Create a new node with the given value
    // If the list is empty 
    if (this.isEmpty()) {
       // Both head and tail should point to the new node
      this.head = node;
      this.tail = node;
    } 
    // If the list is not empty 
    else {
      this.tail.next = node; // Set the current tail's next pointer to the new node
      this.tail = node; // Update the tail to point to the new node
    }
    this.size++;
  }
  // Insert a value at a specified index in list
  insert(value, index) {
    // Check if index is out of bounds or undefined
    if (index === undefined || index < 0 || index > this.size) return;
    // Insert at the start
    if (index === 0) {
      this.prepend(value);
    } 
    // Insert at the end
    else if (index === this.size) {
      this.append(value);
    }
    //Insert at a specific index
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
  // Remove a value from the start of the list
  removeFromFront() {
    if (this.isEmpty()) return;
    const value = this.head.value; // Store the value of the current head
    this.head = this.head.next; // Update the head to point to the next node
    this.size--;
    if (this.isEmpty()) this.tail = null; // If the list becomes empty, update the tail to null
    return value;
  }
  // Remove a value from the end of the list
  removeFromEnd() {
    if (this.isEmpty()) return;
    const value = this.tail.value; // Store the value of the current tail
    // If the list has only one node set both head and tail to null
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } 
    else {
      // Traverse the list to find the node before the tail
      let previousNode = this.head;
      while (previousNode.next !== this.tail) {
        previousNode = previousNode.next;
      }
      previousNode.next = null; // Set the next of the previous node to null
      this.tail = previousNode; // Update the tail to the previous node
    }
    this.size--;
    return value;
  }
  // Remove from a specified index
  removeFrom(index) {
    // Check if the index is out of bounds or undefined
    if (index === undefined || index < 0 || index >= this.size) return;

    // Remove the first node (head)
    if (index === 0) {
      return this.removeFromFront();

    } 
    // Remove the last node (tail)
    else if (index === this.size - 1) {
      return this.removeFromEnd();
    } 
    // Remove at a specific index
    else {
      let previousNode = this.head; // Start from the head of the list

      // Traverse the list to find the node just before the one to be removed
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }

      const removedNode = previousNode.next; // Set the removed node to be the next node of the previous node
      previousNode.next = removedNode.next; // Update the next pointer of the previous node to skip the removed node
      this.size--;
      return removedNode.value;
    }
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    // Remove the first node if head.value and value match
    if (this.head.value === value) {
      return this.removeFromFront();
    } 
    // Remove the last node if tail.value and value match
    else if (this.tail.value === value) {
      return this.removeFromEnd();
    }
    // Traverse the list to find the node with the specified value
    else {
      let previousNode = this.head;
      while (previousNode.next && previousNode.next.value !== value) {
        previousNode = previousNode.next;
      }

      // If the value was found, remove the node and return the value
      if (previousNode.next) {
        const removedNode = previousNode.next; // Set the removed node to be the next node of the previous node
        previousNode.next = removedNode.next; // Update the next pointer of the previous node to skip the removed node
        this.size--;
        return value;
      }

      return null; // Return null if the value was not found
    }
  }
  // Return the index in which the value is found, return -1 if it isn't in the list
  search(value) {
    if (this.isEmpty()) return -1;
    
    // Return index 0 if head.value and value match
    if (this.head.value === value) {
      return 0;
    } 
    // Return the index of the tail if head.tail and value match
    else if (this.tail.value === value) {
      return this.size - 1;
    }

    // Traverse the list to find the specific value
    let currentNode = this.head;
    let index = 0;
    while(currentNode) {
      if (currentNode.value === value) return index; // Return index if value is found
      currentNode = currentNode.next;
      index++;
    }

    return -1; // Return -1 if value has not been found in the list
  }
  // Search by index and return the value at the specified index
  searchByIndex(index) {
    // Check if index is out of bound or undefined
    if (index === undefined || index < 0 || index >= this.size) return null;
    // If it's the first index return the head's value
    if (index === 0) {
      return this.head.value;
    } 
    // If it's the last index return the tail's value
    else if (index === this.size - 1) {
      return this.tail.value;
    }
    
    // Traverse the list to find the value at the specified index
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }
  // Reverse a linked list
  reverse() {
    if (this.isEmpty()) return;

    let current = this.head; // Initialize the current node to the head of the list
    let previousNode = null;
    let next = null; // Temporarily stores the next node during traversal
    // Traverse and reverse the linked list
    while (current) {
      next = current.next; // Store the next node
      current.next = previousNode; // Reverse the current node's next pointer to point to the previous node
      previousNode = current;  // Move the previousNode pointer to the current node
      current = next;  // Move to the next node in the original list
    }

    // After the loop, previousNode is the new head of the reversed list
    this.tail = this.head; // The original head becomes the new tail of the reversed list
    this.head = previousNode; // Update the head to the new head (which was the last node in the original list)
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

// TODO

//? BINARY SEARCH TREE

//* Tree
/* The Tree Data Structure is a non-linear data structure in which a collection of elements 
known as nodes are connected to each other via edges such that there exists exactly one 
path between any two nodes. Trees, such as Binary Search Trees (BSTs), are used in databases 
for efficient searching, file systems for organizing files, and network routing algorithms. 
The Document Object Model (DOM) used in web development is a type of tree structure. */

//* Binary Tree
/* A Binary Tree Data Structure is a hierarchical data structure in which each node has 
at most two children, referred to as the left child and the right child. */

//* Binary Search Tree (BST)
/* A Binary Search Tree is a data structure used in computer science for organizing 
and storing data in a sorted manner. Each node in a Binary Search Tree has at most 
two children, a left child and a right child, with the left child containing values 
less than the parent node and the right child containing values greater than the 
parent node. This hierarchical structure allows for efficient searching, insertion 
and deletion operations on the data stored in the tree. */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // Left pointer
    this.right = null; // Right pointer
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Checks if tree is empty
  isEmpty() {
    return this.root === null;
  }
  // Insert TreeNode helper function
  insertNode(root, newNode) {
    // New node value is less than root value
    if (newNode.value < root.value) {
      // Check if the left pointer of the root(at start) or subtree is empty
      if (root.left === null) {
        root.left = newNode; // Assign the new node to the root's left pointer
      } 
      // If the left pointer of the root(at start) or subtree is not empty
      else {
        // Call insert node with the left node of root and the newNode
        this.insertNode(root.left, newNode);
      }
    } 
    // New node value is greater than or equal to root value
    else {
      // Check if the right pointer of the root(at start) or subtree is empty
      if (root.right === null) {
        root.right = newNode; // Assign the new node to the root's right pointer
      } 
      // If the right pointer of the root(at start) or subtree is not empty
      else {
        // Call insert node with the right node of root and the newNode
        this.insertNode(root.right, newNode);
      }
    }
  }
  // Insert a node with a given value
  insert(value) {
    const newNode = new TreeNode(value);

    // If tree is empty assign newNode to the tree root
    if (this.isEmpty()) {
      this.root = newNode;
    } 
    // Else call insert node with root and newNode
    else {
      this.insertNode(this.root, newNode);
    }
  }
  // Check if tree contains a value
  contains(value, root = this.root) {
    // Check if root or subtree are empty
    if (!root) return false;

    // Root or subtree are not empty

    // Check if the root value is equal to the contained value
    if (root.value === value) {
      return true; 
    } 
    // Check if the value is less than the root value
    else if (value < root.value) {
      // If it is, call contains with the value and the left node of the root
      return this.contains(value, root.left);
    } 
    // Check if the value is greater than the root value
    else {
      // If it is, call contains with the value and the right node of the root
      return this.contains(value, root.right);
    }
  }
  // * Depth First Search (DFS)
  // - The DFS algorithm starts at the root node and explores as far as possible 
  //   along each branch before backtracking.
  //? - - -
  // - Performs a pre-order traversal starting from the given root node.
  // - In pre-order traversal, it visits nodes in the order: current root -> left subtree -> right subtree.
  // - DFS is useful for creating a copy of a tree (serialization).
  DFSPreOrder() {
    if (this.isEmpty()) return []; // Return an empty array if the tree is empty
    let results = [];

    (function traverse(currentNode) {
      results.push(currentNode.value); // Push the value of the current node
      if (currentNode.left) traverse(currentNode.left); // Recursively traverse the left subtree
      if (currentNode.right) traverse(currentNode.right); // Recursively traverse the right subtree
    })(this.root) // Initial call with the tree root

    return results;
  }
  // Perform a post-order traversal starting from the given root node
  // Visits each node's value in a bottom up manner: left subtree -> right subtree -> current root
  // Useful for deleting a tree from leaf to root.
  DFSPostOrder() {
    if (this.isEmpty()) return []; // Return an empty array if the tree is empty
    let results = [];

    (function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left); // Recursively traverse the left subtree
      if (currentNode.right) traverse(currentNode.right); // Recursively traverse the right subtree
      results.push(currentNode.value); // Push the value of the current node
    })(this.root) // Initial call with the tree root

    return results;
  }
  // Perform an in-order traversal starting from the given root node
  // Visits each node's value in a bottom up manner: left subtree -> current root -> right subtree
  // This traversal is commonly used in binary search trees (BSTs) to retrieve values in a sorted order (ascending).
  DFSInOrder() {
    if (this.isEmpty()) return []; // Return an empty array if the tree is empty
    let results = [];

    (function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left); // Recursively traverse the left subtree
      results.push(currentNode.value); // Push the value of the current node
      if (currentNode.right) traverse(currentNode.right); // Recursively traverse the right subtree
    })(this.root) // Initial call with the tree root

    return results;
  }
  // * Breadth-First Search (BFS)
  // - The BFS algorithm starts at the root node and explores all nodes 
  //   at the current level before moving on to the next level.
  // - It retrieves data according to its inherent sequence, 
  //   accessing elements in the tree in the order they were added.
  BFS() {
    if (this.isEmpty()) return []; // Return an empty array if the tree is empty
    let currentNode = this.root; // Start with the root node
    const queue = []; // Initialize a "queue" to keep track of nodes to visit
    const results = []; // Initialize an array to store the values of nodes in level order
    queue.push(currentNode); // Add the root node to the queue

    while(queue.length) {
      currentNode = queue.shift(); // Remove the first node from the queue and process it
      results.push(currentNode.value); // Add the value of the current node to the results array
      // If the current node has a left child, add it to the queue
      if (currentNode.left) queue.push(currentNode.left);
      // If the current node has a right child, add it to the queue
      if (currentNode.right) queue.push(currentNode.right);
    }

    return results; // Return the array of values in level order
  }
  // Find the minimum value in the tree
  min(root = this.root) {
    // Base case: If there is no left child, the current node is the minimum
    if (!root.left) {
      return root.value;
    } 
    // Recursively search for the minimum value in the left subtree
    else {
      return this.min(root.left);
    } 
  }
  // Find the maximum value in the tree
  max(root = this.root) {
    // Base case: If there is no right child, the current node is the maximum
    if (!root.right) {
      return root.value;
    } 
    // Recursively search for the maximum value in the right subtree
    else {
      return this.max(root.right)
    }
  }
  // Delete helper function
  deleteNode(root, value) {
    // If the root is null return null (base case)
    if (root === null) return root;

    // If the value to be deleted is less than the root value, recursively delete from the left subtree
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } 
    // If the value to be deleted is greater than the root value, recursively delete from the right subtree
    else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } 
    // If the root value matches the value to be deleted.
    else {
      // Case 1: Node to be deleted has no children (leaf node), return null
      if (!root.left && !root.right) {
        return null;
      }
      // Case 2: Node to be deleted has no left child, return its right child
      if (!root.left) {
        return root.right;
      } 
      // Case 3: Node to be deleted has no right child, return its left child
      else if (!root.right) {
        return root.left;
      }
      // Case 4: Node to be deleted has both left and right children
      // Find the minimum value in the right subtree (successor), replace current node's value with it,
      // and recursively delete the successor node from the right subtree
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    // Return the updated root after deletion or traversal
    return root;
  }
  // Deletes a node with the specified value from the tree
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
}

const bst = new BinarySearchTree();

//? END OF BINARY SEARCH TREE

//TODO

//? GRAPH

/* The Graph Data Structure is a collection of vertices connected by edges, 
representing relationships between entities. Graph algorithms manipulate and analyze 
graphs, solving problems like finding the shortest path or detecting cycles.

Graphs are widely used in the real world to model relationships and connections. 
Common applications include social networks, where nodes represent individuals and 
edges represent relationships; transportation networks, which map routes and connections 
between locations; Google Maps, which represents roads and intersections; and web page 
ranking algorithms like Google's PageRank, which model the internet as a graph of web 
pages and hyperlinks.

An adjacency list stores a graph's edges with lists of neighbors, ideal for sparse graphs 
due to its space efficiency. In contrast, an adjacency matrix uses a 2D array for direct
O(1) edge lookup but consumes more space, making it better suited for dense graphs. 

In graph theory, a dense graph has edges close to the maximum possible, while a sparse 
graph has edges close to the minimum possible.*/

class Graph {
  constructor() {
    // Initialize an empty adjacency list to store graph connections
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    // Only add the vertex if it does not exist in the adjacency list
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    // Ensure both vertices exist in the graph
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    // Add each vertex to the other's adjacency set (undirected edge)
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    // Check if each vertex exists in the adjacency list before removing the edge
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }
  // Remove a vertex from the graph
  removeVertex(vertex) {
    // Return if the vertex does not exist
    if (!this.adjacencyList[vertex]) return;
    // Remove all edges connected to the vertex
    for (const adjacencyVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex,adjacencyVertex);
    }
    // Delete the vertex from the adjacency list
    delete this.adjacencyList[vertex];
  }
  // Check if there is an edge between two vertices
  hasEdge(vertex1, vertex2) {
    // Ensure both vertices exist and check if they are in each other's adjacency set
    return this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1);
  }
  // Display the graph's adjacency list
  display() {
    // Log the vertex and its connections
    for (const vertex in this.adjacencyList) {
      console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]].join(', '));
    }
  }
}

const graph = new Graph();

//? END OF GRAPH