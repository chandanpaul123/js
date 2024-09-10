const user = {
    username:"Chandan",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`); //this->refer current context
        // console.log(this);
        
    }    
}

// user.welcomeMessage()
// user.username = "Suman"
// user.welcomeMessage()
console.log(this);
