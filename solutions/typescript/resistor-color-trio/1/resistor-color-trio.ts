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

export function decodedResistorValue(colors: Colors[]) {
  const ohmColors = colors.slice(0, 2)
  
  let value = 0
  for (const color of ohmColors) {
    value = value * 10 + COLOR_CODES[color]
  }

  const zerosCount = colors[2]
  if (!!zerosCount) {
    value *= Math.pow(10, COLOR_CODES[zerosCount])
  }

  if (value > 1000) {
    return `${value / 1000} kiloohms`
  } else {
    return `${value} ohms`
  }
}
