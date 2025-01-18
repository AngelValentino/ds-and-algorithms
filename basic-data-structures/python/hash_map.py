
#? Hash map/Hash table 
    # A hash table, or hash map, is a data structure used to store key-value pairs with
    # average constant time complexity "Θ(1)" for insertion, deletion, and lookup operations.
    # It utilizes an array and calculates the index for each key based on a hash function 
    # and the array's size to avoid going over the predetermined boundaries. The hash function
    # plays a crucial role as it must be deterministic, meaning that for a given key, it always 
    # produces the same index. 

    #* Hash tables are used in various applications such as:
        # - Databases for fast data retrieval
        # - Compilers to manage variables efficiently
        # - Secure password storage
        # - Optimizing web caching
        # - Managing unique items
        # - Balancing loads in distributed systems for better scalability

    # Hash tables can experience collisions, where different keys' hash codes result in the same index.
    # There are two main strategies to handle collisions:
    #* Open Addressing: 
        # Continuously probes the array for the next available empty index to place the data.
    #* Closed Addressing (Chaining): 
        # Uses a bucket (often implemented as a linked list or another data structure)
        # to store multiple entries at the same index.

    # NOTE: The load factor, defined as the number of items stored divided by the size of the array, 
    # is an important consideration in hash table design. It is generally good practice to maintain 
    # a load factor of around 75%, as this minimizes collisions while making efficient use of memory.

class HashMap:
    def __init__(self, size):
        self.table = [None] * size
        self.size = size

    #* Time complexity
        # O(1) constant for integers keys 
        # O(n) linear for string keys
    #* Space complexity - O(1) constant
    # Simple hashing function
    def hash(self, key):
        if isinstance(key, int):
            return key % self.size  # For numeric keys, use modulo operation
        elif isinstance(key, str):
            result = sum(ord(char) for char in key)  # Calculate numeric hash value for string keys
            return result % self.size  # Map the hash value to a valid index
        else:
            raise ValueError("Invalid key type. Key must be either an integer or a string.")

    #* Time Complexity 
        # Ω(1) Best case => no collisions
        # Θ(1) Average case => Assuming a good hashing function with a uniform distribution and few collisions
        # O(n) Worst case => collisions
    #* Space Complexity - O(1) constant
    # Set key/value pair
    def set(self, key, value):
        index = self.hash(key)
        bucket = self.table[index]

        # Add or update key/value pair in bucket
        if bucket:
            # Check if the key already exists in the bucket
            for item in bucket:
                if item[0] == key:
                    item[1] = value  # Update the value if the key exists
                    return
            bucket.append([key, value]) # Add new key/value pair
        # Create the bucket with a 2D list of key/value pairs
        else:
            self.table[index] = [[key, value]]  

    #* Time Complexity
        # Ω(1) Best case => Key is found early in the bucket
        #Θ(1) Average case => Assuming low collision rates and a good hash function
        #O(n) Worst case => Key at the end of a long chain due to collisions
    #* Space Complexity - O(1)
    # Get value by key
    def get(self, key):
        index = self.hash(key)
        bucket = self.table[index]

        if bucket:
            for item in bucket:
                if item[0] == key:
                    return item[1]  # Return the corresponding value
        return None  # Key does not exist

    #* Time Complexity 
        # Ω(1) Best case => Key is found early in the bucket
        # Θ(1) Average case => Assuming low collision rates and a good hash function
        # O(n) Worst case => Key at the end of a long chain due to collisions
    #* Space Complexity - O(1) constant
    # Remove key/value pair
    def remove(self, key):
        index = self.hash(key)
        bucket = self.table[index]

        if bucket:
            for i, item in enumerate(bucket):
                if item[0] == key:
                    removed_item = bucket.pop(i)  # Remove the key/value pair
                    return removed_item[1]  # Return the removed value
        return None  # Key does not exist

    #* Time Complexity - O(n) linear
    #* Space Complexity - O(1) constant
    # Display hash map
    def display(self):
        for i, bucket in enumerate(self.table):
            if bucket:
                print(f"Index {i}: {bucket}")
            else:
                print(f"Index {i}: None")

# Testing the HashMap implementation

# Create a HashMap instance with a fixed size of 10
hashmap = HashMap(10)

# Test valid set operations with more key-value pairs
hashmap.set(1, 'one')
hashmap.set('apple', 'fruit')
hashmap.set(23, 'twenty-three')
hashmap.set('banana', 'fruit')
hashmap.set(45, 'forty-five')
hashmap.set('cherry', 'fruit')
hashmap.set(17, 'seventeen')
hashmap.set('grape', 'fruit')
print()

# 2. Test valid get operations for various keys
print(f"Get value for key 1: {hashmap.get(1)}")  # Expected output: "one"
print(f"Get value for key 'apple': {hashmap.get('apple')}")  # Expected output: "fruit"
print(f"Get value for key 23: {hashmap.get(23)}")  # Expected output: "twenty-three"
print(f"Get value for key 'banana': {hashmap.get('banana')}")  # Expected output: "fruit"
print(f"Get value for key 45: {hashmap.get(45)}")  # Expected output: "forty-five"
print(f"Get value for key 'cherry': {hashmap.get('cherry')}")  # Expected output: "fruit"
print(f"Get value for key 17: {hashmap.get(17)}")  # Expected output: "seventeen"
print(f"Get value for key 'grape': {hashmap.get('grape')}")  # Expected output: "fruit"
print()

# Test valid remove operations with various keys
print(f"Remove value for key 'banana': {hashmap.remove('banana')}")  # Expected output: "fruit"
print(f"Remove value for key 23: {hashmap.remove(23)}")  # Expected output: "twenty-three"
print()

# 4. Test get operations after removal
print(f"Get value for key 'banana' after removal: {hashmap.get('banana')}")  # Expected output: None
print(f"Get value for key 23 after removal: {hashmap.get(23)}")  # Expected output: None
print()

# 5. Test invalid set operation with incorrect key type (list)
try:
    hashmap.set([1, 2, 3], "invalid")  # Invalid key (list)
except ValueError as e:
    print(f"Error on set: {e}")  # Expected error message
print()

# 6. Test invalid get operation with incorrect key type (float)
try:
    hashmap.get(3.14)  # Invalid key (float)
except ValueError as e:
    print(f"Error on get: {e}")  # Expected error message
print()

# 7. Test invalid remove operation with incorrect key type (dictionary)
try:
    hashmap.remove({"key": "value"})  # Invalid key (dictionary)
except ValueError as e:
    print(f"Error on remove: {e}")  # Expected error message
print()

# 8. Test display method to see current state of the table
hashmap.display()  # Display the current hash table
print()