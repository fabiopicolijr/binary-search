const binarySearch = require('./binarySearch');

describe('Binary Search Tests', () => {

  it('should return None when the number doesnt exists in the list', () => {
    const list = [1, 2, 3, 4, 5];

    expect(binarySearch.search(list, 8)).toEqual('None');
  });

  it('should return the position of the item in the array list', () => {
    const list = [1, 2, 3, 4, 5];

    expect(binarySearch.search(list, 2)).toEqual(1);
  });
  
});