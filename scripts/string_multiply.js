// ==== ==== ==== STRING MULTIPLY ==== ====

function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
}
// Use a helper function
function addOnToAString(currentResult, someString) {
    // I can't refer to the result vaiable
    let newResult = currentResult + someString; 
    return newResult; 
}

function strMulitply(str, times) {
    const loopingArary = range(0, times);
    // Version 1: use .forEach
    // Each time through, add on to a string
    let = result = '';
    // loopingArray.forEach(function () {
    //     result = addOnToAString(result, str); 
    // }); 
    // return result; 

    // Version 2: using .map
    // [0, 1, 2, 3, 4, 5]
    //['abc', abc', 'abc', 'abc', abc]
    let stringArray = loopingArray.map(function (item) {
        return str; 

    });
    return stringArray.join('');
    //return result;
}
