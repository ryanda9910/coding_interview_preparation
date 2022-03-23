/** 
* @param {number[]}
* @returns {number[]}
* 
*/

function insertionSort(array) {
	let i, j;
	for (i = 1; i < array.length; i++) {
		let curr = array[i];
		for (j = i - 1; j >= 0 && array[j] > curr; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = curr;
	}
	return array;
}

insertionSort([5, 4, 33, 2, 8]);
// [4,5,33,2,8] // 1  -> curr = 5 , array[j] = 33 , 

// [4,33,5,2,8] // 2  -> curr = 33,array[j] =  5

// [2,4,33,5,8] // 3 -> curr = 5 ,array[j] =  4
             
// [2,4,5,33,8] // 4 -> curr = 4, array[j] = 5

// [2,4,5,8,33] // 5 -> curr = 5 ,array[j] = 33