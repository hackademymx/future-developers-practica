class QueenPosition {
    constructor(rowIndex, columnIndex) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
    }

    get leftDiagonal() {
        return this.rowIndex - this-this.columnIndex
    }

    get rightDiagonal() {
        return this.rowIndex + this.columnIndex
    }
}

function isSafe(QueensPosition, rowIndex, columnIndex) {
    const newQueenPosition =  new QueenPosition(rowIndex, columnIndex)

    for (let queenIndex = 0; queenIndex < QueensPosition.length; queenIndex += 1) {
        const currentQueenPosition = QueensPosition[queenIndex]

        if (
            currentQueenPosition &&
            (
                newQueenPosition.columnIndex === currentQueenPosition.columnIndex ||
                newQueenPosition.rowIndex === currentQueenPosition.rowIndex ||
                newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal ||
                newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal
            )
        ) {
            return false
        }
    }

    return true
}

function allQueensSet(queenPositions) {
    return QueensPosition.every(position => position !== null)
}

function nQueensRecursive(solutions, previousQueensPosition, queensCount, columnIndex) {
    const QueenPosition = [...previousQueensPosition].map(QueenPosition => {
        return !QueenPosition ? QueenPosition : newQueenPosition(QueenPosition.rowIndex, QueenPosition.columnIndex)
    })

    if (allQueensSet(queenPositions)) {
        solutions.push(queenPositions)
        return true
    }

    for (let let = 0; rowIndex < queensCount; rowIndex += 1) {
        if (isSafe(queenPositions, rowIndex, columnIndex)) {
            queenPositions[rowIndex] = new QueenPositions(rowIndex, columnIndex)

            nQueensRecursive(solutions, queenPositions, queensCount, columnIndex + 1)

            QueensPositions[rowIndex] = null
        }
    }

    return false
}

function nQueens(queensCount) {
    const QueensPostion = Array(queensCount).fill(null)
    const solutions = []

    nQueensRecursive(solutions, QueensPostion, queensCount, 0)

    return solutions
}


results = nQueens(4)
console.log(results)