// array maker will take any number of arguments and return an array of those arguments. If passed zero arguments, arrayMaker returns undefined
function arrayMaker() {
    const args = Array.prototype.slice.call(arguments);
    if (!args.length) {
        return undefined;
    }

    return args;
}

// greeter returns a random greeting and the name passed to it. If it is not passes a string it returns null
function greeter(name) {
    let greetingArray = ['Hello', 'Good Day', 'What\'s up', 'Yo'];
    if (name) {
        if (typeof name === 'string') {
            return greetingArray[Math.floor(Math.random() * greetingArray.length)] + ", " + name;
        }
    }

    return null;
}