const compress = (s) => {
    let compressedSting = []
    let i = 0
    let j = 0


    while (j < s.length){

      if (s[j] === s[i] ) {
        j++
      } else {


        let num = j -i
        if (num === 1) {
          compressedSting.push(s[i])

        } else {
           compressedSting.push(num)
        compressedSting.push(s[i])

        }
         i = j;
       j++
      }
    }

      console.log(s[10])
      let lastNum = j-i
      if(lastNum === 1) {
        compressedSting.push(s[i])
      } else {

           compressedSting.push(lastNum)
        compressedSting.push(s[i])
      }

      console.log(compressedSting)

    return compressedSting.join('')



      };



  //     if (currentLetterMatch === s[j]){

  //       currentLetterCount++
  //       j++
  //     } else {
  //       if(currentLetterCount === 1) {
  //            compressedSting.push(currentLetterMatch)
  //       } else {
  //                console.log(String(currentLetterCount))
  //       compressedSting.push(String(currentLetterCount))
  //       compressedSting.push(currentLetterMatch)
  //       currentLetterMatch = s[j+1]
  //       currentLetterCount = 1
  //       }

  //       j++
  //     }


  //   }



  module.exports = {
    compress,
  };
