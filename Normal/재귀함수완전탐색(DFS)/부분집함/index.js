function sol(n) {
    let list = [];

    function dfs(m, arr) {
        if (m === (n + 1)) {
            return arr;
        }

        const arr1 = [...arr, m]
        const arr2 = [...arr]
        list.push(dfs(m + 1, arr1))
        list.push(dfs(m + 1, arr2))
    }

    dfs(1, list);
    list = list.filter(x => x !== undefined && x.length > 0)
    console.log(list)
}

function app() {
    sol(3);
    sol2(3);
}

app();