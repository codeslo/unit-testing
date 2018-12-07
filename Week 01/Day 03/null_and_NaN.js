// doubleUnlessThree should return the number passed to it *2, unless that number is three. If it is passed three, it returns three. If passed something that isn't a number it should return NaN.
function doubleUnlessThree(num) {
    if (isNaN(num)) {
        return NaN;
    } else if (num === 3) {
        return num;
    } else {
        return num * 2;
    }
}

// betterThanBacon returns a comprehensive list of all items that are better than bacon
function betterThanBacon(){
    return null;
}