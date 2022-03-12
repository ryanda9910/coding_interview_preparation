
/* 
 return array {number[]}
*/

// First you need to find complement arr1 and arr 2
let loopArr = (arr1, arr2) => {
  let answerArr = []
  for (let i = 0; i < arr1.length; i++) {
    let find1 = arr2.includes(arr1[i])
    if (!find1) {
      answerArr.push(arr1[i]) // will return array that complement to arr1
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    let find2 = arr1.includes(arr2[j])
    if (!find2) {
      answerArr.push(arr2[j]) // will return array that complement to arr2
    }
  }
  return answerArr;
}



/* 
 return set complement {number[]}
*/
function sym(...args) {
  return ([...new Set(args.reduce(loopArr))])  // set new array and validate every single part inside array doesn't have same value
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

