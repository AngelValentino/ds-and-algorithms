
#* Time Complexity
    # Ω(n^2) Best case
    # Θ(n^2) Average case
    # O(n^2) Worst case
#* Space Complexity - O(1)
#* Unstable sort
def selection_sort(arr):
    size = len(arr)

    for i in range(size - 1):
        min_index = i
        
        for j in range(min_index + 1, size):
            if arr[j] < arr[min_index]:
                min_index = j
        
        if i != min_index:
            temp = arr[i]
            arr[i] = arr[min_index]
            arr[min_index] = temp


elements = [78, 12, 15, 8, 61, 53, 23, 27]

selection_sort(elements)
print(elements)