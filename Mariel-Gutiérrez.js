//Imprimir en pantalla números del 1 a N
//Si el número es divisible entre 3 imprimimos Fizz
//Si el número es divisible entre 5 imprimimos Buzz
//Si el número es divisible entre 3 y 5 imprimimos FizzBuzz

for (var i= 1; i <=100; i++) {
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}

