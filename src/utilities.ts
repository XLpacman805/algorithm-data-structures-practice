export const findLowestValue = (array: Array<number>) : number => {
    let lowestValue = array[0]; 
    array.forEach(value => (value < lowestValue) ? lowestValue = value : 0);
    return lowestValue;
}