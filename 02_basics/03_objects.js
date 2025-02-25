// singleton

// object Literals

const mySym=Symbol("Key1")

const JsUser ={
    name: "Rishabh",
    "Full name":"Rishabh Dubey",
    [mySym]:"myKey1",
    age: 20,
    Location:"Jaipur",
    email: "rishabh@gmail.com",
    isLoggedIn:false
}
// console.log(JsUser.email);

// console.log(JsUser["email"]);

// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);
JsUser.email="rishabh@chatgpt.com"
//Object.freeze(JsUser); // freeze the object
// freeze the object

JsUser.greeting =function(){
    console.log("Hello Js User ");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


