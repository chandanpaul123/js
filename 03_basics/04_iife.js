// IIFE = Immediately Invoked Function Expressions

// 1st ()<-defination
//2nd ()<- execution

(function chai() {
    //named IIFE
    console.log(`Chai With Chandu`);
})();

(  (name) => {
    //unnamed IIFE
    console.log(`From Me ${name}`);
}  )('Chandan')