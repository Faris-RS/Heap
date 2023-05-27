function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function insertNode(head, value) {
  const newNode = createNode(value);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  return head;
}

function findKLargestElements(head, k) {
  if (!head || k === 0) {
    return;
  }

  let current = head;
  let kLargestElements = [];
  while (current) {
    if (kLargestElements.length < k) {
      kLargestElements.push(current.value);
    } else {
      let minIndex = 0;
      for (let i = 1; i < kLargestElements.length; i++) {
        if (kLargestElements[i] < kLargestElements[minIndex]) {
          minIndex = i;
        }
      }
      if (current.value > kLargestElements[minIndex]) {
        kLargestElements[minIndex] = current.value;
      }
    }
    current = current.next;
  }

  for (const element of kLargestElements) {
    console.log(element + " ");
  }
}

let head = null;
head = insertNode(head, 11);
head = insertNode(head, 3);
head = insertNode(head, 2);
head = insertNode(head, 1);
head = insertNode(head, 15);
head = insertNode(head, 5);
head = insertNode(head, 4);
head = insertNode(head, 45);
head = insertNode(head, 88);
head = insertNode(head, 96);
head = insertNode(head, 50);
head = insertNode(head, 45);

const k = 3;
findKLargestElements(head, k);
