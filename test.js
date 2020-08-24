var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var should = chai.should();  // Using Should style
const {bubbleSort} = require('./build/bubbleSort');
const testArrays = [
  {input: [3,4,2,1,7,8,6,5,0], expectedOutput: [0,1,2,3,4,5,6,7,8]},
  {input: [38,5,12,58,37,35,48,3,36,60], expectedOutput: [3, 5, 12, 35, 36, 37, 38, 48, 58, 60]},
  {input: [36,13,9,33,45,12,27,53,46,1], expectedOutput: [1, 9, 12, 13, 27, 33, 36, 45, 46, 53]}
];

describe('Bubble Sort', () => {
    it('Should return an array sorted from lowest to highest', () => {
        assert.deepStrictEqual(bubbleSort(testArrays[0].input), testArrays[0].expectedOutput);
    });

    it('Should return an array sorted from lowest to highest', () => {
      assert.deepStrictEqual(bubbleSort(testArrays[1].input), testArrays[1].expectedOutput)
  });

  it('Should return an array sorted from lowest to highest', () => {
    assert.deepStrictEqual(bubbleSort(testArrays[2].input), testArrays[2].expectedOutput)
  });
});