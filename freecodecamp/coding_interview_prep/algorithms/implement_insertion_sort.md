We're trying to solve implement_insertion_sort from the freecodecamp

![implement_insertion_sort](image/Insertion-sort.gif)

```js
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
```