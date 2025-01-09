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
    
    def DFS_pre_order():
        pass

    def DFS_post_order():
        pass

    def DFS_in_order():
        pass

    def BFS():
        pass

    def min():
        pass

    def max():
        pass

bst = BinarySearchTree()

bst.root = Node(10)
bst.root.left = Node(5)
bst.root.right = Node(15)

# Test contains function
print(bst.includes(5))  # True
print(bst.includes(10))  # True
print(bst.includes(15))  # True
print(bst.includes(20))  # False