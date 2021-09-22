// Implement wordsearch //


// loop through outer loop

// loop through inner loop

// in array, hold the search word
let referenceArr = ['FRANK']; // here is where target word is
let compareArr = ['F', 'R', 'A']; // here is where we push matching letters
// console.log('Make an array of strings', 'GHFRANK'.includes(referenceArr[0]));
// search first by individual letter


// if first letter found, place into empty array
// loop for 2nd letter of target word
// if 2nd letter found, push to holder array with first letter
// continue until all letters are checked and two arrays are equal length
// compare for deepEqual b/w the two arrays
// return true

const transpose = function(matrix) {
  // store in array variable
  let arr = matrix;
  // temporary array
  const temp = [];
  // capture row and column length at initial state
  const rowLength = arr[0].length;
  const colLength = arr.length;
  // console.log(arr);
  for (let rows = 0; rows < rowLength; rows++) {
    temp.push([]); // pushed rowLenght number of arrays into temp array holder
    for (let columns = 0; columns < colLength; columns++) { // loops over content of inner array
      temp[rows].push(arr[columns][rows]); // pushes each as new column head, transposing row ==> column and column ==> row
    }
  }
  return temp; // sends new one out as value to printMatrix
};



const wordSearch = (letters, word) => {
  // horizontal collapse and search
  const horizontalJoin = letters.map(ls => ls.join(''));
  // const horizontalFind = horizontalJoin.includes(word);
  for (let letter of horizontalJoin) {
    if (letter.includes(word)) {
      return true;
    }
  }
  // vertical collapse and search
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  console.log(verticalJoin);
  // const horizontalFind = horizontalJoin.includes(word);
  for (let letter of verticalJoin) {
    if (letter.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let el of arr1) {
  console.log(el);
}


for (let i = arr1.length; i > 0; i--) {
  console.log(arr1[i]);
}

for (let el in arr1) {
  console.log(el);
}