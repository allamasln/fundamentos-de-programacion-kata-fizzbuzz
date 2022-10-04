// declaracion de variables 
let mult3 = "Fizz";
let mult5 = "Buzz";
let mult35 = "FizzBuzz";

// funciones
for (i = 1; i < 1001; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(mult35);
    } else if (i % 3 == 0) {
        console.log(mult3);
    } else if (i % 5 == 0) {
        console.log(mult5);
    } else {
        console.log(i);
    }
}