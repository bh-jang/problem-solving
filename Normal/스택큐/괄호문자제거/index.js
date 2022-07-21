function sol(s) {
    let checker = 0;
    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (/[A-Z]/.test(s[i]) && checker === 0) {
            result.push(s[i]);
        }

        if (s[i] === "(") {
            checker++;
        }

        if (s[i] === ")") {
            checker--;
        }
    }

    console.log(result.join(''));
}

function app() {
    sol('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
}

app();