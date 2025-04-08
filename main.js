function sortArray(array) {
  //Remove the odd numbers and sort in ascending order
  let oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
  //Add the sorted odd numbers back into the original array
  return array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
}