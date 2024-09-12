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
}  )('Chandan');

(add = (num1,num2) => {
      return num1 + num2  
})
console.log(add(6, 7));
