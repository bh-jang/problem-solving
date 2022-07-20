function sol(s, t) {

    const result = [...s].map((c, i) => find(i));
    console.log(result);

    function find(index) {
        return Math.min(...[findLeft(), findRight()].filter(x => x > -1))

        function findLeft() {
            for (let i = index; i >= 0; i--) {
                if (s[i] === t) {
                    return Math.abs(index - i)
                }
            }
            return -1;
        }

        function findRight() {
            for (let i = index; i < s.length; i++) {
                if (s[i] === t) {
                    return Math.abs(index - i)
                }
            }
            return -1;
        }
    }
}

function app() {
    sol('teachermode', 'e');
}

app();