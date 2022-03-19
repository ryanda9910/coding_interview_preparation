/** 
* @param {number[]}
* @returns {number[]}
* 
*/

function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){ // compare each element to the one 
    for(let j = 0;  j < array.length-i ; j++){
      if(array[j] > array[j+1]){ // if smaller swap the  value beetween index 
       let temp = array[j]
       array[j] = array[j+1]
       array[j+1] = temp
      }
    }
  }
  return array;

}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
