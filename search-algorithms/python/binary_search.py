
#* Time Complexity
    # Ω(1) Best case
    # Θ(log n) Average case
    # O(log n) Worst case
#* Space Complexity - O(1)
def binary_search(arr, target):
    left_index = 0
    right_index = len(arr) - 1

    while left_index <= right_index:
        mid_index = (left_index + right_index) // 2
        if arr[mid_index] == target:
            return mid_index
        
        if arr[mid_index] < target:
            left_index = mid_index + 1
        else:
            right_index = mid_index - 1

    return -1

#* Space Complexity - O(log n)
def binary_search_recursive(arr, target, left_index, right_index):
    if left_index > right_index:
        return -1

    mid_index = (left_index + right_index) // 2

    if arr[mid_index] == target:
        return mid_index

    if arr[mid_index] < target:
        left_index = mid_index + 1
    else:
        right_index = mid_index - 1

    return binary_search_recursive(arr, target, left_index, right_index)

# Test cases
arr = list(range(1, 101))  # Sorted array from 1 to 100
target_found = 15 # Element that exists in the array
target_not_found = 250 # Element that does not exist in the array

# Test Iterative Binary Search
print("Testing Iterative Binary Search:")
print(f"Target {target_found} found at index:", binary_search(arr, target_found)) # return the index of 14
print(f"Target {target_not_found} found at index:", binary_search(arr, target_not_found)) # return -1

# Test Recursive Binary Search
print("\nTesting Recursive Binary Search:")
print(f"Target {target_found} found at index:", binary_search_recursive(arr, target_found, 0, len(arr) - 1)) # return the index of 14
print(f"Target {target_not_found} found at index:", binary_search_recursive(arr, target_not_found, 0, len(arr) - 1)) # return -1