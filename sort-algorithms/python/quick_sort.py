# We pick a pivot element and partition the array into two sub-arrays: 
# one with elements smaller than the pivot and one with elements greater 
# than the pivot. We repeat this process recursively on the sub-arrays 
# until the array is fully sorted.

#* Time Complexity
    # Ω(n log n) Best case
    # Θ(n log n) Average case
    # O(n^2) Worst case => If the array is already sorted.
#* Space Complexity - O(log n)
    # Θ(log n) Average case
    # O(n) Worst case => If the array is already sorted.
#* Unstable sort

#*                                              Quick Sort Diagram
#
#                                                  (pivot = 11) 
#                                 [11, 9, 29, 7, 2, 15, 28]quick_sort(arr, 0, 6)                                                                                
#                                                        |
#                                        [7, 9, 2, 11, 29, 15, 28] return end = 3
#                                          /                             \
#                                        /                                 \
#                                      /                                     \
#                                    /                                         \
#                                  /                                             \                  
#                    (pivot = 7)                                              (pivot = 29)
#           [7, 9, 2]quick_sort(arr, 0, 2)                          [29, 15, 28]quick_sort(arr, 4, 6) 
#                        |                                                         |
#                    [2, 7, 9] return end = 1                           [28, 15, 29] return end = 6
#                     /     \                                               /             \
#                   /         \                                           /                 \
#                 /             \                                       /                     \
#               /                 \                                   /                         \
#             /                     \                               /                             \
# [2]quick_sort(arr, 0, 0)  [9]quick_sort(arr, 2, 2)           (pivot = 28)                  (start < end)
#                                                      [28, 15]quick_sort(arr, 4, 5)  [undefined]quick_sort(arr, 7, 6)
#                                                                    |
#                                                           [15, 28] return 5
#                                                               /         \
#                                                             /             \
#                                                           /                 \
#                                                         /                     \
#                                                       /                         \
#                                               [15] quick_sort(arr, 4, 4) [28] quick_sort(arr, 5, 5)                               
# 
#                                                                                                                           
# Final Sorted Array:
# [2, 7, 9, 11, 15, 28, 29]


def swap(a, b, arr):
    if a != b: # Only swap if the indices are different
        tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp

# Partitions the array around a pivot element
def partition(elements, start, end):
    # Choose the first element as the pivot
    pivot_index = start
    pivot = elements[pivot_index]

    # Loop while the start index is less than the end index
    while start < end:
        # Move the start pointer to the right, until an element greater than the pivot is found
        while start < len(elements) and elements[start] <= pivot:
            start += 1

        # Move the end pointer to the left, until an element smaller than or equal to the pivot is found
        while elements[end] > pivot:
            end -= 1

        # If the start pointer is still to the left of the end pointer, swap the elements
        if start < end:
            swap(start, end, elements)

    # After the loop, place the pivot element in its correct position
    swap(pivot_index, end, elements)

    # Return the final position of the pivot element
    return end

def quick_sort(elements, start, end):
    # If the subarray has more than one element, continue sorting
    if start < end:
        pivot_index = partition(elements, start, end)
        quick_sort(elements, start, pivot_index - 1) # Recursively sort the left side (before the pivot)
        quick_sort(elements, pivot_index + 1, end) # Recursively sort the right side (after the pivot)


elements = [11, 9, 29, 7, 2, 15, 28]
quick_sort(elements, 0, len(elements) - 1)
print(elements)