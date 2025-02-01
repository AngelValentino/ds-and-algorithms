# We divide the array into two sub-arrays until there's only one, 
# after that we start sorting the sub-arrays until we have the final 
# sorted array.

#* Time Complexity
    # Ω(n log n) Best case
    # Θ(n log n) Average case
    # O(n log n) Worst case
#* Space Complexity - O(n)
#* Stable sort

#*                        Merge Sort Diagram
#
#                    [11, 9, 29, 7, 2, 15, 28, 32] 
#                              /     \
#                            /         \
#                          /             \
#                        /                 \
#                [11, 9, 29, 7]      [2, 15, 28, 32]
#                     / \                  / \
#                   /     \              /     \
#                 /         \          /         \
#             [11, 9]     [29, 7]   [2, 15]    [28, 32] 
#               / \         / \       / \         / \
#             /     \     /     \   /     \     /     \ 
#           [11]    [9] [29]   [7][2]    [15] [28]   [32]
#             \     /     \     /   \     /     \     /              
#               \ /         \ /       \ /         \ /
#             [9, 11]     [7, 29]    [2, 15]    [28, 32]
#                 \          /          \          /
#                   \      /              \      / 
#                     \  /                  \  /
#                 [7, 9, 11, 29]        [2, 15, 28, 32]
#                        \                   /
#                          \               /          
#                            \           /
#                              \       /
#                     [2, 7, 9, 11, 15, 28, 29, 32]


def merge(left_arr, right_arr, arr):
    left_size = len(left_arr)
    right_size = len(right_arr)
    # Initialize indices for the merged array (i), left array (l), and right array (r)
    i = l = r = 0

    # Merge the arrays until we reach the end of one of them
    while l < left_size and r < right_size:
        # Compare the current element of left_arr with the current element of right_arr
        if left_arr[l] < right_arr[r]:
            # If left_arr[l] is smaller, place it in the merged array (arr)
            arr[i] = left_arr[l]
            l += 1
        else:
            # If right_arr[r] is smaller (or equal), place it in the merged array (arr)
            arr[i] = right_arr[r]
            r += 1
        # Move the index of the merged array forward to the next position
        i += 1

    # If there are any remaining elements in the left array, add them to the merged array
    while l < left_size:
        arr[i] = left_arr[l]
        l += 1
        i += 1

    # If there are any remaining elements in the right array, add them to the merged array
    while r < right_size:
        arr[i] = right_arr[r]
        r += 1
        i += 1


def merge_sort(arr):
    length = len(arr)
    # If the array has 1 or fewer elements, it's already sorted
    if length <= 1:
        return

    middle_index = length // 2
    left_arr = arr[:middle_index] # Slice the left half of the array
    right_arr = arr[middle_index:] # Slice the right half of the array

    merge_sort(left_arr) # Recursively sort the left half
    merge_sort(right_arr) # Recursively sort the right half
    merge(left_arr, right_arr, arr)  # Merge the two sorted halves back into the original array

    return arr


# Example usage:
print(merge_sort([11, 9, 29, 7, 2, 15, 28, 32]))