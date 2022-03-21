/** 
* @param {number[]}
* @returns {number[]}
* 
*/
function selectionSort(array) {
  // Only change code below this line
  for(let i = 0; i < array.length -1 ;i++){ //  find smallest value index on array
    let min_index = i
    for(let j = i+1 ; j < array.length ; j++){
      if(array[min_index] > array[j]){
        min_index = j //  keep tracking the  smallest value index on array
      }
        let temp = array[i]
        array[i] = array[min_index]
        array[min_index] = temp  //  swap element beetwen smallest value  and part of value 
    }
  }
  return array;
  // Only change code above this line
}
selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
