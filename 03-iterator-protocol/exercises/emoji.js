/*
  Exercise
  Let's implement an iterator over all the emojis of a given text.

  This iterator should behave as follows:

  - If you have the `text`: "Hello 👋 World 🌎"
  - The first time you call `iter.next()` you should get: `{done: false, value: '👋'}`
  - The second time you call `iter.next()` you should get: `{done: false, value: '🌎'}`
  - The third time you call `iter.next()` you should get: `{done: true, value: undefined}`

  Try to implement this iterator using 3 different styles:

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
  const arr = Array.from(text);
  let pos = 0;

  return {
    next() {
      while (pos < arr.length) {
        const curr = arr[pos++];
        if (curr.match(/\p{Emoji}/u) !== null) {
          return { done: false, value: curr }
        }
      }
      return { done: true }
    }
  }
}

export class EmojiIter {
  constructor (text) {
    this.chars = Array.from(text)
    // write your code here
    this.pos = 0;
  }

  next () {
    // write your code here
    while (this.pos < this.chars.length) {
      const char = this.chars[this.pos++];
      if (char.match(/\p{Emoji}/u) !== null) {
        return { done: false, value: char }
      }
    }
    return { done: true }
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
