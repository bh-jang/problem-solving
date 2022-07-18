function solution (lines) {
    const max = Math.max(...lines)
    const sum = lines.reduce((a, b) => a + b, 0);
    return (sum - max) > max
}

function app () {
    const variables = [
        [1, 2, 3],
        [11, 12, 13],
        [13, 33, 17]
    ]
    
    variables.map(x => console.log(solution(x)))
}

app();