(() => {
    function solution (maxWeight, weigthList) {
        let max = 0;
        function dfs(v, weight) {
            if (v === weigthList.length){
                if (max < weight && weight < maxWeight) {
                    max = weight
                }
                return;
            }

            dfs(v + 1, weight + weigthList[v])
            dfs(v + 1, weight)
        }
        dfs(0, 0);
        return max;
    }

    const r = solution(259, [81, 58, 42, 33, 61])
    console.log(r);
})();
