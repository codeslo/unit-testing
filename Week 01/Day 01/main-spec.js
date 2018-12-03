it('should return "The word is <word>".',function(){
    let testResult01 = testMe('bird');
    let testResult02 = testMe('JavaScript');
    expect(testResult01).toBe('The word is bird.');
    expect(testResult02).toBe('The word is JavaScript.');
});

