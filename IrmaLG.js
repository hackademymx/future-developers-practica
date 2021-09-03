/*Dado un arreglo de cadenas regresar otro arreglo que contenga solo las cadenas más largas
Por ejemplo, 
inputArray = ['aba', 'querty', 'ad', 'vcd', 'aba']
la salida debería ser:
alllongestStrings(inputArray) = ['querty']
*/
function alllongestStrings(inputArray){
    let longestSize = -1
    const result = []
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i].length > longestSize){
            longestSize = inputArray[i].length
        }
    }
    for (let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i].length === longestSize){
            result.push(inputArray[i])
        }
    }
    return result
}

const inputArray = ['aba', 'querty', 'ad', 'vcd', 'aba']
const result = alllongestStrings(inputArray)
console.log(result)