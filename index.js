function receivesAFunction(callback) {
    return callback ()
}
console.log (receivesAFunction(callback))

function returnsANamedFunction() {
    function beforeAllHook() {
    }
    return beforeAllHook;
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}