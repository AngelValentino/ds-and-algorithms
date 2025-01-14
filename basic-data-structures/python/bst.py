class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def is_empty(self):
        return self.root == None
    
    def __insert_node(self, current_root, new_node):
        # New node value is less than root value
        if (new_node.value < current_root.value):
            # Check if the left pointer of the current traversed root is empty
            if (current_root.left == None):
                # Assign the new node to the current_root left pointer
                current_root.left = new_node
            else:
                # Keep searching from the left pointer node as new root
                self.__insert_node(current_root.left, new_node)
        # New node value is greater than or equal to root value
        else:
            # Check if the right pointer of the current traversed root is empty
            if (current_root.right == None):
                # Assign the new node to the current_root right pointer
                current_root.right = new_node
            else:
                # Keep searching from the right pointer node as new root
                self.__insert_node(current_root.right, new_node)

    def insert(self, value):
        new_node = Node(value)

        # If the tree is empty assign new_node to the tree's root
        if (self.is_empty()):
            self.root = new_node
        # Else call insert node with root and newNode
        else:
            self.__insert_node(self.root, new_node)

    def includes(self, value):
        current_node = self.root

        # Traverse the tree until current_node is not None
        while current_node is not None:
            # If the current node has the value we're looking for, return True
            if current_node.value == value:
                return True
            # Move to the left node if the value is smaller
            if value < current_node.value:
                current_node = current_node.left
            # Move to the right node if the value is larger
            else:
                current_node = current_node.right
        
        return False
    
    # * Depth First Search (DFS)
    # - The DFS algorithm starts at the root node and explores as far as possible 
    #   along each branch before backtracking.
    #?  - - -
    # - Performs a pre-order traversal starting from the given root node.
    # - Visits each node's value in a top-down manner: current root -> left subtree -> right subtree.
    # - Useful for creating a copy of a tree (serialization).
    def DFS_pre_order(self):
        if self.is_empty(): return []
        results = []

        def traverse(current_node):
            results.append(current_node.value) # Push the value of the current node
            
            if current_node.left: 
                traverse(current_node.left) # Recursively traverse the left subtree

            if current_node.right: 
                traverse(current_node.right) # Recursively traverse the right subtree

        traverse(self.root) # Inital call with the tree root

        return results

    # - Perform a post-order traversal starting from the given root node
    # - Visits each node's value in a bottom up manner: left subtree -> right subtree -> current root
    # - Useful for deleting a tree from leaf to root.
    def DFS_post_order(self):
        if self.is_empty(): return []
        results = []

        def traverse(current_node):
            if current_node.left: 
                traverse(current_node.left) # Recursively traverse the left subtree

            if current_node.right: 
                traverse(current_node.right) # Recursively traverse the right subtree

            results.append(current_node.value) # Push the value of the current node

        traverse(self.root) # Inital call with the tree root

        return results

    # - Perform an in-order traversal starting from the given root node
    # - Visits each node's value in a bottom-up manner: left subtree -> current root -> right subtree
    # - This traversal is commonly used in binary search trees (BSTs) to retrieve values in a sorted order (ascending).
    def DFS_in_order(self):
        if self.is_empty(): return []
        results = []

        def traverse(current_node):
            if current_node.left: 
                traverse(current_node.left) # Recursively traverse the left subtree

            results.append(current_node.value) # Push the value of the current node

            if current_node.right: 
                traverse(current_node.right) # Recursively traverse the right subtree

        traverse(self.root) # Inital call with the tree root

        return results

    # * Breadth-First Search (BFS)
    # - The BFS algorithm starts at the root node and explores all nodes 
    #   at the current level before moving on to the next level.
    # - It retrieves data according to its inherent sequence, 
    #   accessing elements in the tree in the order they were added.
    def BFS(self):
        if self.is_empty(): return []
        current_node = self.root
        queue = [] # Initialize a "queue" to keep track of nodes to visit
        results = [] # Initialize an array to store the values of the visited nodes
        queue.append(current_node)

        while len(queue) > 0:
            # Remove the first node from the queue and process it
            current_node = queue.pop(0)
            results.append(current_node.value)
            # If the current node has a left child, add it to the queue
            if current_node.left: 
                queue.append(current_node.left)
            # If the current node has a right child, add it to the queue
            if current_node.right: 
                queue.append(current_node.right)

        return results
        
    def min():
        pass

    def max():
        pass


# Create a BinarySearchTree instance
bst = BinarySearchTree()

# Insert nodes into the tree
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(18)

# Test includes method (checking if a value exists in the tree)
print(bst.includes(7))   # Expected output: True
print(bst.includes(20))  # Expected output: False

# Test DFS pre-order traversal
print("DFS Pre-order:", bst.DFS_pre_order())  # Expected output: [10, 5, 3, 7, 15, 13, 18]

# Test DFS post-order traversal
print("DFS Post-order:", bst.DFS_post_order())  # Expected output: [3, 7, 5, 13, 18, 15, 10]

# Test DFS in-order traversal
print("DFS In-order:", bst.DFS_in_order())  # Expected output: [3, 5, 7, 10, 13, 15, 18]

# Test BFS traversal
print("BFS:", bst.BFS())  # Expected output: [10, 5, 15, 3, 7, 13, 18]
