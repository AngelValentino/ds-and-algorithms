
#* Time Complexity
    # Ω(n) Best case => if the array is already sorted
    # Θ(n^2) Average case
    # O(n^2) Worst case
#* Space Complexity - O(1)
#* Stable sort
def insertion_sort(elements):
    for i in range(1, len(elements)):
        temp = elements[i]
        j = i - 1

        while j >= 0 and elements[j] > temp:
            elements[j + 1] = elements[j]
            j = j - 1

        elements[j + 1] = temp


elements = [11, 9, 29, 7, 2, 15, 28]
insertion_sort(elements)
print(elements)