// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    // todo
    let current = head;
    for (let i = 0; i <index; i++){
      current = current.next
      if (current === null) return null
    }
    return current.val
  };
