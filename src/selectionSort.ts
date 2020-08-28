/**
 *   Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
 * @param array<number> 
 */
export const selectionSort = (array: Array<number>) : Array<number> => {

    /**
     * 
     * [5, 8, 9, 0]
     * [(5), 8, 9, 0] - The current index value is 5. Search for smallest value to the right of 5.
     * [(5), 8, 9, (0)!] - The smallest value is 0! Swap postions with 5. 
     * [0, 8, 9, 5]
     * 
     * [0, (8), 9, 5] - The current value index is 8. Search for the smallest value to the right of 8.
     * [0, (8), 9, (5)!] - The smallest value is 5! Swap positions with 8.
     * [0, 5, 9, 8]
     * 
     * [0, 5, (9), 8]
     * [0, 5, (9), (8)!] 
     * [0, 5, 8, 9]
     */

    return [];
}