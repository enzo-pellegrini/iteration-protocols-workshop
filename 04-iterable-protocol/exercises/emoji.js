/*
  Exercise
  Let's implement an iterable over all the emojis of a given text.

  This iterator should behave as follows:

  - If you create the iterable with the `text`: "Hello 👋 World 🌎"
  - You should be able to do a `for ... of` loop over the iterable and get '👋'
    for the first iteration and '🌎' for the second.

  Try to implement this iterable using 3 different styles:

  - With a factory function
  - With a class
  - With a generator

  TIPS:

  - You can convert a string into an array of unicode characters with `Array.from(str)`
  - If you use a `for ... of` over a string, every element will be a unicode character
  - A simple way to test if a given unicode character is an emoji is: `char.match(/\p{Emoji}/u) !== null`
*/

export function createEmojiIter (text) {
  // write your code here
  const chars = Array.from(text);
  
  return {
    [Symbol.iterator]() {
      let pos = 0
      
      return {
        next() {
          while (pos < chars.length) {
            const char = chars[pos++]
            if (char.match(/\p{Emoji}/u)) {
              return { value: char, done: false }
            }
          }
          return { done: true }
        }
      }
    }
  }
}

export class EmojiIter {
  constructor (text) {
    this.chars = Array.from(text)
    // write your code here
  }

  // write your code here
  [Symbol.iterator]() {
    let pos = 0;
    const chars = this.chars;

    return {
      next() {
        while (pos < chars.length) {
          const char = chars[pos++]
          if (char.match(/\p{Emoji}/u)) {
            return { value: char, done: false }
          }
        }
        return { done: true }
      }
    }
  }
}

export function * emojiIterGen (text) {
  // write your code here
  for (const char of text) {
    if (char.match(/\p{Emoji}/u)) {
      yield char
    }
  }
}
