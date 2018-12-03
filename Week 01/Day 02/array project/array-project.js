// getLargestElement should return the largest element in an array
function getLargestElement(arr){
    return arr.sort(function(a,b){
        return(a-b);
    })[0];
}

// getAllEvents should return an array with all even elements or false if the array does not contain any even elements
function getAllEvens(arr){
    let result = arr.filter(e => e % 2 === 0);
    if(result.length){
        return result;
    }else{
        return false;
    }
}

// parseAllNumbers should take an array of strings and return an array of numbers. Strings that cannot be parsed into numbers (IE text) should be left out of the return array
function parseAllNumbers(arr){
    return arr.filter(e => !isNaN(parseInt(e)));
}

// sumArray should return the sum of all elements in an array. If any of the array elements is not a number sumArray should return false. If the array is emptry sumArray should return false
function sumArray(arr){
    let result = 0;
    if(arr.length){
        for(let i = 0; i<arr.length; i++){
            if(typeof(arr[i]) !== 'number'){
                return false;
            }else{
                result += arr[i];
            }
        }
    }else{
        return false;
    }

    return result;
}


