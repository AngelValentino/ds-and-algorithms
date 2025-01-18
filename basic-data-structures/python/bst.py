
#? Tree
    # The Tree Data Structure is a non-linear data structure in which a collection of elements 
    # known as nodes are connected to each other via edges such that there exists exactly one 
    # path between any two nodes.
    
    #* Trees, such as Binary Search Trees (BSTs), are used in various applications, including:
        # - Databases for efficient searching
        # - File systems for organizing files
        # - Network routing algorithms
        # - The Document Object Model (DOM) in web development, which is a type of tree structure.

#? Binary Tree
    # A Binary Tree is a hierarchical data structure in which each node has at most two children, 
    # referred to as the left child and the right child.

#? Binary Search Tree (BST)
    # A Binary Search Tree (BST) is a data structure used for organizing and storing data in a sorted manner. 
    # Each node in a BST has at most two children, a left child and a right child. 
    # The left child contains values less than the parent node, while the right child contains values greater than 
    # the parent node. This hierarchical structure allows for efficient searching, insertion, and deletion operations.

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

    #* Time complexity 
        # (Balanced tree): O(log n) logarithmic
        # (Skewed Tree): O(n) linear
    #* Space complexity
        # (Balanced tree): O(log n) logarithmic
        # (Skewed Tree): O(n) linear
    def insert(self, value):
        new_node = Node(value)

        # If the tree is empty assign new_node to the tree's root
        if (self.is_empty()):
            self.root = new_node
        # Else call insert node with root and newNode
        else:
            self.__insert_node(self.root, new_node)

    #* Time complexity 
        # (Balanced tree)
            # Best case: Ω(1) linear
            # Worst case: O(log n) logarithmic
        # (Skewed Tree)
            # Best case: Ω(1) linear
            # Worst case: O(n) constant
    #* Space complexity - O(1) constant
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
    
    #* Depth First Search (DFS)
    # - The DFS algorithm starts at the root node and explores as far as possible 
    #   along each branch before backtracking.
    #* Time complexity for DFS methods - O(n) linear
        # It must visit each node at least once
    #* Space complexity for DFS methods - O(n) linear 
        # It returns the result array containing n elements
    #? - - -
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

    #* Breadth-First Search (BFS)
    #* Time complexity - O(n) linear
        # It must visit each node at least once
    #* Space complexity - O(n) linear 
        # It returns the result array containing n elements
    #? - - -
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
    
    #* Time complexity for min() and max() methods
        # (Balanced tree)
            # Best case: Ω(1) linear
            # Worst case: O(log n) logarithmic
        # (Skewed Tree)
            # Best case: Ω(1) linear
            # Worst case: O(n) constant
    #* Space complexity for min() and max() methods - O(1) constant
    def min(self, current_root = None):
        if current_root is None:
            current_root = self.root
            
        while current_root.left is not None:
            # Recursively search for the minimum value in the left subtree
            current_root = current_root.left
    
        return current_root.value
    
    def max(self, current_root = None):
        if current_root is None:
            current_root = self.root
            
        while current_root.right is not None:
            # Recursively search for the maximum value in the right subtree
            current_root = current_root.right
            
        return current_root.value

    def __delete_node(self, current_root, value):
        # If the current_root is None, return current_root(base case)
        if current_root is None:
            return current_root

        # If the value to be deleted is less than the current_root value, recursively delete from the left subtree
        if value < current_root.value:
            current_root.left = self.__delete_node(current_root.left, value)
        # If the value to be deleted is greater than the current_root value, recursively delete from the right subtree
        elif value > current_root.value:
            current_root.right = self.__delete_node(current_root.right, value)
        # currentRoot value matches the value to be deleted
        else:
            # Case 1: Node to be deleted has no children (leaf node), return None
            if current_root.left is None and current_root.right is None:
                return None
            # Case 2: Node to be deleted has no left child, return its right child
            elif current_root.left is None:
                return current_root.right
            # Case 3: Node to be deleted has no right child, return its left child
            elif current_root.right is None:
                return current_root.left
            # Case 4: Node to be deleted has both left and right children
            else:
                # Find the minimum value in the right subtree (inorder successor), replace current_node value with it
                current_root.value = self.min(current_root.right)
                # Recursively delete the inorder successor node from the right subtree
                current_root.right = self.__delete_node(current_root.right, current_root.value)
        
        # Return the updated current_root after deletion or traversal
        return current_root

    #* Time complexity 
        # (Balanced tree): O(log n) logarithmic
        # (Skewed Tree): O(n) constant
    #* Space complexity
        # (Balanced tree): O(log n) logarithmic
        # (Skewed Tree): O(n) constant
    def delete(self, value):
        # Deletes a node with the specified value from the tree
        self.root = self.__delete_node(self.root, value)


# Create a BinarySearchTree instance
bst = BinarySearchTree()

# Insert nodes into the tree
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(4)
bst.insert(7)
bst.insert(6)
bst.insert(13)
bst.insert(18)

print("BFS:", bst.BFS())
# Test includes method (checking if a value exists in the tree)
print("BST includes 7?", bst.includes(7))   # Expected output: True
print("BST includes 20?", bst.includes(20))  # Expected output: False

print()

# Test DFS pre-order traversal
print("DFS Pre-order:", bst.DFS_pre_order())  # Expected output: [10, 5, 3, 7, 15, 13, 18]
# Test DFS post-order traversal
print("DFS Post-order:", bst.DFS_post_order())  # Expected output: [3, 7, 5, 13, 18, 15, 10]
# Test DFS in-order traversal
print("DFS In-order:", bst.DFS_in_order())  # Expected output: [3, 5, 7, 10, 13, 15, 18]
# Test BFS traversal
print("BFS:", bst.BFS())  # Expected output: [10, 5, 15, 3, 7, 13, 18]

print()

# Test min and max methods
print("Min value:", bst.min())  # Expected output: 3 (the smallest value in the tree)
print("Max value:", bst.max())  # Expected output: 18 (the largest value in the tree)

print()

# Test DFS in-order traversal before deletion
print("DFS In-order before deletion:", bst.DFS_in_order())  # Expected output: [3, 4, 5, 6, 7, 10, 13, 15, 18]

# Test delete method for various cases
# Case 1: Deleting a leaf node (18)
bst.delete(18)
print("DFS In-order after deleting 18 (leaf):", bst.DFS_in_order())  # Expected output: [3, 4, 5, 6, 7, 10, 13, 15]

# Case 2: Deleting a node with one left child (has a left child 6)
bst.delete(7)
print("DFS In-order after deleting 7 (one child):", bst.DFS_in_order())  # Expected output: [3, 4, 5, 6, 10, 13, 15]

# Case 3: Deleting a node with one right child (3 has a right child 4)
bst.delete(3)
print("DFS In-order after deleting 3 (one child):", bst.DFS_in_order())  # Expected output: [4, 5, 6, 10, 13, 15]

# Case 4: Deleting a node with two children (10 has left child 5 and right child 15)
bst.delete(10)
print("DFS In-order after deleting 10 (two children):", bst.DFS_in_order())  # Expected output: [4, 5, 6, 13, 15]

# Case 5: Test deleting a non-existent node (100)
bst.delete(100)
print("DFS In-order after trying to delete 100 (non-existent):", bst.DFS_in_order())  # Expected output: [4, 5, 6, 13, 15]

print("BFS:", bst.BFS())