describe('shoppingCart testing', function () {
    describe('getItemList tests', function () {
        it('returns an array', function () {
            let items = getItemList();
            expect(Array.isArray(items)).toBe(true);
        });
        it('returns an array containing prices and quantities', function () {
            let items = getItemList()[0];
            // example of running tests inside a loop
            for (let key in items) {
                expect(items[key].hasOwnProperty('price')).toBe(true);
                expect(items[key].hasOwnProperty('quantity')).toBe(true);
            }
        });
    });

    describe('getSubTotal testing', function () {
        it('returns the sum of the object', function () {
            let testObj = [{
                item1: {
                    price: 1,
                    quantity: 1
                },
                item2: {
                    price: 1,
                    quantity: 1
                },
                item3: {
                    price: 1,
                    quantity: 1
                }
            }];
            expect(getSubTotal(testObj)).toBe(3);
        });
    });
    describe('getShippingCosts tests', function () {
        it('returns 5 + 10% of subTotal', function () {
            let testSubTotal = 10;
            expect(getShippingCosts(testSubTotal)).toBe(6);
        });

    });

    // toBeCloseTo is a matcher for exact values like 2.75 or 6.00
    describe('calculateTotal tests', function () {
        it('returns the total of the parameters passed to it', function () {
            expect(calculateTotal([1, 2, 3])).toBeCloseTo(6.00);
        });
    });

    describe('buildCart tests', function () {
        it('buildCart gets correct total', function () {
            expect(buildCart()).toBeCloseTo(69.04);
        });

    });

    describe('buildCart dependency tests', function () {
        it('calls all dependencies', function () {
            spyOn(window, 'getItemList')()
            spyOn(window, 'getSalesTax');
            spyOn(window, 'getShippingCosts');
            spyOn(window, 'calculateTotal');
        });
    });

});