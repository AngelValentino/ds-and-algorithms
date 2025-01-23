
#* Time Complexity
    # Ω(n) Best case => if the array is already sorted
    # Θ(n^2) Average case
    # O(n^2) Worst case
#* Space Complexity - O(1)
#* Stable sort
def bubble_sort(elements):
    size = len(elements)

    for i in range(size - 1):
        swapped = False

        for j in range(size - 1 - i):
            if elements[j] > elements[j + 1]:
                temp = elements[j]
                elements[j] = elements[j + 1]
                elements[j + 1] = temp
                swapped = True

        if not swapped:
            break


elements = [5, 9, 2, 1, 67, 34, 88, 34]

bubble_sort(elements)
print(elements)