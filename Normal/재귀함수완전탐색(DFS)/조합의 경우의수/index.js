(() => {
    function sol(n, r) {
        let answer = [];
        let list = [];
        function dfs(v, s) {
            
            if (v === r) {
                answer.push(list.slice())
                return;
            }

            for (let i = s; i < n; i++) {
                list[v] = i;
                dfs(v + 1, i + 1);
            }
        }
        dfs(0, 0)
        console.log(answer);
    }
    sol(4, 3);
})();