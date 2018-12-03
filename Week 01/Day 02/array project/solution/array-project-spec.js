describe('Array project test results',function(){

    // note - getLargestElement has a bug so this test should fail.
    it('getLargestElement returns the largest number in an array',function(){
        let result01 = getLargestElement([1,2,3,4]);
        let result02 = getLargestElement([5,6,7,8]);
        expect(result01).toBe(4);
        expect(result02).toBe(8);
        
    });

    it('getAllEvens should return an array of even numbers',function(){
        expect(getAllEvens([1,2,3,4])).toEqual([2,4]);
    });

    it('getAllEvens should return false if passed an array without even numbers',function(){
        expect(getAllEvens([1,3,5,7])).toBe(false);
    });

    it('parseAllNumbers should return an array of numbers only',function(){
        let result = parseAllNumbers([1,2,'apple']);
        expect(result.includes('apple')).toBe(false);
    });

    it('parseAllNumbers returns an array of all numbers passed to it',function(){
        let result = parseAllNumbers([1,2,'apple']);
        expect(result).toEqual([1,2]);
    });

    it('sumArray should return the sum of all the numbers in an array',function(){
        expect(sumArray([1,2,3,4])).toBe(10);
    });

    it('sumArray should return false if any element is not a number',function(){
        expect(sumArray([1,2,'apple'])).toBe(false);
    });

    it('sumArray should return false if passed an empty array',function(){
        expect(sumArray([])).toBe(false);
    });

});