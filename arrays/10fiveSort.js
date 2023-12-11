// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

const fiveSort = (nums) => {
    let endPointer = nums.length-1
    let startPointer = 0;

  while(startPointer <= endPointer){
//     if endpointer is pointing at a 5 we dont want to swap so re increment down 1 and reset the while
    if (nums[endPointer] ===5){
      endPointer -=1;
    } else if (nums[startPointer]===5) {
// to even get into this else if, we know endPointer is pointing at something thats not a 5
//       this else if check if startpointer is poitnig at a 5 if so, swap values of startpointer and endpointer and then increments 1
      [nums[startPointer], nums[endPointer]] = [nums[endPointer], nums[startPointer]];
      startPointer+= 1
    } else {
//       startPointer is not a 5 so dont want to swap so increment 1 so while loop doesnt get stuck
      startPointer+=1
    }
  }
  return nums
};
