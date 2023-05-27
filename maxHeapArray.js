function createMaxHeap() {
  const heap = [];

  function getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  function getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  function getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  function hasLeftChild(index) {
    return getLeftChildIndex(index) < heap.length;
  }

  function hasRightChild(index) {
    return getRightChildIndex(index) < heap.length;
  }

  function hasParent(index) {
    return getParentIndex(index) >= 0;
  }

  function leftChild(index) {
    return heap[getLeftChildIndex(index)];
  }

  function rightChild(index) {
    return heap[getRightChildIndex(index)];
  }

  function parent(index) {
    return heap[getParentIndex(index)];
  }

  function swap(indexOne, indexTwo) {
    const temp = heap[indexOne];
    heap[indexOne] = heap[indexTwo];
    heap[indexTwo] = temp;
  }

  function peek() {
    if (heap.length === 0) {
      return null;
    }
    return heap[0];
  }

  function remove() {
    if (heap.length === 0) {
      return null;
    }
    const item = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    heapifyDown();
    return item;
  }

  function add(item) {
    heap.push(item);
    heapifyUp();
  }

  function heapifyUp() {
    let index = heap.length - 1;
    while (hasParent(index) && parent(index) < heap[index]) {
      swap(getParentIndex(index), index);
      index = getParentIndex(index);
    }
  }

  function heapifyDown() {
    let index = 0;
    while (hasLeftChild(index)) {
      let largerChildIndex = getLeftChildIndex(index);
      if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
        largerChildIndex = getRightChildIndex(index);
      }
      if (heap[index] > heap[largerChildIndex]) {
        break;
      } else {
        swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  function printHeap() {
    const output = heap.join(" ");
    console.log(output);
  }

  return {
    add,
    peek,
    remove,
    printHeap,
  };
}

// Creating the Heap
const heap = createMaxHeap();

// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(60);
heap.add(100);

// Printing the Heap
// heap.printHeap();

// Peeking And Removing Top Element
// console.log(heap.peek());
// console.log(heap.remove());

// Printing the Heap After Deletion.
heap.printHeap();

/* 
THE OUTPUT HEAP IS LIKE THIS

            100
            / \
          40   60
         / \   / \
        10 30 15 50
*/
