function levenshteinDistance(a, b){
    //Create an empty matrix

    const distanceMatrix = Array(a.length + 1).

    //Es para llenar la matriz con la palabra null
    fill(null).

    //Es la operación para hacerlo en 2 dimensiones. Generamos un grupo de arreglos dentro del primer arreglo para representar la matriz
    map(() => Array(b.length + 1).fill(null))

    //fill first row
    for(let i = 0; i <= b.length; i += 1){
        distanceMatrix[0][i] = i
    }

    //fill first column
    for(let j = 0; j <= a.length; j += 1){
        distanceMatrix[j][0] = j
    }

    //Calculate distances
    for(let i = 1; i <= a.length; i += 1){
        for(let j = 1; j <= b.length; j += 1){
            const indicator = a[i - 1] === b[ j - 1] ? 0 : 1

            distanceMatrix[i][j] = Math.min(
                distanceMatrix[i][j - 1] +1,        //insert
                distanceMatrix[i -1][j] + 1,         //delete
                distanceMatrix[i - 1][j - 1] + indicator   //replace or nothing 
            )
        }
    }
    //return distance value
    return distanceMatrix[a.length][b.length]
    //console.log(distanceMatrix)

}
const result = levenshteinDistance('jitomate', 'tomate')
console.log(result)

//Obs: Estos ejercicios son buenos para aprendernos a mover en un matriz. 