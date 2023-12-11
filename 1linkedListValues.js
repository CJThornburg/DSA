// <!-- Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.




// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
   let current = head
   let returnArray = []
   while (current !== null) {
     returnArray.push(current.val)
     current = current.next
   }
   return returnArray


};


//! recursive

// const linkedListValuesRec = (head) =>{
//   let values = []
//   fillValueseRecursive(head, values)
//   return values
// }

// const fillValueseRecursive(head, values){
//   if (head === null) return
//   values.push(head.val)
//   fillValueseRecursive(head.next, values)
// }
