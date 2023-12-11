// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
    const previousNums= {};
    for(let i =0; i< numbers.length; i+=1){
      const currentNumber = numbers[i];
      const complement = targetProduct / currentNumber;

        if (complement in previousNums) {
        return [i, previousNums[complement]]
      }
        previousNums[currentNumber] = i;
    }

  };
