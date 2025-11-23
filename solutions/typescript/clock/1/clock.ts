export class Clock {
  private hour: number
  private minute: number

  private parseMinutes = (totalMinutes: number) => {
    const minutes = totalMinutes % 60
    const hours = Math.floor(totalMinutes / 60)
    return { hours, minutes }
  }

  private parseHours = (totalHours: number) => {
    return totalHours % 24
  }

  private stringify = (num: number) => {
    if (num > 9) {
      return num.toString()
    }
    return `0${num.toString()}`
  }

  constructor(hour: number, minute: number = 0) {
    const parsedMinutes = this.parseMinutes(minute)
    const parsedHours = this.parseHours(hour + parsedMinutes.hours)
    this.hour = parsedHours >= 0 ? parsedHours : 24 + parsedHours
    this.minute = parsedMinutes.minutes >= 0 ? parsedMinutes.minutes : 60 + parsedMinutes.minutes
  }

  public toString = (): string => {
    return `${this.stringify(this.hour)}:${this.stringify(this.minute)}`
  }

  public plus = (minutes: number): Clock => {
    const resultMinutes = this.parseMinutes(this.minute + minutes)
    const resultHours = this.parseHours(this.hour + resultMinutes.hours)

    this.hour = resultHours
    this.minute = resultMinutes.minutes

    return this
  }

  public minus = (minutes: number): Clock => {
    const resultMinutes = this.parseMinutes(this.minute - minutes)
    const resultHours = this.parseHours(this.hour + resultMinutes.hours)

    this.hour = resultHours >= 0 ? resultHours : 24 + resultHours
    this.minute = resultMinutes.minutes >= 0 ? resultMinutes.minutes : 60 + resultMinutes.minutes

    return this
  }

  public equals = (other: Clock): boolean => {
    return this.hour === other.hour && this.minute === other.minute
  }
}
