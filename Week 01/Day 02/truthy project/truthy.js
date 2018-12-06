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
