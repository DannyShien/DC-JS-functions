// ==== ==== ==== N-TIMES ==== ====

// Write a function callNTimes that takes 2 arguments: 
// 'times' as a number and 'fun' as a function 

function callNTimes(5, fun) {
    result = 0; 
    for (var i=0; i < fun.length; i++);
        result = result  + fun[i];
}

function greet(){
    console.log('Hello World!')
}

callNTimes(5, greet);