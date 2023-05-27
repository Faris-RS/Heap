function findKLargestElements(arr, size, k) {
    const minHeap = [];
    
    for (let i = 0; i < k; i++) {
      minHeap.push(arr[i]);
    }
    
    for (let i = k; i < size; i++) {
      minHeap.sort((a, b) => a - b);
      
      if (minHeap[minHeap.length - 3] > arr[i]) continue;
      
      minHeap.reverse();
      minHeap.pop();
      minHeap.reverse();
      minHeap.push(arr[i]);
    }
    
    for (const element of minHeap) {
      console.log(element + " ");
    }
  }
  
  // Driver code
  const arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
  const size = arr.length;
  const k = 3;
  
  findKLargestElements(arr, size, k);
  