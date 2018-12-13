function dependency(){
    return "Hello from the spy!";
}

function dependentMethod(){
    return dependency();
}

// failing test

spyOn(window,'dependency');

let result = dependentMethod();
expect(result).toBe('Hello from the spy!');

// mock test

it('calls dependency',function(){
    spyOn(window,'dependency');
    let result = dependentMethod();
    expect(result).toBe('Hello from the spy!'); // this fails. Spy does NOT have return values of the original
});

// passing test
it('Calls dependency correctly',function(){
    spyOn(window,'dependency');
    dependentMethod();
    expect(window.dependency).toHaveBeenCalled();
});
