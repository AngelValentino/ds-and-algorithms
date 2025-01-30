
#* Time Complexity
    # Ω(n log n) Best case
    # Θ(n log n) Average case
    # O(n^2) Worst case => If the array is already sorted.
#* Space Complexity - O(log n)
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
    if a != b:
        tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp

def partition(elements, start, end):
    pivot_index = start
    pivot = elements[pivot_index]

    while start < end:
        while start < len(elements) and elements[start] <= pivot:
            start += 1

        while elements[end] > pivot:
            end -= 1

        if start < end:
            swap(start, end, elements)

    swap(pivot_index, end, elements)

    return end

def quick_sort(elements, start, end):
    if start < end:
        pivot_index = partition(elements, start, end)
        quick_sort(elements, start, pivot_index - 1)
        quick_sort(elements, pivot_index + 1, end)


elements = [11, 9, 29, 7, 2, 15, 28]
quick_sort(elements, 0, len(elements) - 1)
print(elements)