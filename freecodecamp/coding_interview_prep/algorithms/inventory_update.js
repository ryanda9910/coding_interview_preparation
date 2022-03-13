/* 
  return updated  {listInventory[]}
 */
function updateInventory(arr1, arr2) {
	let new_array = [];
	let old_array = [];

	//compare and add new  array value doesn't exist in arr1 and arr2
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let compare = arr1[i][1] === arr2[j][1];
			if (compare) {
				arr1[i][0] = arr1[i][0] + arr2[j][0];
			}
		}
	}

	//inisiate new array
	for (let x = 0; x < arr2.length; x++) {
		let directory_name = arr2[x][1];
		new_array.push(directory_name);
	}

	//inisiate old array
	for (let y = 0; y < arr1.length; y++) {
		let directory_name = arr1[y][1];
		old_array.push(directory_name);
	}

  for(let z = 0; z < new_array.length; z++){
    if(old_array.indexOf(new_array[z]) === -1) {  // check array if index === -1
      let index = new_array.indexOf(new_array[z])
      arr1.push(arr2[index]); // push value arr2 to arr1 after checking the index with old_array
    }
  }


 // sort array
  arr1.sort((currItem, nextItem)=>{
      if(currItem[1] > nextItem[1]){
        currItem = 1;
      }else{
        currItem = -1;
      }
      return currItem;
  });

	return arr1;
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"],
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"],
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
