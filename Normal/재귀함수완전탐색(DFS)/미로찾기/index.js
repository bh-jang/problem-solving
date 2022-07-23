(() => {
    function sol(miro) {
        let dx = [1, -1 ,0, 0]
        let dy = [0, 0, 1, -1]
        let visit = miro.map(x => x.map(y => 0))
        let min = 100000000;
        let total = 0;
        
        function dfs(i, j, count) {
            if (i === 6 && j === 6) {
                if (count < min) {
                    min = count;
                }
                total++;
                return;
            }
            

            for (let k = 0; k < 4; k ++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx < 7 && ny < 7 && nx > -1 && ny > -1 && visit[nx][ny] === 0 && miro[nx][ny] === 0 ) {
                    visit[nx][ny] = 1;
                    dfs(nx, ny, count + 1);
                    visit[nx][ny] = 0;
                }
            }
            
        }
        visit[0][0] = 1;
        dfs(0, 0, 0)
        console.log(min, total);
    }
    let arr=
    [[0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]];

    sol(arr);
    
})();