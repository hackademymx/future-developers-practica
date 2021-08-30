// Imprimir en pantalla números del 1 a N
// Si el número es divisible entre 3 imprimimos Fizz
// Si el número es divisible entre 5 imprimimos Buzz
// Si el número es divisible entre 3 y 5 imprimimos FizzBuzz

function fizzbuzz(numero) {

    for (let index = 1; index <= numero; index++) {

        const element = index;
        if (element % 3 == 0 && element % 5 == 0) {
            console.log(element + " FizzBuzz")
        } else
        if (element % 3 == 0) {
            console.log(element + " Fizz")
        } else
        if (element % 5 == 0) {
            console.log(element + " Buzz")
        }

    }

    console.log ("Fin del programa.")

}

fizzbuzz(15)