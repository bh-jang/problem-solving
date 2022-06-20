function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0) {
            if (stack[stack.length - 1] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0 ? 1 : 0    
}

// structure 'stack'
// stack의 마지막값이 현재의 값과 같으면 pop()
// stack의 마지막값이 현재의 값과 다르면 push()