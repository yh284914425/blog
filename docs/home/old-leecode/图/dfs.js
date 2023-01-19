let set0 = new Set()
set0.add(1)
set0.add(2)
let set1 = new Set()
set1.add(0)
set1.add(3)
set1.add(4)
let set2 = new Set()
set2.add(0)
set2.add(3)
set2.add(6)
let set3 = new Set()
set3.add(1)
set3.add(2)
set3.add(5)
let set4 = new Set()
set4.add(1)
let set5 = new Set()
set5.add(3)
set5.add(6)
let set6 = new Set()
set6.add(2)
set6.add(5)


let graph = [set0, set1, set2, set3, set4, set5, set6]

let visited = []

function dfs(v) {
    const stack = []

    stack.push(v)
    visited[v] = true
    while (stack.length) {
        console.log(v);
        stack.pop()
        let adj = graph[v]
        adj.forEach((key, val) => {
            if (!visited[key]) {
                stack.push(val)

            }
        })

    }
}

dfs(0)