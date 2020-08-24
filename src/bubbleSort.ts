export const bubbleSort = (array: Array<number>) : Array<number> => {
    //sort ascending. //compare adjacent value and swap positions if condition is met.
    array.forEach(value => {
        for(let n: number = 0; n < array.length; n++) {
            let orignalArray: Array<number> = [...array];
            if (array[n] > array[n+1]) { //if current value is greater that the value to the right (n+1), then swap the positions of those values.
                let currentValue: number = orignalArray[n];
                let rightValue: number = orignalArray[n+1];

                array[n] = rightValue;
                array[n+1] = currentValue;
            }
        }
    });
    return array;
}