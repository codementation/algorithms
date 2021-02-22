// Selection Sort
//
// The selection sort algorithm sorts the array by starting
// at position 0 and compares each subsequent element in the list
// to the current element in the iteration and swaps it accordingly
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
//   O(n^2) best, worst, and average
//
// Space Complexity:
// O(1)
//
// Implementation
// We will use two loops to sort the arrays.
// In first loop we will loop untill the second to last element
// since we need to compare it with last element.
// In the second loop we will start from 1 element after first loop’s element
// untill the last element of the array.
// Depending upon the sorting order we will swap the elements.

const selectionSort = (arr = [], order = 'ascending') => {
    const end = arr.length;

    const direction = {
        ascending: (x, y) => {
            return x < y;
        },
        decending: (x, y) => {
            return x > y;
        },
    };

    // Loop until second to the last elenent
    for (let i = 0; i < end - 1; i++) {
        // Loop one after i index ito the end
        for (let j = i + 1; j < end; j++) {
            // If j-th element < || > i-th  element then swap
            if (direction[order](arr[i], arr[j]) ) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    // Return the sorted array
    return arr;
};

let list = [8, 4, 7, 8, 3, 6, 2, 1, 9, 5];

console.log('sort ascending: ' + selectionSort(list, 'ascending'));
console.log('sort decending: ' + selectionSort(list, 'decending'));
