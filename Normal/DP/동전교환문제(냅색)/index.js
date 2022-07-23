(() => {
    function sol(money, coins) {
        let dp = new Array(money + 1).fill(1000);
        dp[0] = 0;
        for (let i = 0 ; i < coins.length; i++) {
            for (let j=coins[i]; j <= money; j++) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
        console.log(dp)
    }

    sol(15, [1, 2, 5]);
})();