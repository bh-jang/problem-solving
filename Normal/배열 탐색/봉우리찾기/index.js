function sol(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            const cur = s[i][j];
            if (
                ((i + 1 > 4) || (s[i + 1][j] < cur)) &&
                ((i - 1 < 0) || (s[i - 1][j] < cur)) &&
                ((j + 1 > 4) || (s[i][j + 1] < cur)) &&
                ((j - 1 < 0) || (s[i][j - 1] < cur))
            ) {
                count++;
            }
        }
    }
}

function bestSol(s) {
    
}

function app() {
  let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  console.log(sol(arr));
}

app();