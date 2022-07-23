(() => {
    function solution (n , m) {
        const answer = [];
        let temp = new Array(m).fill(0);
        function dfs(v) {
            if (v === m) {
                answer.push(temp.slice());
                return;
            }
            for (let i = 1; i <= n; i++) {
                temp[v] = i;
                dfs(v + 1)
            }
        }
        dfs(0);
        console.log(answer)
    }
    
    solution(3, 2);
})();