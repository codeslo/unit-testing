// lessThanFive shold return the number passed to it if it is less than five. Number larger than that return false. Passing something that is not a number should return 0

function lessThanFive(num){
    if(typeof num !== 'number'){
        return 0;
    }
    if(num < 5){
        return num;
    }else{
        return false;
    }
}

// arrayToString returns a string made up of all the elements of an array. If passed something that is not an array, it should return false

function arrayToString(arr){
    let result = "";
    if(!Array.isArray(arr)){
        return false;
    }
    if(!arr.length){
        return "";
    }else{
        arr.forEach(e => result += (e+","));
        result = result.slice(0,-1);
        return result;
    }
}
