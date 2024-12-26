class Stack:
    def __init__(self):
        self.items = []

    def get_size(self):
        return len(self.items)

    def is_empty(self):
        return len(self.items) == 0
    
    # Time complexity - O(n) linear
    # Space complexity - O(1) constant
    def print_stack(self):
        if self.is_empty():
            print("Stack is empty")
        else:
            for item in reversed(self.items):
                print(item)

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Adds an element to the top of the stack and returns the new stack size
    def push(self, element):
        self.items.append(element)
        return self.get_size()

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Removes the element from the top of the stack and returns it
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None  # Return None if stack is empty

    # Time complexity - O(1) constant
    # Space complexity - O(1) constant
    # Returns the element on top of the stack without removing it
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None  # Return None if stack is empty

# Testing the Stack class
stack = Stack()

# Test is_empty on an empty stack
print("\nIs stack empty?", stack.is_empty())

# Push elements and check size
print("\nPushing 10:", stack.push(10))
print("Pushing 20:", stack.push(20))
print("Pushing 30:", stack.push(30))

# Print stack contents
print("\nStack contents:")
stack.print_stack()

# Check peek
print("\nPeek element:", stack.peek())

# Pop elements and check size
print("\nPopped element:", stack.pop())
print("Popped element:", stack.pop())

# Print stack contents after pops
print("\nStack contents after pops:")
stack.print_stack()

# Check is_empty on a non-empty stack
print("\nIs stack empty?", stack.is_empty())

# Pop remaining element
print("\nPopped element:", stack.pop())

# Check is_empty on an empty stack again
print("\nIs stack empty?", stack.is_empty())