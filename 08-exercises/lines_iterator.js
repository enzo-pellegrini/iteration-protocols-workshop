const text = `This is a multiline string
It means that it spans multiple lines\n\n
Isn't that neat?

\n\t`

/**
 * Iterate over the lines of the given string
 * 
 * @generator
 * @function linesIter
 * @param {string} text
 * @yields {string} 
 */
function * linesIter(text) {
    let startPos = 0
    let pos = 0

    while (pos < text.length) {
        if (text[pos] == '\n') {
            yield text.slice(startPos, pos)
            startPos = pos + 1
        }
        pos++
    }

    yield text.slice(startPos, pos)
}

for (const line of linesIter(text)) {
    console.log(line + '$')
}