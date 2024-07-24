// Farras Zahy Fitrian Pramudya
// Internship BE Dev_cmlabs JS

for (let i = 1; i <= 100; i++) {
    // Looping angka 1-100

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    // Kelipatan 3 dan 5 print FizzBuzz

    } else if (i % 3 === 0) {
        console.log("Fizz");
    // Kelipatan 3 print Fizz

    } else if (i % 5 === 0) {
        console.log("Buzz");
    // Kelipatan 5 print Buzz
    
    } else {
        console.log(i);
    }
}