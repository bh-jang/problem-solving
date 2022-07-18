function solution(n) {
    const sum = n.reduce((a, b) => a + b, 0);

    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (sum - n[i] - n[j] === 100) {
                console.log(n.filter(x => x !== n[i] && x !== n[j]))
                return;
            }
        }
    }
}

function app() {
    solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
}

app();