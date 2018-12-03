describe('Calculator function test results',function(){
    it('add returns sum of two parameters',function(){
        let addResult = add(5,2);
        expect(addResult).toBe(7);
    });

    it('subtract returns difference of two parameters',function(){
        let subtractResult = subtract(5,2);
        expect(subtractResult).toBe(3);
    });

    it('multiply returns product of two parameters',function(){
        let multiplyResult = multiply(5,2);
        expect(multiplyResult).toBe(10);
    });

    it('divide should return quotient of two numbers',function(){
        let divideResult = divide(4,2);
        expect(divideResult).toBe(2);
    });

    it('divide should return "Can\'t divide by zero" is one of the parameters is zero',function(){
        let divideResult = divide(5,0);
        expect(divideResult).toBe('Can\'t divide by zero');
    });
});