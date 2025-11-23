const DNA_TO_RNA: Record<string, string> = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

export function toRna(dna: string) {
  return dna.split('').map((dnaChar: string) => {
    const rnaChar = DNA_TO_RNA[dnaChar]
    if (!rnaChar) {
      throw new Error('Invalid input DNA.')
    }
    return rnaChar
  }).join('')
}
