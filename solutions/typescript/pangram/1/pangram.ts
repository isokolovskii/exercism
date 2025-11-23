export function isPangram(sentence: string) {
  const lowerCased = sentence.toLowerCase()

  const aChar = 'a'.charCodeAt(0)
  const zChar = 'z'.charCodeAt(0)
  const charsLength = zChar - aChar

  let chars = [...new Array(charsLength)].map((_, index) => String.fromCharCode(aChar + index))
  
  for( var i = 0; i < chars.length; i++){                               
    if (lowerCased.includes(chars[i])) { 
        chars.splice(i, 1)
        i--
    }

    if (chars.length === 0) {
      break
    }
  }

  return chars.length === 0
}
