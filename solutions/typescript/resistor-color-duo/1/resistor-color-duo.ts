type Colors = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white'

const COLOR_CODES: Record<Colors, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedValue(colors: Colors[]) {
  colors = colors.slice(0, 2)
  
  let value = 0
  for (const color of colors) {
    value = value * 10 + COLOR_CODES[color]
  }
  return value
}
