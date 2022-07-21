(() => {
    function sol(s) {
        const list = [];
        const sum = s.reduce((a, b) => a + b, 0);
        let check = false;
        function dfs(v, arr) {
            if (v === s.length) {
                list.push(arr)
                return;
            }
            const arr1 = [...arr];
            const arr2 = [...arr, s[v]];

            dfs(v + 1, arr1);
            dfs(v + 1, arr2);
        }

        dfs(0, []);
        const listSum = list.map(r => r.reduce((a, b) => a + b, 0));
        listSum.sort((a, b) => a-b);
        
        for (let i = 0; i < listSum.length; i++) {
            if (listSum[i] === listSum[i + 1] && listSum[i] + listSum[i + 1] === sum) {
                check = true;
            }
        }
        return check;
    }

    console.log(sol([1, 3, 5, 6, 7, 10]));
    console.log(sol([1, 2, 3]))
    console.log(sol([10, 20, 40]))
})();