// JavaScript program for implementation of Heap Sort using minHeap

function heapSort(array) {
  const length = array.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i);
  }

  // One by one extract an element from the heap
  for (let i = length - 1; i > 0; i--) {
    // Move the current root to the end
    swap(array, 0, i);

    // Call heapify on the reduced heap
    heapify(array, i, 0);
  }
}

// To heapify a subtree rooted with node i, which is an index in the array. n is the size of the heap
function heapify(array, length, index) {
  let smallest = index; // Initialize smallest as root
  const left = 2 * index + 1; // left = 2 * index + 1
  const right = 2 * index + 2; // right = 2 * index + 2

  // If the left child is smaller than the root
  if (left < length && array[left] < array[smallest]) {
    smallest = left;
  }

  // If the right child is smaller than the smallest so far
  if (right < length && array[right] < array[smallest]) {
    smallest = right;
  }

  // If the smallest is not the root
  if (smallest !== index) {
    swap(array, index, smallest);

    // Recursively heapify the affected sub-tree
    heapify(array, length, smallest);
  }
}

// Utility function to swap elements in the array
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// Utility function to print an array
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const numbers = [12, 11, 13, 5, 6, 7];
heapSort(numbers);

console.log("Sorted array is:");
printArray(numbers);
