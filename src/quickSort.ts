import { bubbleSort } from './bubbleSort';

export const quickSort = (array: Array<number>): Array<number> => {
    let output: any = [];
    function QUICK_SORT (arr: Array<number>) {
        if (arr.length < 2) {
            output.push(arr);
        } else if (arr.length === 2) {
            // bubble sort
            output.push(bubbleSort(arr));
        } else {
            //quick sort
            let pivotIndex = Math.floor(arr.length / 2); 
            let pivotValue = arr[pivotIndex]; 
            let leftArray = [];
            let rightArray = [];
    
            for (let i=0; i < pivotIndex + 1; i++) {
                let rightPointer = ((arr.length -1) - i);
    
                //left pointer
                if (arr[i] <= pivotValue && i <= pivotIndex) {
                    leftArray.push(arr[i]);
                } else if (arr[i] > pivotValue && i <= pivotIndex) {
                    rightArray.push(arr[i])
                }
    
                //right pointer
                if (arr[rightPointer] < pivotValue && rightPointer > pivotIndex) {
                    leftArray.push(arr[rightPointer]);
                } else if (arr[rightPointer] > pivotValue && rightPointer > pivotIndex) {
                    rightArray.push(arr[rightPointer]);
                }
            }
            
            console.log('left, ', leftArray);
            console.log('Pivot value, ', pivotValue);
            console.log('right, ', rightArray);
            console.log('---------------------------------');

            QUICK_SORT(leftArray);
            QUICK_SORT(rightArray);
        }
    }
    
    QUICK_SORT(array);
    console.log(output.flat());
    return output.flat();
}