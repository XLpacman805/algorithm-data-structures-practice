export const insertionSort = (array: Array<number>): Array<number> => {
    /**
     * This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. 
     * Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
     * It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 
     * This algorithm has quadratic time complexity in the average and worst cases.
     */

    const arrayClone = [...array];
    let sorted = array.slice(0, 1);
    let unsorted = array.slice(1);

    return sorted;
}