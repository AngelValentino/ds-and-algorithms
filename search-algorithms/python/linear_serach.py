
#* Time Complexity
    # Ω(1) Best Case 
    # Θ(n) Average case
    # O(n) Worst case
#* Space Complexity - O(1)
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i
    return -1

# Test cases for Linear Search
arr = list(range(1, 101)) # Sorted array from 1 to 100
target_found = 15 # Element that exists in the array
target_not_found = 250 # Element that does not exist in the array

# Test Linear Search
print("Testing Linear Search:")
print(f"Target {target_found} found at index:", linear_search(arr, target_found)) # Should return the index of 14
print(f"Target {target_not_found} found at index:", linear_search(arr, target_not_found)) # Should return -1