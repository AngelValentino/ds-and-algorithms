
#?Linked Lists
    # Linked Lists efficiently manage memory allocation, track free memory blocks, and facilitate operations
    # in file systems. While slower to find elements compared to arrays (since each element must be accessed
    # sequentially, with no random access like in arrays), linked lists excel in quickly adding or removing 
    # elements, especially when using a tail pointer. Unlike arrays that require shifting contiguous memory blocks,
    # linked lists only need to adjust node pointers, resulting in more efficient performance.
    
    #* Linked lists are fundamental in implementing various data structures and applications such as:
        # - Stacks
        # - Queues
        # - Graphs
        # - Music playlists
        # - Video players

    #* SINGLY LINKED LIST
        # Each node in a singly linked list contains a value and a pointer/reference to the next node in the sequence.
        # The last node's pointer points to null, indicating the end of the list.

    #* DOUBLY LINKED LIST
        # Nodes in a doubly linked list have pointers to both the next and previous nodes.
        # This bidirectional linkage allows traversal in both forward and backward directions.
        # The list is typically managed with references to both the head (start) and tail (end) nodes,
        # initially set to null when the list is empty.

    #* CIRCULAR LINKED LIST
        # Similar to a doubly linked list, a circular linked list allows traversal in both directions.
        # However, in a circular linked list, the last node's next pointer points back to the first node (head),
        # creating a circular structure. This circular reference means the tail's next pointer points to the head,
        # and the head's previous pointer points to the tail, enabling continuous traversal in a loop.

    # NOTE: Using a tail pointer in a linked list enhances the efficiency of certain operations by improving their time complexity.
    # While it adds a small amount of memory overhead, it transforms the append operation from O(n) to O(1).
    # Implementing queues and stacks using linked lists is advantageous due to their dynamic size,
    # efficient insertions and deletions (especially when using a tail pointer), and lack of wasted space compared to arrays.
    # Linked lists allow elements to be added or removed dynamically, making them suitable for scenarios where the size
    # of the data structure varies frequently.

