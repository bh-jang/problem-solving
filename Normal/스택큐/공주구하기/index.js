function sol(n, k) {
    let list = [];
    for (let i = 1; i < n + 1; i++) {
        list.unshift(i);
    }

    let count = 0;
    while (list.length !== 1) {
        count++;
        if (count % k === 0) {
            list.pop();
        } else {
            list.unshift(list.pop());
        }
    }

    console.log(list[0])
    
}

function app() {
    sol(8, 3);
}

app();