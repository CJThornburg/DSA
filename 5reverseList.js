
// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.




// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
    let prev = null
    let current = head;

    while (current !== null) {
      let next = current.next
      current.next = prev;
      prev =current
      if (next === null) return current
      current = next
    }



  };
