/* Ejercicio de Algoritmos: Las cadenas más largas
*   
*Dado un arreglo de cadenas regresar otro arreglo que contenga 
*solo las cadenas más largas 
*/

function allLongestStrings (inputArray){
    let longestSize =-1
    const result= []

    for (let i=0;i<inputArray.length;i+=1){
        if (inputArray[i].length>longestSize){
            longestSize=inputArray[i].length
        }
    }

    for (let i=0; i<inputArray.length;i+=1){
        if (inputArray[i].length===longestSize){
            result.push (inputArray[i])
        }
    }
    return result
}

const inputArray = ["aba","vcd","aa","ad","aba"]
const result = allLongestStrings(inputArray)
console.log(result)