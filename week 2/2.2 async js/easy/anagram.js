function isAnagram(str1, str2) {
    let cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Sort the characters of both strings and compare
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  }

console.log(isAnagram('spar', 'rasp'));  //true
console.log(isAnagram('hello', 'world')); //false

