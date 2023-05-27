function createMaxHeap() {
  let heapSize = 0;
  let head = null;

  function createNode(value) {
    return { value, next: null };
  }

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
    return getLeftChildIndex(index) < heapSize;
  }

  function hasRightChild(index) {
    return getRightChildIndex(index) < heapSize;
  }

  function hasParent(index) {
    return getParentIndex(index) >= 0;
  }

  function leftChild(index) {
    let current = head;
    let count = 0;
    while (current !== null && count < getLeftChildIndex(index)) {
      current = current.next;
      count++;
    }
    return current ? current.value : null;
  }

  function rightChild(index) {
    let current = head;
    let count = 0;
    while (current !== null && count < getRightChildIndex(index)) {
      current = current.next;
      count++;
    }
    return current ? current.value : null;
  }

  function parent(index) {
    let current = head;
    let count = 0;
    while (current !== null && count < getParentIndex(index)) {
      current = current.next;
      count++;
    }
    return current ? current.value : null;
  }

  function swapNodes(nodeOne, nodeTwo) {
    const temp = nodeOne.value;
    nodeOne.value = nodeTwo.value;
    nodeTwo.value = temp;
  }

  function peek() {
    if (heapSize === 0) {
      return null;
    }
    return head.value;
  }

  function remove() {
    if (heapSize === 0) {
      return null;
    }
    const item = head.value;
    head.value = getNodeByIndex(heapSize - 1).value;
    deleteNodeByIndex(heapSize - 1);
    heapSize--;
    heapifyDown();
    return item;
  }

  function add(item) {
    const newNode = createNode(item);
    if (head === null) {
      head = newNode;
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    heapSize++;
    heapifyUp();
  }

  function deleteNodeByIndex(index) {
    if (index === 0) {
      head = head.next;
      return;
    }
    let current = head;
    let prev = null;
    let count = 0;
    while (current !== null && count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    if (prev !== null) {
      prev.next = current.next;
    }
  }

  function heapifyUp() {
    let index = heapSize - 1;
    while (hasParent(index) && parent(index) < getNodeByIndex(index).value) {
      const parentIndex = getParentIndex(index);
      const parent = getNodeByIndex(parentIndex);
      const currentNode = getNodeByIndex(index);
      swapNodes(parent, currentNode);
      index = parentIndex;
    }
  }

  function heapifyDown() {
    let index = 0;
    while (hasLeftChild(index)) {
      let largerChildIndex = getLeftChildIndex(index);
      if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
        largerChildIndex = getRightChildIndex(index);
      }
      if (
        getNodeByIndex(index).value > getNodeByIndex(largerChildIndex).value
      ) {
        break;
      } else {
        const currentNode = getNodeByIndex(index);
        const largerChildNode = getNodeByIndex(largerChildIndex);
        swapNodes(currentNode, largerChildNode);
      }
      index = largerChildIndex;
    }
  }

  function getNodeByIndex(index) {
    let current = head;
    let count = 0;
    while (current !== null && count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  function printHeap() {
    let current = head;
    let heapStr = "";
    while (current !== null) {
      heapStr += current.value + " ";
      current = current.next;
    }
    console.log(heapStr.trim());
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
heap.add(100);
heap.add(40);

// Printing the Heap
heap.printHeap();

// Peeking And Removing Top Element
console.log(heap.peek());
console.log(heap.remove());

// Printing the Heap
// After Deletion.
heap.printHeap();

/*
THE OUTPUT HEAP IS LIKE THIS

            100
            / \
          40   60
         / \   / \
        10 30 15 50
*/