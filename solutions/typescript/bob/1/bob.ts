export function hey(message: string): string {
  message = message.trim()
  
  if (message.length === 0) {
    return 'Fine. Be that way!'
  }
  
  const containsLetters = message.match(/[A-Za-z]/)
  const isCapitalized = message === message.toUpperCase() && !!containsLetters
  const isQuestion = message.endsWith('?')
  
  if (isCapitalized) {
    if (isQuestion) {
      return "Calm down, I know what I'm doing!"
    }
    return 'Whoa, chill out!'
  }

  if (isQuestion) {
    return 'Sure.'
  }

  return 'Whatever.'
}
