import { bubbleSort } from './bubbleSort';

export const quickSort = (array: Array<number>): Array<number> => {
    let output: any = [];
    function QUICK_SORT (arr: Array<number>) {
        if (arr.length === 1) {
            output.push(arr);
            return 0;
        } else if (arr.length === 2) {
            // bubble sort
            output.push(bubbleSort(arr));
            return 0;
        } else {
            //quick sort
            let pivotIndex = Math.floor(arr.length / 2); 
            let leftArray = [];
            let rightArray = [];
    
            for (let i=0; i < pivotIndex; i++) {
                let rightPointer = ((arr.length -1) - i);
                let pivotValue = arr[pivotIndex]; 
    
                //left pointer
                if (arr[i] <= pivotValue) {
                    leftArray.push(arr[i]);
                } else if (arr[i] > pivotValue) {
                    rightArray.push(arr[i])
                }
    
                //right pointer
                if (arr[rightPointer] <= pivotValue) {
                    leftArray.push(arr[rightPointer]);
                } else if (arr[rightPointer] > pivotValue) {
                    rightArray.push(arr[rightPointer]);
                }
            }
            
            QUICK_SORT(leftArray);
            QUICK_SORT(rightArray);
        }
    }
    
    QUICK_SORT(array);
    return output;
}