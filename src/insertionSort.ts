export const insertionSort = (array: Array<number>): Array<number> => {
    /**
     * This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. 
     * Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
     * It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 
     * This algorithm has quadratic time complexity in the average and worst cases.
     */

    let sorted: Array<number> = array.slice(0, 1); //left
    let unsorted: Array<number> = array.slice(1); //right

    for (let i = 0; i < array.length -1; i++) {
        // take 1st number from unsorted, remove it from that array. 
        let myNumber: any = unsorted.shift();
        // compare it against elements in reverse. If my number is larger, place it in front of that element.
        for (let j = sorted.length; j > -1; j--) {
            if (myNumber > sorted[j-1]) {
                sorted.splice(j, 0, myNumber);
                break;
            } else if (j === 1) { 
                sorted.unshift(myNumber);
            }
        }
    }

    return sorted;
}