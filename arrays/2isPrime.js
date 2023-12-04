const isPrime = (n) => {
    if (n===1) return false
    for (let i = n-1; i >1; i--){
      if (n%i === 0) return false
    }

    return true
  };

  module.exports = {
    isPrime,
  };

  // simple determine if prime function
  // will prob need in future
