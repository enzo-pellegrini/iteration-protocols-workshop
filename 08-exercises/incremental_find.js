const text = `Were you born to resist or be abused
Is someone getting the best, the best, the best, the best of you
Is someone getting the best, the best, the best, the best of you`

/**
 * @generator
 * @param {string} text 
 * @param {stirng} pattern
 */
function * find(text, pattern) {
    const checkMatch = pos => {
        for (let i=0; i<pattern.length; i++) {
            if (text[pos+i] !== pattern[i]) {
                return false
            }

            return true
        }
    }

    let lineCount = 0;
    let columnCount = 0;

    for (let pos = 0; pos < text.length - pattern.length; pos++) {
        if (text[pos] === '\n') {
            lineCount++
            columnCount = 0
            continue
        }
        if (checkMatch(pos)) {
            yield { line: lineCount+1, col: columnCount+1 }
        }
        columnCount++
    }
}

for (const match of find(text, 'best')) {
    console.log(match)
}