describe('Calculator tests', function () {
    it('returns the correct total', function () {
        let calc = new Calculator();
        expect(calc.calculate(1, 1, '+')).toBe(2);
        expect(calc.calculate(1, 1, '-')).toBe(0);
        expect(calc.calculate(2, 2, '*')).toBe(4);
        expect(calc.calculate(4, 2, '/')).toBe(2);
    });

    describe('Calculator calls the correct methods', function () {
        it('calls add when passed "+"', function () {
            let calc = new Calculator();
            spyOn(calc, 'add');
            calc.calculate(1, 1, '+');
            expect(calc.add).toHaveBeenCalled();
            expect(calc.add).toHaveBeenCalledWith(1, 1);
        });
        it('calls subtract when passed "-"', function () {
            let calc = new Calculator();
            spyOn(calc, 'subtract');
            calc.calculate(1, 1, '-');
            expect(calc.subtract).toHaveBeenCalled();
            expect(calc.subtract).toHaveBeenCalledWith(1, 1);
        });
        it('calls multiply when passed "*"', function () {
            let calc = new Calculator();
            spyOn(calc, 'multiply');
            calc.calculate(5, 4, '*');
            expect(calc.multiply).toHaveBeenCalled();
            expect(calc.multiply).toHaveBeenCalledWith(5, 4);
        });
        it('calls divide when passed "/"', function () {
            let calc = new Calculator();
            spyOn(calc, 'divide');
            calc.calculate(4, 2, '/');
            expect(calc.divide).toHaveBeenCalled();
            expect(calc.divide).toHaveBeenCalledWith(4, 2);
        });
        it('tests a spy',function(){
            let calc = new Calculator();
            spyOn(calc,'add');
            let testResult = calc.calculate(1,1,'+');
            expect(testResult).toBe(2);
        });



    });
});