class Node:
    def __init__(self, data = None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def is_empty(self):
        return self.size == 0

    def get_size(self):
        return self.size
    
    #* Time complexity - O(n) linear
    #* Space complexity - O(n) linear
    def print_list(self):
        if self.is_empty():
            print("List is empty")
        else:
            current_node = self.head
            result = ''
            
            while current_node:
                if not current_node.next:
                    result += str(current_node.data) + ' --> None'
                else:
                    result += str(current_node.data) + ' --> '
                current_node = current_node.next
            
            print(result)

    #* Time complexity - O(1) constant
    #* Space complexity - O(1) constant
    def insert_at_front(self, data):
        node = Node(data)  # Create a new node with the given data
        
        # If the list is empty
        if self.is_empty():
            # Both head and tail should point to the new node
            self.head = node
            self.tail = node
        # If the list is not empty
        else:
            node.next = self.head  # Set the new node's next pointer to the current head
            self.head = node  # Update the head to point to the new node
        
        self.size += 1

    #* Time complexity - O(1) constant
    #* Space complexity - O(1) constant
    def insert_at_end(self, data):
        node = Node(data)  # Create a new node with the given data
       
        # If the list is empty
        if self.is_empty():
            self.head = node
            self.tail = node
        # If the list is not empty
        else:
            self.tail.next = node  # Set the current tail's next pointer to the new node
            self.tail = node  # Update the tail to point to the new node
        
        self.size += 1

    #* Time complexity - O(n) linear
    #* Space complexity - O(1) constant
    def insert_at(self, data, index):
        # Check if index is out of bounds or undefined
        if index < 0 or index > self.size:
            return None
        
        # Insert at the start
        if index == 0:
            self.insert_at_front(data)
        # Insert at the end
        elif index == self.size:
            self.insert_at_end(data)
        # Insert at a specific index
        else:
            node = Node(data)
            previous_node = self.head  # Start from the head of the list

            # Traverse the node list stopping just before the insertion point
            for _ in range(index - 1):
                previous_node = previous_node.next

            # Insert the new node between previous_node and previous_node.next
            node.next = previous_node.next
            previous_node.next = node
            self.size += 1

    #* Time complexity - O(1) constant
    #* Space complexity - O(1) constant
    def remove_from_front(self):
        if self.is_empty():
            return None
        
        data = self.head.data  # Store the data of the current head

        # If the list has only one node set both head and tail to None
        if self.size == 1:
            self.head = None
            self.tail = None
        # Remove head node
        else:
            self.head = self.head.next  # Update the head to point to the next node
        
        self.size -= 1
        return data

    #* Time complexity - O(n) linear
        # If we were using a doubly linked list we could improve the time
        # complexity to O(1) constant as we would have access to the previous node.
    #* Space complexity - O(1) constant
    def remove_from_end(self):
        if self.is_empty():
            return None
        
        data = self.tail.data  # Store the data of the current tail

        # If the list has only one node set both head and tail to None
        if self.size == 1:
            self.head = None
            self.tail = None
        # Traverse the list to find the node before the tail
        else:
            previous_node = self.head
            while previous_node.next != self.tail:
                previous_node = previous_node.next
            previous_node.next = None  # Set the next of the previous node to None
            self.tail = previous_node  # Update the tail to the previous node
        
        self.size -= 1
        return data

    #* Time complexity - O(n) linear
    #* Space complexity - O(1) constant
    def remove_from(self, index):
        # Check if the index is out of bounds or undefined
        if index < 0 or index >= self.size:
            return None

        # Remove the first node (head)
        if index == 0:
            return self.remove_from_front()
        # Remove the last node (tail)
        elif index == (self.size - 1):
            return self.remove_from_end()
        # Remove at a specific index
        else:
            previous_node = self.head  # Start from the head of the list

            # Traverse the list to find the node just before the one to be removed
            for _ in range(index - 1):
                previous_node = previous_node.next

            removed_node = previous_node.next  # Set the removed node to be the next node of the previous node
            previous_node.next = removed_node.next  # Update the next pointer of the previous node to skip the removed node
            self.size -= 1
            return removed_node.data


# Testing the LinkedList class
ll = LinkedList()

# Test inserting at the beginning
ll.insert_at_front(10)
ll.insert_at_front(20)
ll.insert_at_front(30)
print("\nAfter inserting at the beginning:")
ll.print_list()  # Expected output: 30 --> 20 --> 10 --> None

# Test inserting at the end
ll.insert_at_end(40)
ll.insert_at_end(50)
print("\nAfter inserting at the end:")
ll.print_list()  # Expected output: 30 --> 20 --> 10 --> 40 --> 50 --> None

# Test inserting at a specific index
ll.insert_at(25, 2)  # Insert 25 at index 2
print("\nAfter inserting at index 2:")
ll.print_list()  # Expected output: 30 --> 20 --> 25 --> 10 --> 40 --> 50 --> None

# Test removing from the front
removed_data = ll.remove_from_front()
print(f"\nRemoved from front: {removed_data}")
print("After removing from front:")
ll.print_list()  # Expected output: 20 --> 25 --> 10 --> 40 --> 50 --> None

# Test removing from the end
removed_data = ll.remove_from_end()
print(f"\nRemoved from end: {removed_data}")
print("After removing from end:")
ll.print_list()  # Expected output: 20 --> 25 --> 10 --> 40 --> None

# Test removing from a specific index
removed_data = ll.remove_from(1)  # Remove from index 1 (value 25)
print(f"\nRemoved from index 1: {removed_data}")
print("After removing from index 1:")
ll.print_list()  # Expected output: 20 --> 10 --> 40 --> None

# Test removing when the list is empty
ll.remove_from_front()  # Remove 20
ll.remove_from_end()  # Remove 40
ll.remove_from(0)  # Remove 10
print("\nAfter removing all elements:")
ll.print_list()  # Expected output: List is empty

# Test inserting and removing when the list is empty
ll.insert_at_end(100)
print("\nAfter inserting into empty list:")
ll.print_list()  # Expected output: 100 --> None