const randomNumberGenerator = (max: number = 10) => {
  return Math.floor(Math.random() * max)
}

const randomLetterGenerator = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[randomNumberGenerator(alphabet.length)].toUpperCase()
}

export class Robot {
  private static names = new Set<string>()
  
  private static nameGenerator() {
    let name: string
    do {
      name = `${randomLetterGenerator()}${randomLetterGenerator()}${randomNumberGenerator()}${randomNumberGenerator()}${randomNumberGenerator()}`
    } while (Robot.names.has(name))
    Robot.names.add(name)
    return name
  }

  private robotName: string | null
  
  constructor() {
    this.robotName = Robot.nameGenerator()
  }

  public get name(): string {
    if (!this.robotName) {
      this.robotName = Robot.nameGenerator()
    }
    return this.robotName
  }

  public resetName(): void {
    this.robotName = null
  }

  public static releaseNames(): void {
    Robot.names.clear()
  }
}