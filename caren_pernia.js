const Array = ['aba', 'aa', 'ad', 'vcd', 'aba']

function allLongestStrings(Array) {
    let longestSize = -1
    const result = []

    for(let i = 0; i < Array.length; i++) {
        if(Array[i].length > longestSize) {
            longestSize = Array[i].length
        }          
    }
    for(let i = 0; i < Array.length; i++) {
        if(Array[i].length === longestSize) {
            result.push(Array[i])
        }
    }
    return result
}

const result = allLongestStrings(Array)
console.log(result)
