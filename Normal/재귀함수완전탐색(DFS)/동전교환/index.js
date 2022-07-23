(() => {
    function sol(coins, money) {
        let list = [];
        let count = 10000;
        function dfs(v) {
            const sum = list.reduce((a, b) => a + b, 0);
            if (money < sum) {
                list.pop();
                return;
            }
            if (money === sum) {
                if (count > list.length) {
                    count = list.length;
                }
                list.pop();
                return;
            }

            for (let i = 0; i < coins.length; i++) {
                list[v] = coins[i];
                dfs(v + 1)
            }
        }

        dfs(0);
        return count;
    }
    
    console.log(sol([1, 2, 5], 15));
})();
