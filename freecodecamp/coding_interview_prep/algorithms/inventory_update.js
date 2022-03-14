function updateInventory(arr1, arr2) {
  //buat array kosong untuk menyimpan directory baru dan directory lama
  let new_directory = [];
  let cur_directory = [];

  //buat pengulangan untuk mengcompare array1 dan array2
  for(let i = 0; i < arr1.length; i++){
    for(let i2=0; i2 < arr2.length; i2++){
      let compare = arr1[i][1] === arr2[i2][1];
      //jika array1 ==array2 maka tambahkan index ke nolnya
      if(compare){
        arr1[i][0] = arr1[i][0] + arr2[i2][0];
      }
    }
  }

  console.log(arr1)

  //masukan index 2 dari array (nama) kedalam direktori baru (new directory)
  for(let i3 = 0; i3 < arr2.length; i3++){
    let directory_name = arr2[i3][1];
    new_directory.push(directory_name);
  }

  //masukan index 2 dari array (nama) kedalam direktori sekarang (current_directory)
  for(let i4 = 0; i4 < arr1.length; i4++){
    let directory_name = arr1[i4][1];
    cur_directory.push(directory_name);
  }

  for(let i5=0; i5<new_directory.length; i5++){
    console.log(new_directory[i5])
    // console.log(cur_directory.indexOf(new_directory[i5]))
    //kalau current_directory tidak ada maka push arraynya kedalam index
    if(cur_directory.indexOf(new_directory[i5]) === -1){
      let index = new_directory.indexOf(new_directory[i5])
      arr1.push(arr2[index]);
      // console.log(index)
    }
  }

   // Sort the array secara alphabet ambil index kesatu
   arr1.sort(function(currItem, nextItem) {
     if(currItem[1] > nextItem[1]){
       currItem = 1;
     }else{
       currItem = -1;
     }
    //  console.log(currItem)
     return currItem;
  });


  // console.log(arr1)

  // console.log(new_directory)
  // new_directory.forEach(function(item) {
  //   // console.log(item)
  //   // console.log(cur_directory.indexOf(item))
  //   //kalau tidak ada maka array di push kedalam index
  //   if (cur_directory.indexOf(item) === -1) {
  //     index = new_directory.indexOf(item);
  //     arr1.push(arr2[index]);
  //   }
  // });
  // console.log(arr1);

  // console.log(new_directory);
  // console.log(cur_directory);
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);