// Insertion Sort
//
// The insertion sort algorithm sorts the array by starting
// at position 1 and compares each element in the iteration
// to all previous elements in the iteration and swaps it according
// to the specified sort order
//
// It repeats this until all the elements are sorted in the given order.
//
// While sorting it maintains two subarrays.
// 1). Arrays with sorted elements.
// 2). Arrays with unsorted elements.

// Characteristics of Selection Sort.
// This is the most simplest and the slowest sorting algorithm.
// Is in-place and stable
//
// Time Complexity:
//
//   n(n-1)
//   -------
//      2
//
//   O(n^2) worst
//   O(n^2) average
//   O(n)   best (when array is already sorder)
//
// Space Complexity:
// O(n)
//
// Implementation
//
// A recursive function will take the array and an index as input.
// It will iterate through all the elements before the current index
// and swap the elements based on the sorting order.
// When the index gets to index 0 we terminate the recursion.
// Otherwise we recurse to walk to the beginning of the array
// Repeat for every element to the end of the array

const insertionSort = (arr = [], index, order = 'ascending') => {
    // assign the last elements index
    const end = arr.length - 1;

    // Object to hold respective comparison functions
    const direction = {
        ascending: (x, y) => {
            return x < y;
        },
        decending: (x, y) => {
            return x > y;
        },
    };

    // We will be comparing the current index
    // with the previous index to start
    let currInd = index;
    let prevInd = index - 1;

    if (index <= end) {
        // Compare current elements to all previous elements to the beginning
        while (prevInd >= 0 && direction[order](arr[currInd], arr[prevInd])) {
            // Use desrtucturing assignment to swap according to order
            [arr[prevInd], arr[currInd]] = [arr[currInd], arr[prevInd]];
            prevInd--;
            // rinse and repeat
            insertionSort(arr, prevInd, order);
        }

        insertionSort(arr, index + 1, order);
    }
};

let list = [8, 4, 7, 8, 3, 6, 2, 1, 9, 5];

insertionSort(list, 1, 'ascending');
console.log('sort ascending: ' + list);

insertionSort(list, 1, 'decending');
console.log('sort decending: ' + list);
