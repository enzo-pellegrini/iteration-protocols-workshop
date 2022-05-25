import axios from 'axios'
import { setTimeout } from 'timers/promises'

async function * asyncMap(iterable, f) {
    for await (const val of iterable) {
        yield f(val)
    }
}

async function * countUp(limit) {
    for (let i=0; i<limit; i++) {
        yield i
        await setTimeout(1000)
    }
}

function accumulate(async_iterator) {
    return new Promise(async (resolve, reject) => {
        const arr = []
        for await (const val of async_iterator) {
            arr.push(val)
            console.log(`arr: ${arr}`)
        } 
        resolve(arr)
    })
}

const main = async () => {
    for await (const val of asyncMap(countUp(10), x => x*2)) {
        console.log(val)
    }
}

main()