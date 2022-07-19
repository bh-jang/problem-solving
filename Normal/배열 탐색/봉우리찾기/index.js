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
    return count;
}

function sol2(s) {
    let count = 0;
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            let flag = false;
            for (let k = 0; k < 4; k++) {
                const nx = j + dx[k];
                const ny = i + dy[k];
                if (nx > -1 && nx < 5 && ny > -1 && ny < 5) {
                    if (s[i + dy[k]][j + dx[k]] >= s[i][j]) {
                        flag = true;
                        break;
                    }   
                }
            }
            if (flag === false) {
                count++;
            }
        }
    }
    return count;
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
  console.log(sol2(arr));
}

app();