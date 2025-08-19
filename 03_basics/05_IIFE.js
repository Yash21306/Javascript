// Immediately Invoked Function Expression(IIFE)

// named IIFE
(function one(){
    console.log(`DB connected`)
}) ();  // semicolon is must for writing next IIFE


// unnamed IIFE
((name) => {
    console.log(`DB connected to ${name}`);
}) ('Yash')

