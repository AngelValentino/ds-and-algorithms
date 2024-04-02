/* STACK */

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
    if (!this.size) return undefined;
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
}

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
    return !this.items.length;
  }
  printStack() {
    console.log(this.items);
  }
}

// It doesn't use length or array methods.
class Stack3 {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count;
  }
  pop() {
    if (!this.count) return undefined;
    const deletedItem = this.items[this.count - 1];
    this.count--;
    return deletedItem;
  }
  peek() {
    return this.items[this.count - 1];
  }
  isEmpty() {
    return !this.count;
  }
  printStack() {
    let items = [];
    for (let i = 0; i < this.count; i++) {
      items[i] = this.items[i];
    }
    console.log(items);
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = [];
    this.count = 0;
  }
}

const stack = new Stack2();

/* END OF STACK */