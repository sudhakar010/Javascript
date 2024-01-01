// Immediately invoked function expressions (IIFE)
// global scope se pollution nhi chaiye isliye *** main reason

(function chai() {
    // this is named iife
    console.log('db connected');

})();
// this is the correct method for the iife:
// the first bracket would be for the function and the second one for the execution

((name) => {
    // this is simple iife
    console.log(`db connectedb ${name}`);
}) ('sudhakar'); 