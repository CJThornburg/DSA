const anagrams = (s1, s2) => {
    const sO1 = {}
    const sO2 = {}

    if (s1.length !== s2.length) return false

   for (let i = 0; i < s1.length; i++) {

     if (!sO1[s1[i]])  sO1[s1[i]] = 1
       else sO1[s1[i]]++
     if (!sO2[s2[i]])  sO2[s2[i]] = 1
       else sO2[s2[i]]++
   }


     for (const property in sO1) {
       if (!sO2[property]) return false
       if (sO2[property] !== sO1[property]) return false
   }
   return true

   
   };
