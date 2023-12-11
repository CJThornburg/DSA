// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
    // todo
    let arraySet = new Set(a)
    console.log(arraySet)
    let retArray = []

  //   set look up is still just n1
    for (let i = 0; i< b.length; i++){
      if (arraySet.has(b[i])) {
        retArray.push(b[i])
      }

    }
    return retArray
  };
