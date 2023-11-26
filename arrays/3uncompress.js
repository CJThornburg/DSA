const uncompress = (s) => {
    let baseString = []
    const numbers = "0123456789"
    let i = 0;
    let j = 0;
    while (j< s.length) {
  //     check if current char is number without converting it
      if(numbers.includes(s[j])) {
  //       if it is increment up on to check the next charcter beause numbers can bet multiple digits
        j++;
      }else {
  //       if in this block we know its the charcter that needs repeating, and number is inbtween current j and current i so slice that out
  //       and save as number to know how many times the charcter on j is needed
       const num = Number(s.slice(i,j));
        for(let count =0; count <num; count++){
  //         add to base string
          baseString.push(s[j])
        }
  //       still in else so afte adding charcters need to increment J first so i is at the start of the next number
        j +=1;
        i =j;
      }
    }

    return baseString.join('')

  };

  module.exports = {
    uncompress,
  };
