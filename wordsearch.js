// Implement wordsearch //



// tranpose and do the same for verticle
// to check vertically, transposed arrays, collapsed them, and searched .includes()
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


// collapse arrays into a single array of strings
// search each string element across array using includes
const wordSearch = (letters, word) => {
  // horizontal collapse and search
  const horizontalJoin = letters.map(ls => ls.join(''));
  // const horizontalFind = horizontalJoin.includes(word);
  for (let letter of horizontalJoin) {
    if (letter.includes(word)) {
      return true;
    }
  }
  // vertical collapse and search after tranposed
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

/* let arr1 = [1, 2, 3, 4, 5];

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
} */