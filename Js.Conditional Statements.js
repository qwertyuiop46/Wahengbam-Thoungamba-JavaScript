let password; // store nothing

if (password === 8) {
    console.log("Welcome");
} 
else if (password <= 8 && password !== undefined) {
    console.log("Password is too short");
} 
else if (password >= 8 && password !== undefined) {
    console.log("Too Long Password");
    console.log("Password should be 8 characters");
} 
else {
    console.log("Please provide a password.");
}
