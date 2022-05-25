/**
 * Linearitmic implementation (linear in space for the sort)
 * @param {A[]} values 
 * @yields {[number, A]}
 */
function * enumerate_lazy(values) {
    values.sort()
    let pos = 0
    let prev = values[0]
    let start = 0
    for (; pos < values.length; pos++) {
        if (values[pos] !== prev) {
            yield [pos - start, prev]
            prev = values[pos]
            start = pos
        }
    }
    yield [pos - start, prev]
}

function enumerate(values) {
    const map = new Map()

    for (const val of values) {
        const prev = map.get(val) ?? 0
        map.set(val, (prev ?? 0) + 1)
    }

    return map.entries()
}

const values = ['a', 'b', 'b', 'c', 'c', 'd', 'a', 'b', 33, 41, 33]

for (const [count, value] of enumerate_lazy(values)) {
    console.log(`${value} was found ${count} times`)
}

console.log("\nNow the linear implementation")
for (const [value, count] of enumerate(values)) {
    console.log(`${value} was found ${count} times`)
}
