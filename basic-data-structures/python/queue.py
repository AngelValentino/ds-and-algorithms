class Queue:
    def __init__(self):
        self.items = {}
        self.head = 0
        self.tail = 0
        
    def get_size(self):
        return self.tail - self.head
    
    def is_empty(self):
        return self.get_size() == 0

    # Time complexity - O(n) linear
    # Space complexity - O(1) constant
    def print(self):
        if self.is_empty():
            print("Queue is empty")
        else:
            for n in range(self.head, self.tail):
                print(self.items[n])

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Adds an element to the end of the queue
    def enqueue(self, element):
        self.items[self.tail] = element
        self.tail += 1
        return self.get_size()

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Removes and returns the first element added to the queue
    def dequeue(self):
        if self.is_empty():
            return None
        removed = self.items[self.head]
        del self.items[self.head]
        self.head += 1

        # Reset to avoid memory bloat
        if self.head == self.tail:
            self.head = 0
            self.tail = 0
            self.items = {}

        return removed

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Returns the first element added to the queue without removing it
    def peek(self):
        if self.is_empty():
            return None
        return self.items[self.head]

# Testing the Queue class
queue = Queue()
print("Queue size after enqueuing 10:", queue.enqueue(10))
print("Queue size after enqueuing 20:", queue.enqueue(20))
print("Queue size after enqueuing 30:", queue.enqueue(30))

print("\nFirst element (peek):", queue.peek())

print("\nQueue contents:")
queue.print()

print("\nDequeueing:", queue.dequeue())
print("Queue size after dequeue:", queue.get_size())

print("\nQueue contents after dequeue:")
queue.print()

print("\nDequeueing:", queue.dequeue())
print("Queue size after dequeue:", queue.get_size())

print("\nQueue contents after dequeue:")
queue.print()

print("\nDequeueing:", queue.dequeue())
print("Queue size after dequeue:", queue.get_size())

print("\nQueue contents after dequeue:")
queue.print()