function sayMyName() {
    const name = "RISHABH";
    for (const letter of name) {
        console.log(letter);
    }
}

// Call the function
// sayMyName();

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

// Call the function
// const result = addTwoNumbers(3, 4);
// console.log(result);

function loginUserMessage(username) {
    if (!username) {
        return "User not found!";
    }
    return `${username.trim()} just logged in`;
}

//console.log(loginUserMessage(" rishabh "));
function calculateCarPrice(...num1){// ... rest operator  
    return num1
}
//console.log(calculateCarPrice(200,400,500));

const user={
    username:"rishabh",
    price:199
}
function handleObject(anyobjest){
    console.log(`Username is ${anyobjest.username} and price is ${anyobjest.price} `);
}
handleObject(user)
