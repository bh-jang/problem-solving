(() => {
    function sol(s, e, a) {
        const queue = [];
        const dis = new Array(10000).fill(0)
        const visit = new Array(10000).fill(0);

        dis[s] = 0;
        visit[s] = 1;
        queue.push(s);
        while(queue.length) {
            const r = queue.shift();
            for (let i = 0 ; i < a.length; i ++) {
                if ((r + a[i]) === e) {
                    return dis[r] + 1;
                }
                if (visit[(r + a[i])] === 0) {
                    queue.push(r + a[i])
                    visit[r + a[i]] = 1;
                    dis[r + a[i]] = dis[r] + 1;
                }
            }
        }

        return -1;
    }

    const r = sol(5, 14, [1, -1, 5]);
})();