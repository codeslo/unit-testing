describe('lessThanFive tests',function(){
    it('Returns falsy if passed a non-number parameter',function(){
        expect(lessThanFive('b')).toBeFalsy();
    });

    it('Returns the number passed to it if that number is less than five.',function(){
        expect(lessThanFive(3)).toBe(3);
    });

    it('Returns false if passed a number greater than or equal to five',function(){
        expect(lessThanFive(7)).toBe(false);
    });
});

describe('arrayToString tests',function(){
    it('returns falsy if passed something other than an array',function(){
        expect(arrayToString(5)).toBeFalsy();
    });

    it('returns falsy if passed an empty array',function(){
        expect(arrayToString([])).toBeFalsy();
    });

    it('returns a string if passed a non-empty array',function(){
        let testResult = arrayToString([1,2]);
        expect(typeof testResult).toBe('string');
    });

    it('returns a string containing each element of the array',function(){
        let testResult = arrayToString([1,2]);
        expect(testResult).toBe("1,2");
    });
});