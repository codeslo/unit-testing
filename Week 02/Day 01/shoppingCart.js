function buildCart(){
    let items = getItemList();
    let subTotal = getSubTotal(items);
    let salesTax = getSalesTax(subTotal);
    let shippingCost = getShippingCosts(subTotal);
    return calculateTotal([subTotal,salesTax,shippingCost]);
}

function getItemList() {
    // TODO: Get all this data live from API
    return [{
        pencil: {
            quantity: 10,
            price: 1.0
        },
        crayon:{
            quantity:5,
            price:0.5
        },
        paper:{
            quantity:20,
            price:0.1
        },
        printerInk:{
            quantity:1,
            price:40.0
        }
    }];
}

function getSubTotal(obj) {
    const items = obj[0];
    let st = 0;
    for(let key in items){
        st += items[key].price * items[key].quantity;
    }
    return st;
}

function getSalesTax(subTotal) {
    return subTotal * 0.075;
}

function getShippingCosts(subTotal) {
    let shippingCost = (subTotal * .1) + 5;
    return shippingCost;
}

function calculateTotal(arr) {
    return arr.reduce((a,e) => a += e,0).toFixed(2);
}

