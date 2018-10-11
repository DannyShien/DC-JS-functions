// ==== ==== ==== 3 TIMES ==== ====

// Create a function that prints out 'Hello World!', 3 times

function call3Times(fun) {
    fun(); 
    fun();
    fun();
}

function greet() {
    console.log('Hello World!');
}
// Call the first function with a argument of another function
call3Times(greet);
