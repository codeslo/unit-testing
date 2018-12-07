describe('Day Three Test Suite', function () {
    describe('Contains tests', function () {
        describe('arrayMaker tests', function () {
            it('returns undefined if passed zero arguments', function () {
                expect(arrayMaker()).toBeUndefined();
            });

            it('returns an array that contains all elements passed to it', function () {
                expect(arrayMaker(1, 2)).toEqual([1, 2]);
            });
        });

        describe('greeter tests', function () {
            it('returns a greeting string that contains the name passed to it', function () {
                expect(typeof greeter('Matt')).toBe('string');
                expect(greeter('Matt')).toContain('Matt');
            });

            it('returns null if it isn\'t passed anything', function () {
                expect(greeter()).toBeNull();
            });

            it('returns null if passed something besides a string', function () {
                expect(greeter(1)).toBeNull();
                expect(greeter(['hi'])).toBeNull();
            })
        });
    });

    // BEGIN DEFINED TESTS
    // These tests should only look for defined or undefined states
    describe('Defined tests', function () {
        describe('notReady tests', function () {
            it('is undefined', function () {
                expect(notReady()).toBeUndefined();
            });
        });

        describe('totallyReady tests', function () {
            it('is defined', function () {
                expect(totallyReady()).toBeDefined();
            });
        });

        describe('needSpecificInput tests', function () {
            it('is defined if passed a number less than 100',function(){
                expect(needSpecificInput(99)).toBeDefined();
            });

            it('is undefined if passed a number over 100',function(){
                expect(needSpecificInput(105)).toBeUndefined();
            });

            it('is undefined if passed a string',function(){
                expect(needSpecificInput('hi')).toBeUndefined();
            })
        });

    });
    describe('null_and_NaN tests', function () {
        describe('doubleUnlessThree tests',function(){
            it('Returns NaN if passed something that is NaN',function(){
                expect(doubleUnlessThree(NaN)).toBeNaN();
            });

            it('Returns three if passed three',function(){
                expect(doubleUnlessThree(3)).toBe(3);
            });

            it('Returns double the number passed to it',function(){
                expect(doubleUnlessThree(5)).toBe(10);
            });
        });

        describe('betterThanBacon tests',function(){
            it('Gives us a comprehensive list of all things better than bacon',function(){
                expect(betterThanBacon()).toBeNull();
            });
        });
    });

});