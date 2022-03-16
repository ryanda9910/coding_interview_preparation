function pairwise(arr, arg) {
  let pairIndices = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i])
      console.log(arr[j])
      console.log(arg)
      console.log(i)
      console.log("==================")
      
      // Exclude pairs that contain previously paired elements
      if (arr[i] + arr[j] == arg
          && !pairIndices.includes(i)
          && !pairIndices.includes(j)) {
          pairIndices.push(i, j);
        break;
      }
    }
  }

  console.log(pairIndices); 

  // console.log(pairIndices);
  let result = pairIndices.reduce((sum, curr, index) => sum + curr, 0);
  // console.log(result)
  return result;
}

console.log(pairwise([1,4,2,3,0,5], 7));