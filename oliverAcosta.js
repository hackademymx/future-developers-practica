//  ========================================== FIZZBUZZ ============================
        // imprimir en la pantalla numeros del 1 al N 
        // Si el numero es divisible entre 3 imprimimos fizz 
        // Si el numero es divisible entre 3 imprimimos fizz 
        // Si el numero es divisible entre 3 y 5 imprimimos fizzbuzz

        //Esta correcto sin embargo puede ser optimo
         function fizzbuzz(num){
             for (let i = 1; i < num+1; i++) {
                 if (i % 3 == 0 && i % 5 == 0) {
                      console.log("fizzbuzz");
                 } 
                 else if (i % 3 == 0 ) {
                     console.log("fizz");
                 }
                 else if (i % 5 == 0 ) {
                     console.log("buzz");
                 }                  
                 else{
                     console.log(i);
                 }  
             }
         }

        //  //Esta es la manera mas Optima que yo encontre (visualmente / rendimiento es lo mismo)
        // function fizzbuzzOptimo(num){
        //     for(let i=1;i<num+1;i++){
        //        if(i % 3 == 0 && i % 5 == 0){console.log("fizzbuzz");}
        //         else if(i % 3 == 0) {console.log("fizz");}
        //         else if(i % 5 == 0){console.log("buzz");}
        //         else {console.log(i);}
        //     }
        // }
        
        fizzbuzzOptimo(30);