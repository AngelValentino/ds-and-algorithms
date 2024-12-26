class Stack:
    def __init__(self):
        self.items = []

    def get_size(self):
        return len(self.items)

    # Checks if the stack is empty
    def is_empty(self):
        return len(self.items) == 0

    # Adds an element to the top of the stack and returns the new stack size
    def push(self, element):
        self.items.append(element)
        return self.get_size()

    # Removes the element from the top of the stack and returns it
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None  # Return None if stack is empty

    # Returns the element on top of the stack without removing it
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None  # Return None if stack is empty

    # Prints all elements of the stack
    def print_stack(self):
        if self.is_empty():
            print("Stack is empty")
        else:
            for item in reversed(self.items):
                print(item)


stack = Stack()

# Test is_empty on an empty stack
print("Is stack empty?", stack.is_empty())

# Push elements and check size
print("Pushing 10", stack.push(10))
print("Pushing 20", stack.push(20))
print("Pushing 30", stack.push(30))

# Print stack contents
print("Stack contents:")
stack.print_stack()

# Check peek
print("Peek element:", stack.peek())

# Pop elements and check size
print("Popped element:", stack.pop())
print("Popped element:", stack.pop())

# Print stack contents after pops
print("Stack contents after pops:")
stack.print_stack()

# Check is_empty on a non-empty stack
print("Is stack empty?", stack.is_empty())

# Pop remaining element
print("Popped element:", stack.pop())

# Check is_empty on an empty stack again
print("Is stack empty?", stack.is_empty())