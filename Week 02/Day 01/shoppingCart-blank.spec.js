describe('shoppingCart testing', function () {
    describe('getItemList tests', function () {
        it('returns an array', function () {
            expect(1+1).toBe(2);
        });
        it('returns an array containing prices and quantities', function () {
            // much check that all the shoppingCart items have price and quantity properties
        });
    });

    xdescribe('getSubTotal testing', function () {
        it('returns the sum of the object', function () {
            // we'll need to create a custom object with simple values to test this.
        });
    });
    xdescribe('getShippingCosts tests', function () {
        it('returns 5 + 10% of subTotal', function () {
            // a little math here
        });

    });

    // toBeCloseTo is a matcher for exact values like 2.75 or 6.00
    xdescribe('calculateTotal tests', function () {
        it('returns the total of the parameters passed to it', function () {
            // how should we do this? 
        });
    });

    xdescribe('buildCart tests', function () {
        it('buildCart gets correct total', function () {
            // this one will be tricky as it has dependencies. More on this in class05

            // for now, we'll cheat a little so we can learn a new matcher: toBeCloseTo()
        });
    });

});