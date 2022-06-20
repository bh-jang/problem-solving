https://programmers.co.kr/learn/courses/30/lessons/12973

O(n)

stack을 활용
stack의 마지막값이 현재의 값과 같으면 pop()
stack의 마지막값이 현재의 값과 다르면 push()

'baabaa'

'b' -> stack ['b']
'a' -> stack ['b' ,'a']
'a' -> stack ['b'] // 'a' pop
'b' -> stack [] // 'b' pop
'a' -> stack ['a']
'a' -> stack [] // 'a' pop

