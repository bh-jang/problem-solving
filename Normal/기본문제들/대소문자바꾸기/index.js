function sol (s) {
    const r = [...s].map(c => {
        return /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase()
    })
    console.log(r);
}

function app() {
    sol('asdfDDDffe');
}

app();